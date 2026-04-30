import { generateSEO } from "@/config/seo";
import BlogClient from "./PageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...generateSEO({
    title: "Real Estate Blog & Insights in Hyderabad",
    description:
      "Explore real estate insights, property investment tips, and market trends in Hyderabad from Aniva Group experts.",
    path: "/blog",
  }),

  keywords: [
    "real estate blog Hyderabad",
    "property investment tips",
    "Hyderabad real estate trends",
    "plots buying guide",
    "Aniva Group blog",
  ],

  openGraph: {
    title: "Real Estate Blog | Aniva Group",
    description:
      "Latest real estate insights and investment tips from Aniva Group.",
    url: "/blog",
    siteName: "Aniva Group",
    type: "website",
  },

  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}