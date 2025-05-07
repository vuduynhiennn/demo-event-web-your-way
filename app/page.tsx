"use client";

import Hero from "@/components/home/hero";
import FeaturedPrograms from "@/components/home/featured-programs";
import Testimonials from "@/components/home/testimonials";
import ImageGalleryPreview from "@/components/home/image-gallery-preview";
import QualityAssurance from "@/components/home/quality-assurance";
import ConsultationCTA from "@/components/home/consultation-cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Hero />
      <FeaturedPrograms />
      <Testimonials />
      <ImageGalleryPreview />
      <QualityAssurance />
      <ConsultationCTA />
    </main>
  );
}
