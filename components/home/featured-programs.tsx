"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Code,
  Globe,
  Lightbulb,
  Microscope,
  Palette,
} from "lucide-react";
import { motion } from "@/lib/motion";

const programs = [
  {
    id: 1,
    title: "Thiết Kế Đồ Họa",
    description:
      "Trang bị kiến thức, kỹ năng về nghệ thuật và phương pháp thiết kế, ứng dụng công nghệ trong truyền thông, quảng cáo, thương mại, giáo dục, giải trí như bộ nhận diện thương hiệu. Với 30 năm kinh nghiệm, hơn 4000 cử nhân đã tốt nghiệp.",
    icon: <Palette className="h-10 w-10 text-chart-1" />,
    badge: "Ngành học nổi bật",
    link: "/chuong-trinh-hoc/thiet-ke-do-hoa",
  },
  {
    id: 2,
    title: "Công Nghệ Thông Tin",
    description:
      "Cung cấp nền tảng vững chắc về công nghệ phần mềm, mạng máy tính, an toàn hệ thống, hệ thống thông tin, trí tuệ nhân tạo. Sinh viên chọn chuyên ngành như Công nghệ phần mềm, Mạng và An toàn hệ thống, Công nghệ đa phương tiện.",
    icon: <Code className="h-10 w-10 text-chart-2" />,
    badge: "Xu hướng công nghệ",
    link: "/chuong-trinh-hoc/cong-nghe-thong-tin",
  },
  {
    id: 3,
    title: "Quản Trị Kinh Doanh",
    description:
      "Trang bị kiến thức về khoa học kinh tế, quản trị, tài chính và các công cụ phân tích kinh tế. Sinh viên học quản trị doanh nghiệp từ hoạch định chiến lược đến tổ chức, điều hành.",
    icon: <Lightbulb className="h-10 w-10 text-chart-3" />,
    badge: "Định hướng ứng dụng",
    link: "/chuong-trinh-hoc/quan-tri-kinh-doanh",
  },
  {
    id: 4,
    title: "Luật",
    description:
      "Đào tạo chuyên gia pháp lý với kiến thức vững chắc về pháp luật Việt Nam và quốc tế, đặc biệt trong lĩnh vực kinh tế và thương mại quốc tế.",
    icon: <BookOpen className="h-10 w-10 text-chart-4" />,
    badge: "Chuyên môn cao",
    link: "/chuong-trinh-hoc/luat",
  },
  {
    id: 5,
    title: "Ngôn Ngữ Anh",
    description:
      "Đào tạo sinh viên sử dụng thành thạo tiếng Anh trong giao tiếp và công việc, đáp ứng nhu cầu nhân lực có kỹ năng ngoại ngữ trong thời kỳ hội nhập.",
    icon: <Globe className="h-10 w-10 text-chart-5" />,
    badge: "Hội nhập quốc tế",
    link: "/chuong-trinh-hoc/ngon-ngu-anh",
  },
  {
    id: 6,
    title: "Thiết Kế Thời Trang",
    description:
      "Thuộc khoa Tạo dáng Công nghiệp, ngành học 'nóng' với nhu cầu nhân lực cao, cơ hội việc làm phong phú và mức lương hấp dẫn so với nhiều ngành khác.",
    icon: <Palette className="h-10 w-10 text-chart-1" />,
    badge: "Sáng tạo đột phá",
    link: "/chuong-trinh-hoc/thiet-ke-thoi-trang",
  },
];

export default function FeaturedPrograms() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-2">
              Ngành Đào Tạo
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Khám Phá Lộ Trình Học Tập
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Các chương trình đào tạo đa dạng, chất lượng, đáp ứng nhu cầu thị
              trường lao động.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
                <CardHeader className="pb-2">
                  <div className="mb-2">{program.icon}</div>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <Badge variant="secondary" className="ml-2">
                      {program.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2 flex-1">
                  <CardDescription className="text-base text-muted-foreground">
                    {program.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="group" asChild>
                    <Link href={program.link}>
                      Xem chi tiết
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" asChild>
            <Link href="/chuong-trinh-hoc">Xem tất cả ngành học</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
