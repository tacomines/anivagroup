import { generateSEO } from "@/config/seo";
import ContactPageClient from "./PageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...generateSEO({
    title: "Contact Real Estate Experts in Hyderabad | Aniva Group",
    description:
      "Contact Aniva Group for premium real estate projects, site visits, and investment opportunities in Hyderabad. Call, email, or visit our office.",
    path: "/contact",
  }),

  keywords: [
    "contact real estate Hyderabad",
    "Aniva Group contact",
    "property enquiry Hyderabad",
    "real estate office Hyderabad",
    "site visit booking Hyderabad",
  ],

  openGraph: {
    title: "Contact Aniva Group",
    description:
      "Get in touch for premium real estate projects and site visits in Hyderabad.",
    url: "/contact",
    siteName: "Aniva Group",
    type: "website",
  },

  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}