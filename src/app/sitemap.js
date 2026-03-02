import fs from "fs";
import path from "path";

import blogs from "./blog/blogsData.json";
import therapies from "./services/therapies.json";
import treatments from "./services/treatments.json";

export const revalidate = 604800; // once per week

const baseUrl = "https://vsrvriksha.com";

// 🔥 Auto detect static routes from src/app
function getStaticRoutes() {
  const appDir = path.join(process.cwd(), "src", "app");

  const entries = fs.readdirSync(appDir, { withFileTypes: true });

  return entries
    .filter(
      (entry) =>
        entry.isDirectory() &&
        !entry.name.startsWith("[") && // ignore dynamic folders
        !entry.name.startsWith("_") &&
        entry.name !== "api"
    )
    .map((entry) => ({
      url: `${baseUrl}/${entry.name}`,
      lastModified: new Date(),
    }));
}

export default async function sitemap() {
  const staticRoutes = getStaticRoutes();

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
  }));

  const therapyRoutes = therapies.map((item) => ({
    url: `${baseUrl}/services/${item.slug}`,
    lastModified: new Date(),
  }));

  const treatmentRoutes = treatments.map((item) => ({
    url: `${baseUrl}/services/${item.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...staticRoutes,
    ...blogRoutes,
    ...therapyRoutes,
    ...treatmentRoutes,
  ];
}