import { notFound } from "next/navigation";
import Image from "next/image";
import { articles } from "@/lib/articles";
import { User2, Eye } from "lucide-react";

const articleContent: Record<string, JSX.Element> = {
  "tong-quan-dai-hoc-mo-ha-noi": (
    <>
      <p>
        Trường Đại học Mở Hà Nội là cơ sở giáo dục đại học công lập hàng đầu với
        hơn 30 năm phát triển, cung cấp cơ hội học tập cho mọi người và tỷ lệ
        việc làm sau tốt nghiệp trên 90%.
      </p>
      <p>
        Với quy mô đào tạo khoảng 35.000 sinh viên, trường khẳng định vai trò
        tiên phong trong cung cấp các chương trình đào tạo đáp ứng nhu cầu xã
        hội hiện đại.
      </p>
    </>
  ),
  "nganh-noi-bat-hou": (
    <>
      <p>
        Khám phá các ngành học như Thiết kế đồ họa, Công nghệ thông tin, Quản
        trị kinh doanh, Luật, Ngôn ngữ Anh... đáp ứng nhu cầu xã hội hiện đại.
      </p>
      <ul className="list-disc ml-6">
        <li>Thiết kế đồ họa</li>
        <li>Công nghệ thông tin</li>
        <li>Quản trị kinh doanh</li>
        <li>Luật</li>
        <li>Ngôn ngữ Anh</li>
      </ul>
    </>
  ),
  "co-hoi-viec-lam-hou": (
    <>
      <p>
        Tỷ lệ sinh viên có việc làm sau tốt nghiệp tại HOU luôn ở mức cao, nhiều
        ngành đạt 100%. Chương trình đào tạo gắn liền thực tiễn, đáp ứng nhu cầu
        doanh nghiệp.
      </p>
    </>
  ),
  "doi-ngu-giang-vien-hou": (
    <>
      <p>
        Đội ngũ giảng viên gồm nhiều Giáo sư, Phó Giáo sư, Tiến sĩ, Thạc sĩ giàu
        kinh nghiệm, tận tâm đồng hành cùng sinh viên trong suốt quá trình học
        tập.
      </p>
    </>
  ),
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  return (
    <main className="max-w-3xl mx-auto py-8 px-4">
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
        {articleContent[article.slug] || <p>{article.description}</p>}
      </section>

      {/* Author/Info Box */}
      <section className="flex items-center gap-4 bg-primary/5 rounded-lg p-4 mb-12 shadow-sm">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
          <User2 className="w-7 h-7 text-primary" />
        </div>
        <div>
          <div className="font-semibold">Ban biên tập HOU</div>
          <div className="text-xs text-muted-foreground">Đại học Mở Hà Nội</div>
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
    </main>
  );
}
