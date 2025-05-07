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
    title: "Kế Toán",
    description:
      "Kế toán là công việc thu thập và xử lý dữ liệu kinh doanh, tài chính của tổ chức để cung cấp thông tin cho việc ra quyết định quản lý. Chương trình Cử nhân Kế toán cung cấp kiến thức nền tảng về kinh tế, quản trị, tài chính và kỹ năng chuyên sâu về kế toán tài chính, kế toán quản trị, kiểm toán, thuế và hệ thống thông tin kế toán.",
    icon: <Code className="h-10 w-10 text-chart-1" />,
    badge: "Ngành học nổi bật",
    link: "/chuong-trinh-hoc/ke-toan",
  },
  {
    id: 2,
    title: "Quản Trị Kinh Doanh",
    description:
      "Ngành Quản trị kinh doanh chuẩn bị cho người học năng lực quản lý các loại hình tổ chức khác nhau, từ doanh nghiệp đến khu vực công, với kiến thức nền tảng về kinh tế, xã hội và kỹ năng chuyên sâu về quản trị các lĩnh vực.",
    icon: <Lightbulb className="h-10 w-10 text-chart-2" />,
    badge: "Định hướng ứng dụng",
    link: "/chuong-trinh-hoc/quan-tri-kinh-doanh",
  },
  {
    id: 3,
    title: "Thương Mại Điện Tử",
    description:
      "Ngành Thương mại điện tử trang bị cho sinh viên khả năng phát huy sáng tạo, tư duy kinh doanh online, kỹ năng ứng dụng công nghệ vào kinh doanh và kiến thức vận hành các nền tảng thương mại điện tử.",
    icon: <Globe className="h-10 w-10 text-chart-4" />,
    badge: "Xu hướng số hoá",
    link: "/chuong-trinh-hoc/thuong-mai-dien-tu",
  },
  {
    id: 4,
    title: "International Relations",
    description:
      "Analyze global issues, diplomacy, and cross-cultural communication in our interconnected world.",
    icon: <Globe className="h-10 w-10 text-chart-4" />,
    badge: "Global Impact",
    link: "/chuong-trinh-hoc/international-relations",
  },
  {
    id: 5,
    title: "Creative Arts",
    description:
      "Develop your artistic talents and creative thinking in a supportive, inspiring environment.",
    icon: <Palette className="h-10 w-10 text-chart-5" />,
    badge: "Creative Focus",
    link: "/chuong-trinh-hoc/creative-arts",
  },
  {
    id: 6,
    title: "Education & Teaching",
    description:
      "Prepare for a rewarding career shaping the next generation of learners and leaders.",
    icon: <BookOpen className="h-10 w-10 text-chart-1" />,
    badge: "Community Impact",
    link: "/chuong-trinh-hoc/education",
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
