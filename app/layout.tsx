import "@/styles/globals.css";
import type { Metadata } from "next";
import { defaultSEO } from "@/config/seo";
import { siteConfig } from "@/config/site";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AppProviders from "@/providers/AppProviders";
import FloatingWrapper from "@/components/FloatingWrapper";

/* ✅ ADD THIS */
import GalleryModal from "@/components/sections/GalleryModal/GalleryModal";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProviders>

          <Navbar />

          <main>{children}</main>

          <Footer />

          <FloatingWrapper />

          {/* 🔥 REQUIRED FOR FULLSCREEN GALLERY */}
          <GalleryModal />

        </AppProviders>
      </body>
    </html>
  );
}