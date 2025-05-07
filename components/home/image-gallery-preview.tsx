"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "@/lib/motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const galleryImages = [
  {
    id: 1,
    src: "/static/ga.png",
    alt: "Buổi học thực tế của sinh viên",
    category: "Trải nghiệm",
  },
  {
    id: 2,
    src: "/static/ga1.jpg",
    alt: "Tiết học tại khu học tập quân sự",
    category: "Học tập",
  },
  {
    id: 3,
    src: "/static/ga2.png",
    alt: "Khoa kinh tế trường đại học Mở Hà Nội",
    category: "Khoa kinh tế",
  },
  {
    id: 4,
    src: "/static/ga4.png",
    alt: "Sinh viên thảo luận sôi nổi",
    category: "Năng động",
  },
  {
    id: 5,
    src: "/static/ga5.jpeg",
    alt: "Phòng thực hành máy tính",
    category: "Hiện đại",
  },
  {
    id: 6,
    src: "/static/ga6.jpeg",
    alt: "Tiết học công dân giữa khoá",
    category: "Năng lực",
  },
];

type ImageType = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

export default function ImageGalleryPreview() {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-2">
              Hoạt động sinh viên
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Khám phá không gian & hoạt động tại Khoa Kinh tế
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hành trình hình ảnh về khuôn viên, sự kiện và hoạt động sinh viên
              nổi bật.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group overflow-hidden rounded-2xl shadow-lg relative bg-white`}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className="cursor-pointer relative aspect-[16/10]"
                    onClick={() => {
                      setSelectedImage(image);
                      setCurrentIndex(index);
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Badge className="bg-black/50 text-white hover:bg-black/60 border-none text-base px-4 py-2">
                        {image.category}
                      </Badge>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl flex flex-col items-center">
                  <div className="relative w-full aspect-[16/9] flex items-center justify-center">
                    <button
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary/80 text-primary hover:text-white rounded-full p-2 shadow-md"
                      onClick={() => {
                        const prev =
                          (currentIndex - 1 + galleryImages.length) %
                          galleryImages.length;
                        setSelectedImage(galleryImages[prev]);
                        setCurrentIndex(prev);
                      }}
                      aria-label="Trước"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    {selectedImage && (
                      <Image
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        fill
                        className="object-contain rounded-xl"
                      />
                    )}
                    <button
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary/80 text-primary hover:text-white rounded-full p-2 shadow-md"
                      onClick={() => {
                        const next = (currentIndex + 1) % galleryImages.length;
                        setSelectedImage(galleryImages[next]);
                        setCurrentIndex(next);
                      }}
                      aria-label="Tiếp"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                  <p className="text-center mt-4 text-lg font-semibold">
                    {selectedImage?.alt}{" "}
                    <Badge variant="outline" className="ml-2">
                      {selectedImage?.category}
                    </Badge>
                  </p>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline" className="group" asChild>
            <Link href="/gallery">
              Xem toàn bộ thư viện ảnh
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
