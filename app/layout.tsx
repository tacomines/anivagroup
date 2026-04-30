import "@/styles/globals.css";
import type { Metadata } from "next";

import { defaultSEO } from "@/config/seo";
import { siteConfig } from "@/config/site";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AppProviders from "@/providers/AppProviders";
import FloatingWrapper from "@/components/FloatingWrapper";
import GalleryModal from "@/components/sections/GalleryModal/GalleryModal";

/* ✅ FONT */
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/* ✅ SAFE METADATA (NO TYPE ERRORS) */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: String(defaultSEO.title),
    template: "%s | Aniva Group",
  },

  description: String(defaultSEO.description),

  /* ✅ FORCE SAFE TYPE */
  keywords: Array.isArray(defaultSEO.keywords)
    ? defaultSEO.keywords
    : [],

  openGraph: {
    title: String(defaultSEO.title),
    description: String(defaultSEO.description),
    url: siteConfig.url,
    siteName: "Aniva Group",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: String(defaultSEO.title),
    description: String(defaultSEO.description),
  },

  alternates: {
    canonical: siteConfig.url,
  },
};

/* ✅ ROOT */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>

          <Navbar />

          <main>
            {children}
          </main>

          <Footer />

          <FloatingWrapper />

          <GalleryModal />

        </AppProviders>
      </body>
    </html>
  );
}