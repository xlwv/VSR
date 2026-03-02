import fs from "fs";
import path from "path";

export const runtime = "nodejs"; // 🔥 REQUIRED FOR VPS
// export const dynamic = "force-dynamic";
export const revalidate = 604800;

const baseUrl = "https://vsrvriksha.com";

/* =========================
   AUTO DETECT STATIC PAGES
========================= */

function getStaticRoutes(dir, basePath = "") {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  for (const entry of entries) {
    if (
      entry.name.startsWith("(") ||
      entry.name.startsWith("_") ||
      entry.name === "api" ||
      entry.name === "sitemap.js" ||
      entry.name === "robots.js" ||
      entry.name.includes("[")
    ) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      routes.push(
        ...getStaticRoutes(fullPath, `${basePath}/${entry.name}`)
      );
    }

    if (entry.name === "page.js") {
      routes.push({
        url: `${baseUrl}${basePath || ""}`,
        lastModified: new Date(),
      });
    }
  }

  return routes;
}

/* =========================
   FETCH BLOG POSTS
========================= */

async function getBlogRoutes() {
  try {
    const res = await fetch(`${baseUrl}/api/blog`, {
      cache: "no-store",
    });

    if (!res.ok) return [];

    const blogs = await res.json();

    return blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.updatedAt || Date.now()),
    }));
  } catch (error) {
    console.error("Sitemap Blog Error:", error);
    return [];
  }
}

/* =========================
   MAIN
========================= */

export default async function sitemap() {
  try {
    const appDir = path.join(process.cwd(), "app");

    const staticRoutes = getStaticRoutes(appDir);
    const blogRoutes = await getBlogRoutes();

    return [...staticRoutes, ...blogRoutes];
  } catch (err) {
    console.error("Sitemap Error:", err);
    return [];
  }
}