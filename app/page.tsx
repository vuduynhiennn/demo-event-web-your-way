"use client";

import Hero from "@/components/home/hero";
import FeaturedPrograms from "@/components/home/featured-programs";
import Testimonials from "@/components/home/testimonials";
import ImageGalleryPreview from "@/components/home/image-gallery-preview";
import QualityAssurance from "@/components/home/quality-assurance";
import ConsultationCTA from "@/components/home/consultation-cta";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Carousel } from "@/components/ui/carousel";
import ArticleCarousel from "@/components/home/article-carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Hero />
      <FeaturedPrograms />
      <Testimonials />
      <ImageGalleryPreview />
      <QualityAssurance />
      <ConsultationCTA />
      {/* Article Section */}
      <section className="py-16 bg-background w-full">
        <div className="w-full">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="mb-2 inline-block rounded bg-primary/10 px-3 py-1 text-primary font-medium">
              Bài Viết
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Khám Phá Đại Học Mở Hà Nội
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Những bài viết nổi bật về trường, ngành học, cơ hội và môi trường
              đào tạo tại Đại học Mở Hà Nội.
            </p>
          </div>
          <ArticleCarousel />
          <div className="flex justify-center mt-4">
            <Button size="lg" asChild>
              <Link href="/bai-viet">Xem thêm bài viết</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
