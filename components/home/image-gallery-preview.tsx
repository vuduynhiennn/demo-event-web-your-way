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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group overflow-hidden rounded-2xl shadow-xl relative bg-white h-80 md:h-96`}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className="cursor-pointer relative h-full"
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
                <DialogContent className="max-w-5xl p-0 bg-black/90 border-none flex flex-col items-center justify-center overflow-hidden">
                  <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 shadow-lg transition-all duration-200"
                      onClick={() => {
                        const prev =
                          (currentIndex - 1 + galleryImages.length) %
                          galleryImages.length;
                        setSelectedImage(galleryImages[prev]);
                        setCurrentIndex(prev);
                      }}
                      aria-label="Trước"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </button>
                    {selectedImage && (
                      <motion.div
                        key={selectedImage.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <Image
                          src={selectedImage.src}
                          alt={selectedImage.alt}
                          fill
                          className="object-contain rounded-xl"
                        />
                      </motion.div>
                    )}
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 shadow-lg transition-all duration-200"
                      onClick={() => {
                        const next = (currentIndex + 1) % galleryImages.length;
                        setSelectedImage(galleryImages[next]);
                        setCurrentIndex(next);
                      }}
                      aria-label="Tiếp"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-lg font-semibold drop-shadow-lg">
                      {selectedImage?.alt}{" "}
                      <Badge
                        variant="secondary"
                        className="ml-2 bg-white/30 text-white border-none"
                      >
                        {selectedImage?.category}
                      </Badge>
                    </p>
                    <div className="mt-2 text-sm text-white/70">
                      {currentIndex + 1} / {galleryImages.length}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline" className="group" asChild>
            <Link href="/thu-vien-anh">
              Xem toàn bộ thư viện ảnh
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
