import { generateSEO } from "@/config/seo";
import ProjectsPageClient from "./PageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...generateSEO({
    title: "Ongoing Real Estate Projects in Hyderabad",
    description:
      "Explore ongoing real estate projects by Aniva Group in Tellapur, Nallagandla and prime Hyderabad locations with high investment potential.",
    path: "/ongoing-projects",
  }),

  keywords: [
    "ongoing projects Hyderabad",
    "plots in Tellapur",
    "HMDA plots Hyderabad",
    "real estate investment Hyderabad",
    "Aniva projects",
  ],

  openGraph: {
    title: "Ongoing Projects | Aniva Group",
    description:
      "Discover premium real estate projects in Hyderabad’s fastest growing locations.",
    url: "/ongoing-projects",
    siteName: "Aniva Group",
    type: "website",
  },

  alternates: {
    canonical: "/ongoing-projects",
  },
};

export default function OngoingProjectsPage() {
  return <ProjectsPageClient />;
}