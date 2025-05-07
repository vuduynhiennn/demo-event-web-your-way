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
          <ArticleCarousel
            articles={[
              {
                slug: "tong-quan-dai-hoc-mo-ha-noi",
                title: "Tổng Quan Về Trường Đại Học Mở Hà Nội",
                category: "Giới thiệu",
                image: "/images/hou-campus.jpg",
                description:
                  "Trường Đại học Mở Hà Nội là cơ sở giáo dục đại học công lập hàng đầu với hơn 30 năm phát triển, cung cấp cơ hội học tập cho mọi người và tỷ lệ việc làm sau tốt nghiệp trên 90%.",
                createdAt: "01/06/2024",
                views: 1200,
              },
              {
                slug: "nganh-noi-bat-hou",
                title: "Các Ngành Đào Tạo Nổi Bật",
                category: "Ngành học",
                image: "/images/hou-programs.jpg",
                description:
                  "Khám phá các ngành học như Thiết kế đồ họa, Công nghệ thông tin, Quản trị kinh doanh, Luật, Ngôn ngữ Anh... đáp ứng nhu cầu xã hội hiện đại.",
                createdAt: "28/05/2024",
                views: 980,
              },
              {
                slug: "co-hoi-viec-lam-hou",
                title: "Cơ Hội Việc Làm Sau Tốt Nghiệp",
                category: "Cơ hội nghề nghiệp",
                image: "/images/hou-career.jpg",
                description:
                  "Tỷ lệ sinh viên có việc làm sau tốt nghiệp tại HOU luôn ở mức cao, nhiều ngành đạt 100%. Chương trình đào tạo gắn liền thực tiễn, đáp ứng nhu cầu doanh nghiệp.",
                createdAt: "20/05/2024",
                views: 750,
              },
              {
                slug: "doi-ngu-giang-vien-hou",
                title: "Đội Ngũ Giảng Viên Chất Lượng Cao",
                category: "Giảng viên",
                image: "/images/hou-teacher.jpg",
                description:
                  "Đội ngũ giảng viên gồm nhiều Giáo sư, Phó Giáo sư, Tiến sĩ, Thạc sĩ giàu kinh nghiệm, tận tâm đồng hành cùng sinh viên trong suốt quá trình học tập.",
                createdAt: "15/05/2024",
                views: 600,
              },
            ]}
          />
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
