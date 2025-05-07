"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Award,
  Trophy,
  Users,
  BookOpen,
  Building,
} from "lucide-react";
import { motion } from "@/lib/motion";

const accreditations = [
  {
    id: 1,
    name: "Bộ Giáo dục và Đào tạo",
    logo: <Building className="h-12 w-12 text-primary" />,
    year: "Từ năm 1993",
  },
  {
    id: 2,
    name: "Các tổ chức kiểm định quốc tế",
    logo: <BookOpen className="h-12 w-12 text-primary" />,
    year: "Từ năm 2005",
  },
  {
    id: 3,
    name: "Liên kết doanh nghiệp, tổ chức",
    logo: <Users className="h-12 w-12 text-primary" />,
    year: "Từ năm 2010",
  },
];

const metrics = [
  {
    id: 1,
    label: "Tỉ lệ tốt nghiệp",
    value: "94,71%",
    icon: <CheckCircle className="h-8 w-8 text-chart-1" />,
  },
  {
    id: 2,
    label: "Tỉ lệ có việc làm",
    value: "Trên 90%",
    icon: <Award className="h-8 w-8 text-chart-2" />,
  },
  {
    id: 3,
    label: "Mức độ hài lòng sinh viên",
    value: "4.8/5",
    icon: <Trophy className="h-8 w-8 text-chart-3" />,
  },
];

const partners = [
  { name: "Microsoft", img: "/static/doitac1.png" },
  { name: "Google", img: "/static/doitac2.png" },
  { name: "Amazon", img: "/static/doitac3.png" },
  { name: "IBM", img: "/static/doitac4.png" },
  { name: "Tesla", img: "/static/doitac5.png" },
];

export default function QualityAssurance() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-2">
              Tiêu chuẩn chất lượng
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cam kết chất lượng đào tạo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi cam kết chất lượng đào tạo với tỷ lệ sinh viên có việc
              làm sau tốt nghiệp cao (trên 90%), được kiểm định bởi các tổ chức
              uy tín và khảo sát thường xuyên để điều chỉnh chương trình phù
              hợp.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-lg p-6 shadow-sm h-full">
              <h3 className="text-2xl font-bold mb-6">Kiểm định & Hợp tác</h3>
              <div className="grid gap-4">
                {accreditations.map((accreditation) => (
                  <div
                    key={accreditation.id}
                    className="flex items-center gap-4 p-4 border rounded-md"
                  >
                    <div className="rounded-full p-2 border bg-muted/40">
                      {accreditation.logo}
                    </div>
                    <div>
                      <h4 className="font-medium">{accreditation.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {accreditation.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Đội ngũ giảng viên</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Đội ngũ giảng viên chất lượng với 29 Giáo sư, 123 Phó Giáo sư,
                  322 Tiến sĩ, 487 Thạc sĩ - đều là chuyên gia hàng đầu, tận tâm
                  đồng hành cùng sinh viên.
                </p>
                <h4 className="font-semibold mb-4">Đối tác doanh nghiệp</h4>
                <div className="flex flex-wrap gap-2">
                  {partners.map((p) => (
                    <Badge
                      key={p.name}
                      variant="secondary"
                      className="flex items-center gap-2 px-3 py-2"
                    >
                      <img src={p.img} alt={p.name} className="h-6 w-auto" />
                      <span>{p.name}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-lg p-6 shadow-sm h-full">
              <h3 className="text-2xl font-bold mb-6">Chỉ số thành công</h3>

              <div className="grid gap-4 mb-8">
                {metrics.map((metric) => (
                  <Card
                    key={metric.id}
                    className="border-none shadow-none bg-muted/40"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-medium">
                          {metric.label}
                        </CardTitle>
                        {metric.icon}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-chart-1">
                        {metric.value}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <h4 className="font-semibold mb-4">Giải thưởng & Ghi nhận</h4>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Top 50 cơ sở giáo dục hàng đầu (2023)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Giải thưởng Đổi mới sáng tạo xuất sắc (2022)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Dịch vụ hỗ trợ sinh viên tốt nhất (2021)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Đối tác giáo dục toàn cầu của năm (2020)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
