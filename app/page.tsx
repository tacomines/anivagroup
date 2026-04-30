import { generateSEO } from "@/config/seo";
import HomePageClient from "./PageClient";
import type { Metadata } from "next";

/* ✅ SEO + STRUCTURED DATA */
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

/* ✅ STRUCTURED DATA */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Aniva Group",
  url: "https://anivagroup.com",
  description:
    "Aniva Group offers premium real estate projects in Hyderabad including plots, villas and investment properties.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressCountry: "India",
  },
};

export default function HomePage() {
  return (
    <>
      {/* ✅ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <HomePageClient />
    </>
  );
}