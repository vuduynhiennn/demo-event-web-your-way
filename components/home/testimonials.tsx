"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Quote, Play } from "lucide-react";
import { motion } from "@/lib/motion";
import Link from "next/link";

type TestimonialType = {
  id: number;
  name: string;
  program: string;
  quote: string;
  image: string;
  videoId: string;
  category: string;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Nguyễn Thị Lan",
    program: "Kế toán",
    quote:
      "Chương trình học tại Khoa Kinh tế giúp tôi phát triển kỹ năng chuyên môn và tự tin làm việc ngay sau khi tốt nghiệp.",
    image: "/static/sv1.jpg",
    videoId: "testimonial-lan",
    category: "kế toán",
  },
  {
    id: 2,
    name: "Trần Văn Minh",
    program: "Quản trị kinh doanh",
    quote:
      "Nhờ sự hướng dẫn tận tâm của giảng viên, tôi đã có nền tảng vững chắc để phát triển sự nghiệp quản lý.",
    image: "/static/sv2.jpg",
    videoId: "testimonial-minh",
    category: "quản trị",
  },
  {
    id: 3,
    name: "Lê Thị Hương",
    program: "Thương mại điện tử",
    quote:
      "Kiến thức thực tiễn và kỹ năng công nghệ giúp tôi tự tin khởi nghiệp trong lĩnh vực kinh doanh số.",
    image: "/static/sv3.jpg",
    videoId: "testimonial-huong",
    category: "thương mại điện tử",
  },
  {
    id: 4,
    name: "Phạm Văn Đức",
    program: "Nghệ thuật sáng tạo",
    quote:
      "Sự hướng dẫn tận tình mà tôi nhận được trong chương trình Nghệ thuật sáng tạo đã giúp tôi phát triển phong cách nghệ thuật độc đáo. Cơ sở vật chất và nguồn lực dành cho sinh viên thực sự xuất sắc.",
    image: "/static/sv4.jpg",
    videoId: "testimonial-david",
    category: "đại học",
  },
  {
    id: 5,
    name: "Nguyễn Thị Hồng",
    program: "Khoa học sinh học",
    quote:
      "Các cơ hội nghiên cứu trong chương trình Khoa học sinh học đã cho tôi trải nghiệm thực tế vô cùng quan trọng cho sự nghiệp của tôi. Sự hỗ trợ từ giảng viên thật tuyệt vời.",
    image: "/static/sv5.png",
    videoId: "testimonial-jennifer",
    category: "sau đại học",
  },
  {
    id: 6,
    name: "Trần Minh Tuấn",
    program: "Giáo dục & Giảng dạy",
    quote:
      "Chương trình Giáo dục với trọng tâm vào kinh nghiệm giảng dạy thực tế đã chuẩn bị cho tôi sẵn sàng đối mặt với thực tế trong lớp học. Tôi tốt nghiệp với sự tự tin vào khả năng tạo nên sự khác biệt.",
    image: "/static/svr6.jpg",
    videoId: "testimonial-marcus",
    category: "chuyên nghiệp",
  },
];

export default function Testimonials() {
  const [category, setCategory] = useState<string>("all");
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<TestimonialType | null>(null);

  const filteredTestimonials =
    category === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === category);

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-2">
              Cảm nhận sinh viên
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lắng nghe chia sẻ từ sinh viên
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Câu chuyện thành công và trải nghiệm thực tế của sinh viên Khoa
              Kinh tế.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setCategory("all")}>
                Tất cả
              </TabsTrigger>
              <TabsTrigger
                value="kế toán"
                onClick={() => setCategory("kế toán")}
              >
                Kế toán
              </TabsTrigger>
              <TabsTrigger
                value="quản trị"
                onClick={() => setCategory("quản trị")}
              >
                Quản trị kinh doanh
              </TabsTrigger>
              <TabsTrigger
                value="thương mại điện tử"
                onClick={() => setCategory("thương mại điện tử")}
              >
                Thương mại điện tử
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
                        onClick={() => setSelectedTestimonial(testimonial)}
                      >
                        <Play className="h-5 w-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] md:max-w-[700px]">
                      <DialogHeader>
                        <DialogTitle>Cảm nhận sinh viên</DialogTitle>
                        <DialogDescription>
                          {selectedTestimonial?.name} -{" "}
                          {selectedTestimonial?.program}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <div className="text-center p-8">
                          <Play className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                          <p className="text-muted-foreground">
                            Video cảm nhận sẽ được phát tại đây
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <CardContent className="flex-1 pt-6">
                  <div className="flex items-start mb-4">
                    <Quote className="h-8 w-8 text-primary/40 mr-2 shrink-0 mt-1" />
                    <CardDescription className="text-base">
                      {testimonial.quote}
                    </CardDescription>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.program}
                    </p>
                  </div>
                  <Badge variant="secondary">{testimonial.category}</Badge>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/cam-nhan-sinh-vien">Xem tất cả cảm nhận</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
