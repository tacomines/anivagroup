import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.anivagroup.com", lastModified: new Date() },
    { url: "https://www.anivagroup.com/about", lastModified: new Date() },
    { url: "https://www.anivagroup.com/ongoing-projects", lastModified: new Date() },
    { url: "https://www.anivagroup.com/delivered-projects", lastModified: new Date() },
    { url: "https://www.anivagroup.com/property-partners", lastModified: new Date() },
    { url: "https://www.anivagroup.com/blog", lastModified: new Date() },
    { url: "https://www.anivagroup.com/contact", lastModified: new Date() },
  ];
}