import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type Article = {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  createdAt: string;
  views: number;
};

interface ArticleCarouselProps {
  articles: Article[];
}

export default function ArticleCarousel({ articles }: ArticleCarouselProps) {
  return (
    <div className="w-full">
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="-ml-2">
          {articles.map((article) => (
            <CarouselItem
              key={article.slug}
              className="pl-2 basis-4/12 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="bg-card rounded-lg shadow-sm overflow-hidden flex flex-col h-full border hover:border-primary/50 transition-colors">
                <div className="relative w-full h-40">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {article.createdAt}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold mb-1 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm flex-1 mb-3 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="flex items-center text-xs text-muted-foreground">
                      <Eye className="w-4 h-4 mr-1" /> {article.views} lượt xem
                    </span>
                    <Link
                      href={`/bai-viet/${article.slug}`}
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      Đọc bài viết
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6" />
        <CarouselNext className="-right-6" />
      </Carousel>
    </div>
  );
}
