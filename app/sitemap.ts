import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { blogPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about-us",
    "/services",
    "/fire-rated-doors-uae",
    "/fireproof-doors-in-dubai",
    "/acoustic-doors-uae",
    "/hotel-soundproof-doors-in-uae",
    "/studio-acoustic-doors-in-uae",
    "/interior-joinery",
    "/projects",
    "/gallery",
    "/certificates",
    "/blog",
    "/contact-us",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
