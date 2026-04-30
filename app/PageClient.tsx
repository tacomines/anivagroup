"use client";

import dynamic from "next/dynamic";

/* ✅ LAZY LOAD NON-CRITICAL SECTIONS (PERFORMANCE BOOST) */
const HeroSection = dynamic(
  () => import("@/components/sections/HeroSection/HeroSection"),
  { ssr: true }
);

const FeatureProjectsSection = dynamic(
  () => import("@/components/sections/FeatureProjectsSection/FeatureProjectsSection")
);

const WhyChooseUsSection = dynamic(
  () => import("@/components/sections/WhyChooseUsSection/WhyChooseUsSection")
);

const TestimonialsSection = dynamic(
  () => import("@/components/sections/TestimonialsSection/TestimonialsSection")
);

const VideoSection = dynamic(
  () => import("@/components/sections/VideoSection/VideoSection")
);

const CTASection = dynamic(
  () => import("@/components/sections/CTASection/CTASection")
);

export default function HomePageClient() {
  return (
    <main>

      {/* HERO (CRITICAL FOR LCP — KEEP SSR) */}
      <section aria-label="Hero Section">
        <HeroSection />
      </section>

      {/* FEATURED PROJECTS */}
      <section aria-label="Featured Projects">
        <FeatureProjectsSection />
      </section>

      {/* WHY CHOOSE */}
      <section aria-label="Why Choose Aniva Group">
        <WhyChooseUsSection />
      </section>

      {/* TESTIMONIALS */}
      <section aria-label="Customer Testimonials">
        <TestimonialsSection />
      </section>

      {/* VIDEO */}
      <section aria-label="Project Videos">
        <VideoSection />
      </section>

      {/* CTA */}
      <section aria-label="Call to Action">
        <CTASection />
      </section>

    </main>
  );
}