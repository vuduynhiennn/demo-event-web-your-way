"use client";
import Image from "next/image";
import { User2, Eye, List } from "lucide-react";
import { useState } from "react";

export default function ArticleDetailClient({
  article,
  toc,
  content,
  related,
}: {
  article: any;
  toc: { id: string; text: string }[];
  content: JSX.Element;
  related: any[];
}) {
  const [showToc, setShowToc] = useState(false);
  return (
    <main className="max-w-7xl mx-auto py-8 px-4 flex flex-col lg:flex-row gap-8">
      {/* Sidebar TOC (desktop) */}
      <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24 self-start">
        <div className="bg-white/90 rounded-xl shadow p-4 mb-8">
          <div className="flex items-center gap-2 mb-3 font-semibold text-primary">
            <List className="w-5 h-5" /> Mục lục
          </div>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-muted-foreground hover:text-primary transition"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 min-w-0">
        {/* TOC mobile toggle */}
        <div className="lg:hidden mb-4">
          <button
            className="flex items-center gap-2 px-3 py-2 rounded bg-primary/10 text-primary font-medium"
            onClick={() => setShowToc((v) => !v)}
          >
            <List className="w-5 h-5" /> Mục lục
          </button>
          {showToc && (
            <div className="bg-white/90 rounded-xl shadow p-4 mt-2">
              <ul className="space-y-2">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-muted-foreground hover:text-primary transition"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Article Header */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-xs font-medium">
              {article.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {article.createdAt}
            </span>
            <span className="flex items-center text-xs text-muted-foreground ml-4">
              <Eye className="w-4 h-4 mr-1" /> {article.views} lượt xem
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
            {article.title}
          </h1>
        </section>

        {/* Cover Image with overlay */}
        <section className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8 shadow-lg">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </section>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-10 bg-white/80 rounded-xl p-6 shadow">
          {content}
        </section>

        {/* Author/Info Box */}
        <section className="flex items-center gap-4 bg-primary/5 rounded-lg p-4 mb-12 shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <User2 className="w-7 h-7 text-primary" />
          </div>
          <div>
            <div className="font-semibold">Ban biên tập HOU</div>
            <div className="text-xs text-muted-foreground">
              Đại học Mở Hà Nội
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Bài viết liên quan</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {related.map((rel) => (
              <a
                key={rel.slug}
                href={`/bai-viet/${rel.slug}`}
                className="flex items-center gap-4 bg-card rounded-lg p-3 hover:shadow-md transition border hover:border-primary/40"
              >
                <div className="relative w-20 h-16 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-base line-clamp-2 mb-1">
                    {rel.title}
                  </div>
                  <div className="text-xs text-muted-foreground line-clamp-2">
                    {rel.description}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
