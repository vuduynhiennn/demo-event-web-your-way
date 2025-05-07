"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const programSections = [
  {
    title: "Khối Ngành Thiết Kế",
    programs: [
      {
        name: "Thiết Kế Đồ Họa",
        code: "7210403",
        desc: "Trang bị kiến thức, kỹ năng về nền tảng nghệ thuật và phương pháp thiết kế, các kỹ thuật ứng dụng và sử dụng công nghệ. Phục vụ truyền thông, quảng cáo, thương mại, giáo dục, giải trí như bộ nhận diện thương hiệu. Với 30 năm kinh nghiệm, hơn 4000 cử nhân đã tốt nghiệp.",
        quota: 160,
        combinations: "H00, H01, H06",
        image: "/static/n1.png",
      },
      {
        name: "Thiết Kế Thời Trang",
        code: "7210404",
        desc: "Thuộc khoa Tạo dáng Công nghiệp, ngành nóng với nhu cầu nhân lực cao, cơ hội việc làm phong phú và mức lương hấp dẫn.",
        quota: 50,
        combinations: "H00, H01, H06",
        image: "/static/n2.png",
      },
      {
        name: "Thiết Kế Nội Thất",
        code: "7580108",
        desc: "Thuộc khoa Tạo dáng Công nghiệp, đào tạo về mỹ thuật ứng dụng, giúp sinh viên thiết kế không gian nội thất chuyên nghiệp.",
        quota: 100,
        combinations: "H00, H01, H06",
        image: "/static/n3.png",
      },
    ],
  },
  {
    title: "Khối Ngành Công Nghệ",
    programs: [
      {
        name: "Công Nghệ Thông Tin",
        code: "7480201",
        desc: "Nền tảng vững chắc về công nghệ phần mềm, mạng máy tính, an toàn hệ thống, trí tuệ nhân tạo. Chọn chuyên ngành: Công nghệ phần mềm, Mạng và An toàn hệ thống, Công nghệ đa phương tiện.",
        quota: 410,
        combinations: "A00, A01, D01, K01 (Toán, Anh, Tin), K00, Q00",
        image: "/static/n4.png",
      },
      {
        name: "Công Nghệ Kỹ Thuật Điện Tử - Viễn Thông",
        code: "7510302",
        desc: "Kiến thức về hệ thống điện tử và viễn thông, đào tạo kỹ sư thiết kế, vận hành, bảo trì hệ thống hiện đại.",
        quota: 270,
        combinations: "A00, A01, D01, K01 (Toán, Anh, Tin), K00, Q00",
        image: "/static/n5.png",
      },
      {
        name: "Công Nghệ Kỹ Thuật Điều Khiển và Tự Động Hóa",
        code: "7510303",
        desc: "Tập trung vào hệ thống tự động hóa, điều khiển và robot công nghiệp, đáp ứng xu hướng công nghiệp 4.0.",
        quota: 240,
        combinations: "A00, A01, D01, K01 (Toán, Anh, Tin), K00, Q00",
        image: "/static/n6.png",
      },
    ],
  },
  {
    title: "Khối Ngành Kinh Tế - Quản Trị",
    programs: [
      {
        name: "Quản Trị Kinh Doanh",
        code: "7340101",
        desc: "Kiến thức về khoa học kinh tế, quản trị, tài chính, công cụ phân tích kinh tế. Học quản trị doanh nghiệp từ chiến lược đến điều hành.",
        quota: 290,
        combinations: "A00, A01, D01, K01 (Toán, Anh, Tin), K00, Q00",
        image: "/static/n7.png",
      },
      {
        name: "Kế Toán",
        code: "7340301",
        desc: "Kiến thức chuyên sâu về kế toán, kiểm toán, tài chính doanh nghiệp, làm việc trong các tổ chức kế toán chuyên nghiệp.",
        quota: 260,
        combinations: "A00, A01, D01, K01 (Toán, Anh, Tin), K00, Q00",
        image: "/static/n8.png",
      },
      {
        name: "Thương Mại Điện Tử",
        code: null,
        desc: "Trang bị khả năng sáng tạo, tư duy kinh doanh online, ứng dụng công nghệ và vận hành nền tảng thương mại điện tử.",
        quota: 120,
        combinations: "A00, A01, D01, K01 (Toán, Anh, Tin), K00, Q00",
        image: "/static/n9.png",
      },
      {
        name: "Tài Chính - Ngân Hàng",
        code: null,
        desc: "Đào tạo chuyên sâu về tài chính, ngân hàng, quản lý rủi ro và đầu tư.",
        quota: 390,
        combinations: "A00, A01, D01, K01 (Toán, Anh, Tin), K00, Q00",
        image: "/static/n10.png",
      },
      {
        name: "Bảo Hiểm",
        code: null,
        desc: "Kiến thức về bảo hiểm, quản lý rủi ro và các sản phẩm bảo hiểm trong thị trường tài chính.",
        quota: 50,
        combinations: "A00, A01, D01, K01 (Toán, Anh, Tin), K00, Q00",
        image: "/static/n11.png",
      },
    ],
  },
  {
    title: "Khối Ngành Luật",
    programs: [
      {
        name: "Luật",
        code: "7380101",
        desc: "Đào tạo chuyên gia pháp lý với kiến thức vững chắc về pháp luật Việt Nam và quốc tế.",
        quota: 220,
        combinations: "D01, C01, C03, C14",
        image: "/static/n12.png",
      },
      {
        name: "Luật Kinh Tế",
        code: "7380107",
        desc: "Chuyên sâu về pháp luật trong lĩnh vực kinh tế, thương mại và doanh nghiệp.",
        quota: 220,
        combinations: "D01, C01, C03, C14",
        image: "/static/n13.png",
      },
      {
        name: "Luật Quốc Tế",
        code: "7380108",
        desc: "Tập trung vào pháp luật quốc tế và các vấn đề pháp lý trong thương mại toàn cầu.",
        quota: 100,
        combinations: "D01, C01, C03, C14",
        image: "/static/n14.png",
      },
    ],
  },
  {
    title: "Khối Ngành Ngôn Ngữ",
    programs: [
      {
        name: "Ngôn Ngữ Anh",
        code: "7220201",
        desc: "Sử dụng thành thạo tiếng Anh trong giao tiếp và công việc, đáp ứng nhu cầu nhân lực trong thời kỳ hội nhập.",
        quota: 300,
        combinations: "D01, Q00",
        image: "/static/n15.png",
      },
      {
        name: "Ngôn Ngữ Trung Quốc",
        code: "7220204",
        desc: "Đào tạo tiếng Trung thành thạo, phục vụ giao tiếp và công việc trong bối cảnh hợp tác Việt - Trung ngày càng tăng.",
        quota: 280,
        combinations: "D01, Q00",
        image: "/static/n16.png",
      },
    ],
  },
  {
    title: "Các Ngành Khác",
    programs: [
      {
        name: "Công Nghệ Sinh Học",
        code: null,
        desc: "Ứng dụng khoa học và công nghệ vào các quá trình sinh học phục vụ đời sống và sản xuất.",
        quota: 80,
        combinations: "A00, B00, D01",
        image: "/static/n17.png",
      },
      {
        name: "Công Nghệ Thực Phẩm",
        code: null,
        desc: "Đào tạo chuyên gia về sản xuất, chế biến và bảo quản thực phẩm an toàn, chất lượng.",
        quota: 130,
        combinations: "A00, B00, D01",
        image: "/static/n18.png",
      },
      {
        name: "Kiến Trúc",
        code: null,
        desc: "Thiết kế và quy hoạch không gian sống, công trình xây dựng với tính thẩm mỹ và công năng cao.",
        quota: 70,
        combinations: "V00, V01, H01",
        image: "/static/n19.png",
      },
      {
        name: "Quản Trị Dịch Vụ Du Lịch và Lữ Hành",
        code: null,
        desc: "Đào tạo chuyên gia tổ chức, quản lý các hoạt động du lịch và lữ hành chuyên nghiệp.",
        quota: 200,
        combinations: "D01, C00, A01",
        image: "/static/n20.png",
      },
      {
        name: "Quản Trị Khách Sạn",
        code: null,
        desc: "Kiến thức và kỹ năng quản lý, vận hành khách sạn và các dịch vụ liên quan.",
        quota: 200,
        combinations: "D01, C00, A01",
        image: "/static/n21.png",
      },
    ],
  },
];

export default function CacNganhHoc() {
  return (
    <main className="container py-12 space-y-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Badge variant="outline" className="mb-2">
          Chương Trình Đào Tạo
        </Badge>
        <h1 className="text-4xl font-bold mb-4">
          Các Ngành Đào Tạo Tại Đại Học Mở Hà Nội
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Trường Đại học Mở Hà Nội đào tạo 21 ngành ở trình độ đại học và 7
          ngành ở trình độ sau đại học, đáp ứng nhu cầu đa dạng của xã hội hiện
          đại.
        </p>
      </motion.div>

      {programSections.map((section, idx) => (
        <section className="space-y-8" key={section.title}>
          <h2 className="text-3xl font-bold text-center">{section.title}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {section.programs.map((prog, i) => (
              <Card
                key={prog.name}
                className="group overflow-hidden shadow-md rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-xl bg-white"
              >
                {/* Card Image */}
                <div className="relative w-full h-40 bg-gray-100">
                  <img
                    src={prog.image || ""}
                    alt={prog.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold">
                    {prog.name}
                    {prog.code ? ` (${prog.code})` : ""}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-3 min-h-[48px]">
                    {prog.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs mb-2">
                    <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                      Chỉ tiêu 2025: {prog.quota}
                    </span>
                    <span className="inline-block bg-secondary/40 text-secondary-foreground px-2 py-1 rounded">
                      Tổ hợp: {prog.combinations}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <section className="text-center py-12 bg-muted/30 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Kế Hoạch Tuyển Sinh 2025</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
          Năm 2025, Trường Đại học Mở Hà Nội dự kiến tuyển sinh 4.140 chỉ tiêu
          qua các phương thức xét tuyển đa dạng: Xét điểm thi THPT 2025, Xét học
          bạ, Xét đánh giá năng lực, Đánh giá tư duy, Phương thức ưu tiên,
          Phương thức kết hợp.
        </p>
        <Button size="lg" asChild>
          <Link href="/dang-ky">Đăng Ký Ngay</Link>
        </Button>
      </section>
    </main>
  );
}
