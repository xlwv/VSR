import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic"; // Always generate fresh sitemap
export const revalidate = 3600; // Regenerate every 1 hour

const baseUrl = "https://vsrvriksha.com";

/* =========================
   AUTO DETECT STATIC PAGES
========================= */

function getStaticRoutes(dir, basePath = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  for (const entry of entries) {
    // Skip unnecessary folders
    if (entry.name.startsWith("(")) continue; // route groups
    if (entry.name.startsWith("_")) continue;
    if (entry.name === "api") continue;
    if (entry.name === "sitemap.js") continue;
    if (entry.name === "robots.js") continue;
    if (entry.name.includes("[")) continue; // skip dynamic routes

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
        changeFrequency: "weekly",
        priority: basePath === "" ? 1 : 0.8,
      });
    }
  }

  return routes;
}

/* =========================
   FETCH DYNAMIC BLOG POSTS
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
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Sitemap Blog Error:", error);
    return [];
  }
}

/* =========================
   MAIN SITEMAP FUNCTION
========================= */

export default async function sitemap() {
  const appDir = path.join(process.cwd(), "app");

  const staticRoutes = getStaticRoutes(appDir);
  const blogRoutes = await getBlogRoutes();

  return [...staticRoutes, ...blogRoutes];
}