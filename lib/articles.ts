export type Article = {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  createdAt: string;
  views: number;
};

export const articles: Article[] = [
  {
    slug: "tong-quan-dai-hoc-mo-ha-noi",
    title: "Tổng Quan Về Trường Đại Học Mở Hà Nội",
    category: "Giới thiệu",
    image: "/static/bv1.jpg",
    description:
      "Trường Đại học Mở Hà Nội là cơ sở giáo dục đại học công lập hàng đầu với hơn 30 năm phát triển, cung cấp cơ hội học tập cho mọi người và tỷ lệ việc làm sau tốt nghiệp trên 90%.",
    createdAt: "01/06/2025",
    views: 1200,
  },
  {
    slug: "nganh-noi-bat-hou",
    title: "Các Ngành Đào Tạo Nổi Bật",
    category: "Ngành học",
    image: "/static/bv2.jpg",
    description:
      "Khám phá các ngành học như Thiết kế đồ họa, Công nghệ thông tin, Quản trị kinh doanh, Luật, Ngôn ngữ Anh... đáp ứng nhu cầu xã hội hiện đại.",
    createdAt: "28/05/2025",
    views: 980,
  },
  {
    slug: "co-hoi-viec-lam-hou",
    title: "Cơ Hội Việc Làm Sau Tốt Nghiệp",
    category: "Cơ hội nghề nghiệp",
    image: "/static/bv3.png",
    description:
      "Tỷ lệ sinh viên có việc làm sau tốt nghiệp tại HOU luôn ở mức cao, nhiều ngành đạt 100%. Chương trình đào tạo gắn liền thực tiễn, đáp ứng nhu cầu doanh nghiệp.",
    createdAt: "20/05/2025",
    views: 750,
  },
  {
    slug: "doi-ngu-giang-vien-hou",
    title: "Đội Ngũ Giảng Viên Chất Lượng Cao",
    category: "Giảng viên",
    image: "/static/sv1.jpg",
    description:
      "Đội ngũ giảng viên gồm nhiều Giáo sư, Phó Giáo sư, Tiến sĩ, Thạc sĩ giàu kinh nghiệm, tận tâm đồng hành cùng sinh viên trong suốt quá trình học tập.",
    createdAt: "15/05/2025",
    views: 600,
  },
];
