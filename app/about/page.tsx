import { generateSEO } from "@/config/seo";
import AboutPageClient from "./PageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...generateSEO({
    title: "About Aniva Group - Real Estate Developers in Hyderabad",
    description:
      "Learn about Aniva Group, a trusted real estate developer in Hyderabad offering premium plots, villa projects, and high-growth investment opportunities.",
    path: "/about",
  }),

  keywords: [
    "Aniva Group",
    "real estate developers Hyderabad",
    "property developers Hyderabad",
    "plots in Hyderabad",
    "real estate investment Hyderabad",
  ],

  openGraph: {
    title: "About Aniva Group",
    description:
      "Trusted real estate developer delivering premium projects in Hyderabad.",
    url: "/about",
    siteName: "Aniva Group",
    type: "website",
  },

  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}