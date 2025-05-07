import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { articles, Article } from "@/lib/articles";

export default function ArticleListPage() {
  // Group articles by category
  const categories = Array.from(new Set(articles.map((a) => a.category)));
  const imageMap: Record<string, string> = {
    "tong-quan-dai-hoc-mo-ha-noi": "/static/bv1.jpg",
    "nganh-noi-bat-hou": "/static/bv2.jpg",
    "co-hoi-viec-lam-hou": "/static/bv3.png",
    "doi-ngu-giang-vien-hou": "/static/sv1.jpg",
  };

  return (
    <main className="py-12 px-4 max-w-full mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Bài Viết Về Đại Học Mở Hà Nội
      </h1>
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-left">{category}</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
            {articles
              .filter((a) => a.category === category)
              .map((article: Article) => (
                <div
                  key={article.slug}
                  className="bg-card rounded-lg shadow-sm overflow-hidden flex flex-col h-full border hover:border-primary/50 transition-colors"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={imageMap[article.slug] || article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium mb-2">
                      {article.category}
                    </span>
                    <h2 className="text-xl font-semibold mb-2">
                      {article.title}
                    </h2>
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
        </div>
      ))}
    </main>
  );
}
