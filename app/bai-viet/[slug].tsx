import { notFound } from "next/navigation";
import Image from "next/image";

const articles = [
  {
    slug: "tong-quan-dai-hoc-mo-ha-noi",
    title: "Tổng Quan Về Trường Đại Học Mở Hà Nội",
    category: "Giới thiệu",
    image: "/images/hou-campus.jpg",
    content: (
      <>
        <p>
          Trường Đại học Mở Hà Nội là cơ sở giáo dục đại học công lập hàng đầu
          với hơn 30 năm phát triển, cung cấp cơ hội học tập cho mọi người và tỷ
          lệ việc làm sau tốt nghiệp trên 90%.
        </p>
        <p>
          Với quy mô đào tạo khoảng 35.000 sinh viên, trường khẳng định vai trò
          tiên phong trong cung cấp các chương trình đào tạo đáp ứng nhu cầu xã
          hội hiện đại.
        </p>
      </>
    ),
  },
  {
    slug: "nganh-noi-bat-hou",
    title: "Các Ngành Đào Tạo Nổi Bật",
    category: "Ngành học",
    image: "/images/hou-programs.jpg",
    content: (
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
  },
  {
    slug: "co-hoi-viec-lam-hou",
    title: "Cơ Hội Việc Làm Sau Tốt Nghiệp",
    category: "Cơ hội nghề nghiệp",
    image: "/images/hou-career.jpg",
    content: (
      <>
        <p>
          Tỷ lệ sinh viên có việc làm sau tốt nghiệp tại HOU luôn ở mức cao,
          nhiều ngành đạt 100%. Chương trình đào tạo gắn liền thực tiễn, đáp ứng
          nhu cầu doanh nghiệp.
        </p>
      </>
    ),
  },
];

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
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
