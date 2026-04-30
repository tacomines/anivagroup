import { generateSEO } from "@/config/seo";
import PartnersClient from "./PageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...generateSEO({
    title: "Real Estate Partnership Opportunities in Hyderabad",
    description:
      "Partner with Aniva Group for real estate opportunities including joint ventures, land partnerships, and channel partnerships in Hyderabad.",
    path: "/partners",
  }),

  keywords: [
    "real estate partners Hyderabad",
    "channel partner real estate",
    "land partnership Hyderabad",
    "joint venture real estate",
    "Aniva Group partners",
  ],

  openGraph: {
    title: "Property Partners | Aniva Group",
    description:
      "Join hands with Aniva Group for high-growth real estate partnerships.",
    url: "/partners",
    siteName: "Aniva Group",
    type: "website",
  },

  alternates: {
    canonical: "/partners",
  },
};

export default function PartnersPage() {
  return <PartnersClient />;
}