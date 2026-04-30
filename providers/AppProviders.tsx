"use client";

import { ReactNode } from "react";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import { GalleryProvider } from "@/context/GalleryContext";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QuoteModalProvider>
      <GalleryProvider>{children}</GalleryProvider>
    </QuoteModalProvider>
  );
}