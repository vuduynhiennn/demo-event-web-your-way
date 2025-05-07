import { notFound } from "next/navigation";
import Image from "next/image";
import { articles } from "@/lib/articles";
import ArticleDetailClient from "./ArticleDetailClient";

const articleContent: Record<string, JSX.Element> = {
  "tong-quan-dai-hoc-mo-ha-noi": (
    <>
      <h2 id="gioi-thieu">Giới thiệu chung</h2>
      <p>
        Trường Đại học Mở Hà Nội là cơ sở giáo dục đại học công lập hàng đầu với
        hơn 30 năm phát triển, cung cấp cơ hội học tập cho mọi người và tỷ lệ
        việc làm sau tốt nghiệp trên 90%.
      </p>
      <h2 id="quy-mo">Quy mô đào tạo</h2>
      <p>
        Với quy mô đào tạo khoảng 35.000 sinh viên, trường khẳng định vai trò
        tiên phong trong cung cấp các chương trình đào tạo đáp ứng nhu cầu xã
        hội hiện đại.
      </p>
    </>
  ),
  "nganh-noi-bat-hou": (
    <>
      <h2 id="nganh-hoc">Các ngành học nổi bật</h2>
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
      <h2 id="co-hoi-viec-lam">Cơ hội việc làm</h2>
      <p>
        Tỷ lệ sinh viên có việc làm sau tốt nghiệp tại HOU luôn ở mức cao, nhiều
        ngành đạt 100%. Chương trình đào tạo gắn liền thực tiễn, đáp ứng nhu cầu
        doanh nghiệp.
      </p>
    </>
  ),
  "doi-ngu-giang-vien-hou": (
    <>
      <h2 id="doi-ngu-giang-vien">Đội ngũ giảng viên</h2>
      <p>
        Đội ngũ giảng viên gồm nhiều Giáo sư, Phó Giáo sư, Tiến sĩ, Thạc sĩ giàu
        kinh nghiệm, tận tâm đồng hành cùng sinh viên trong suốt quá trình học
        tập.
      </p>
    </>
  ),
};

const tocMap: Record<string, { id: string; text: string }[]> = {
  "tong-quan-dai-hoc-mo-ha-noi": [
    { id: "gioi-thieu", text: "Giới thiệu chung" },
    { id: "quy-mo", text: "Quy mô đào tạo" },
  ],
  "nganh-noi-bat-hou": [{ id: "nganh-hoc", text: "Các ngành học nổi bật" }],
  "co-hoi-viec-lam-hou": [{ id: "co-hoi-viec-lam", text: "Cơ hội việc làm" }],
  "doi-ngu-giang-vien-hou": [
    { id: "doi-ngu-giang-vien", text: "Đội ngũ giảng viên" },
  ],
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const toc = tocMap[article.slug] || [];
  return (
    <ArticleDetailClient
      article={article}
      toc={toc}
      content={articleContent[article.slug] || <p>{article.description}</p>}
      related={related}
    />
  );
}
