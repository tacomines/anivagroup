"use client";

import dynamic from "next/dynamic";

/* ✅ Lazy load for performance */
const FloatingButtons = dynamic(
  () => import("./shared/FloatingButtons"),
  { ssr: false }
);

export default function FloatingWrapper() {
  return <FloatingButtons />;
}