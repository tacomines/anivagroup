import type { Metadata } from "next";
import { siteConfig } from "./site";

/* ✅ GLOBAL DEFAULT SEO */
export const defaultSEO: Metadata = {
  title: "Aniva Group",
  description:
    "Aniva Group offers premium real estate projects, plots, and investment opportunities in Hyderabad.",
  keywords: [
    "Aniva Group",
    "real estate Hyderabad",
    "plots for sale",
    "ongoing projects",
    "property investment",
  ],
};

/* ✅ PAGE LEVEL SEO */
export function generateSEO({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title: `${title} | Aniva Group`,
    description,
    keywords: defaultSEO.keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Aniva Group`,
      description,
      url,
      siteName: "Aniva Group",
      type: "website",
    },
  };
}