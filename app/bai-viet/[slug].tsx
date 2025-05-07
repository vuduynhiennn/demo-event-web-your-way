import { notFound } from "next/navigation";
import Image from "next/image";
import { articles, Article } from "@/lib/articles";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a: Article) => a.slug === params.slug);
  if (!article) return notFound();
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <div className="mb-6">
        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium mb-2">
          {article.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
        <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <article className="prose prose-lg max-w-none">
          {article.content}
        </article>
      </div>
    </main>
  );
}
