import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "tong-quan-dai-hoc-mo-ha-noi",
    title: "Tổng Quan Về Trường Đại Học Mở Hà Nội",
    category: "Giới thiệu",
    image: "/images/hou-campus.jpg",
    description:
      "Trường Đại học Mở Hà Nội là cơ sở giáo dục đại học công lập hàng đầu với hơn 30 năm phát triển, cung cấp cơ hội học tập cho mọi người và tỷ lệ việc làm sau tốt nghiệp trên 90%.",
  },
  {
    slug: "nganh-noi-bat-hou",
    title: "Các Ngành Đào Tạo Nổi Bật",
    category: "Ngành học",
    image: "/images/hou-programs.jpg",
    description:
      "Khám phá các ngành học như Thiết kế đồ họa, Công nghệ thông tin, Quản trị kinh doanh, Luật, Ngôn ngữ Anh... đáp ứng nhu cầu xã hội hiện đại.",
  },
  {
    slug: "co-hoi-viec-lam-hou",
    title: "Cơ Hội Việc Làm Sau Tốt Nghiệp",
    category: "Cơ hội nghề nghiệp",
    image: "/images/hou-career.jpg",
    description:
      "Tỷ lệ sinh viên có việc làm sau tốt nghiệp tại HOU luôn ở mức cao, nhiều ngành đạt 100%. Chương trình đào tạo gắn liền thực tiễn, đáp ứng nhu cầu doanh nghiệp.",
  },
];

export default function ArticleListPage() {
  return (
    <main className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Bài Viết Về Đại Học Mở Hà Nội
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
