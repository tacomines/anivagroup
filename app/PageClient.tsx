"use client";

import HeroSection from "@/components/sections/HeroSection/HeroSection";
import FeatureProjectsSection from "@/components/sections/FeatureProjectsSection/FeatureProjectsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection/WhyChooseUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection/TestimonialsSection";
import VideoSection from "@/components/sections/VideoSection/VideoSection";
import CTASection from "@/components/sections/CTASection/CTASection";

export default function HomePageClient() {
  return (
    <main>

      {/* 🔥 HERO (H1 SHOULD LIVE INSIDE THIS COMPONENT) */}
      <section aria-label="Hero Section">
        <HeroSection />
      </section>

      {/* FEATURED PROJECTS */}
      <section aria-label="Featured Projects">
        <FeatureProjectsSection />
      </section>

      {/* WHY CHOOSE US */}
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