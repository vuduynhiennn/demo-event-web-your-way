import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/articles";

export default function ArticleListPage() {
  return (
    <main className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Bài Viết Về Đại Học Mở Hà Nội
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="bg-card rounded-lg shadow-sm overflow-hidden flex flex-col h-full border hover:border-primary/50 transition-colors"
          >
            <div className="relative w-full h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium mb-2">
                {article.category}
              </span>
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-muted-foreground text-sm flex-1 mb-4">
                {article.description}
              </p>
              <Link
                href={`/bai-viet/${article.slug}`}
                className="inline-flex items-center text-primary font-medium hover:underline mt-auto"
              >
                Xem thêm
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
