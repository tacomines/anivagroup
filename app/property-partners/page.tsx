import { generateSEO } from "@/config/seo";
import PartnersClient from "./PageClient";
import type { Metadata } from "next";

/* ✅ SEO + PERFORMANCE SAFE */
export const metadata: Metadata = {
  ...generateSEO({
    title: "Real Estate Partnership Opportunities in Hyderabad | Aniva Group",
    description:
      "Partner with Aniva Group for real estate opportunities in Hyderabad including joint ventures, land development, and channel partnerships for long-term growth.",
    path: "/partners",
  }),

  keywords: [
    "real estate partners Hyderabad",
    "channel partner real estate",
    "land partnership Hyderabad",
    "joint venture real estate India",
    "property investment partnership Hyderabad",
    "Aniva Group partners",
  ],

  openGraph: {
    title: "Property Partners | Aniva Group",
    description:
      "Join Aniva Group as a real estate partner and explore high-growth opportunities in Hyderabad including joint ventures and channel partnerships.",
    url: "/partners",
    siteName: "Aniva Group",
    type: "website",

    /* ✅ ADDED IMAGE FOR SOCIAL SHARING */
    images: [
      {
        url: "/images/banners/theam-image.png",
        width: 1200,
        height: 630,
        alt: "Real estate partnership opportunities with Aniva Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Property Partners | Aniva Group",
    description:
      "Explore real estate partnership opportunities with Aniva Group in Hyderabad.",
    images: ["/images/banners/theam-image.png"],
  },

  alternates: {
    canonical: "/partners",
  },
};

/* ✅ PAGE */
export default function PartnersPage() {
  return <PartnersClient />;
}