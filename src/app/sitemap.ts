import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.dhanyaenterprises.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/certifications",
    "/testimonials",
    "/contact",
    "/privacy",
    "/terms",
    "/services/website-design-development",
    "/services/ecommerce-website-development",
    "/services/seo",
    "/services/mobile-app-marketing",
    "/services/meta-ads",
    "/services/graphic-design",
    "/services/video-editing-motion-graphics",
    "/services/lead-generation-campaigns",
    "/services/local-seo-google-business-profile",
    "/services/marketing-strategy-consulting",
    "/services/marketplace-marketing",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/services/") ? 0.8 : 0.6,
  }));
}
