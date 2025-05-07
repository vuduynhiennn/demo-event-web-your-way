"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "@/lib/motion";
import { Calendar, Phone, Video, ArrowRight, Clock, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function ConsultationCTA() {
  return (
    <section className="py-24 ">
      <div className="container">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
              Tư vấn chuyên nghiệp
            </Badge>

            <h2 className="text-4xl font-bold leading-tight">
              Khởi đầu hành trình thành công cùng Đại học Mở Hà Nội
            </h2>

            <p className="text-lg text-muted-foreground">
              Đặt lịch tư vấn với đội ngũ chuyên gia của Trường Đại học Mở Hà
              Nội để được định hướng ngành học phù hợp, giải đáp thắc mắc về
              tuyển sinh, chương trình đào tạo và cơ hội nghề nghiệp.
            </p>

            <div className="grid gap-6">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        Đội ngũ tư vấn chuyên nghiệp
                      </CardTitle>
                      <CardDescription>
                        Giàu kinh nghiệm, tận tâm hỗ trợ thí sinh và phụ huynh
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        Lịch hẹn linh hoạt
                      </CardTitle>
                      <CardDescription>
                        Chủ động chọn thời gian tư vấn phù hợp
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        Đa dạng hình thức tư vấn
                      </CardTitle>
                      <CardDescription>
                        Tư vấn trực tiếp tại trường, trực tuyến hoặc qua điện
                        thoại
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm">
              <CardHeader className="space-y-1 text-center pb-2">
                <CardTitle className="text-2xl">
                  Đăng ký tư vấn tuyển sinh
                </CardTitle>
                <CardDescription>
                  Hãy để Đại học Mở Hà Nội đồng hành cùng bạn trên con đường học
                  tập
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <p className="font-medium">Lịch tư vấn linh hoạt</p>
                      <p className="text-muted-foreground">
                        Thứ 2 - Thứ 6, 9h00 - 17h00 (hoặc theo lịch hẹn riêng)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Clock className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <p className="font-medium">Thời lượng tư vấn hợp lý</p>
                      <p className="text-muted-foreground">
                        Mỗi buổi tư vấn khoảng 30 phút, tập trung và hiệu quả
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Phone className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <p className="font-medium">Hỗ trợ trực tiếp</p>
                      <p className="text-muted-foreground">
                        Đội ngũ tư vấn luôn sẵn sàng hỗ trợ, giải đáp mọi thắc
                        mắc
                      </p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full group" asChild>
                  <Link href="/hen-tu-van">
                    Đăng ký tư vấn ngay
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Miễn phí 100% • Không ràng buộc
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
