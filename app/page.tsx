import { generateSEO } from "@/config/seo";
import HomePageClient from "./PageClient";
import type { Metadata } from "next";

/* ✅ ENHANCED SEO */
export const metadata: Metadata = {
  ...generateSEO({
    title: "Premium Real Estate Projects in Hyderabad",
    description:
      "Explore premium plots, villas, and real estate investment opportunities in Hyderabad with Aniva Group. Discover ongoing and delivered projects in high-growth locations.",
    path: "/",
  }),

  keywords: [
    "Aniva Group",
    "real estate Hyderabad",
    "plots in Hyderabad",
    "HMDA plots",
    "villa projects Hyderabad",
    "property investment Hyderabad",
  ],

  openGraph: {
    title: "Premium Real Estate Projects | Aniva Group",
    description:
      "Discover premium plots and villas in Hyderabad’s fastest growing locations.",
    url: "/",
    siteName: "Aniva Group",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Premium Real Estate Projects | Aniva Group",
    description:
      "Explore high-growth real estate opportunities in Hyderabad.",
  },

  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}