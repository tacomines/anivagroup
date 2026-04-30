import { generateSEO } from "@/config/seo";
import DeliveredClient from "./PageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...generateSEO({
    title: "Delivered Real Estate Projects in Hyderabad & Bangalore",
    description:
      "Explore completed real estate projects by Aniva Group across Hyderabad and Bangalore, built with trust, quality, and attention to detail.",
    path: "/delivered-projects",
  }),

  keywords: [
    "delivered projects Hyderabad",
    "completed projects Bangalore",
    "real estate builder Hyderabad",
    "Aniva completed projects",
    "apartments and villas Hyderabad",
  ],

  openGraph: {
    title: "Delivered Projects | Aniva Group",
    description:
      "View successfully completed projects by Aniva Group across prime locations.",
    url: "/delivered-projects",
    siteName: "Aniva Group",
    type: "website",
  },

  alternates: {
    canonical: "/delivered-projects",
  },
};

export default function DeliveredProjectsPage() {
  return <DeliveredClient />;
}