"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Modern campus building with glass facade",
    category: "facilities"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Students collaborating in library",
    category: "campus"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Graduation ceremony",
    category: "events"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Science laboratory with modern equipment",
    category: "facilities"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Student club meeting",
    category: "activities"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "International cultural festival",
    category: "events"
  },
];

export default function ImageGalleryPreview() {
  const [selectedImage, setSelectedImage] = useState(null);

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
            <Badge variant="outline" className="mb-2">Campus Life</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Excellence Academy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a visual journey through our campus, facilities, events, and student activities.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${
                index === 3 ? "col-span-2 md:col-span-1" : ""
              } group overflow-hidden rounded-lg relative`}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div 
                    className="cursor-pointer relative aspect-[4/3]"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Badge className="bg-black/50 text-white hover:bg-black/60 border-none">
                        {image.category}
                      </Badge>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <div className="relative w-full aspect-[16/9]">
                    {selectedImage && (
                      <Image
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>
                  <p className="text-center mt-2">
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
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}