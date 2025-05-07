import Logo from "@/components/ui/logo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Phone, Mail, Globe, Facebook } from "lucide-react";

const majors = [
  {
    title: "Thiết kế đồ họa",
    code: "7210403",
    desc: "Trang bị kiến thức, kỹ năng về nghệ thuật và phương pháp thiết kế, ứng dụng công nghệ. Sản phẩm phục vụ truyền thông, quảng cáo, thương mại, giáo dục, giải trí.",
    img: "/static/tkdh.png",
  },
  {
    title: "Thiết kế thời trang",
    code: "7210404",
    desc: "Ngành học 'nóng', nhu cầu nhân lực cao, cơ hội việc làm phong phú, phát triển lâu dài.",
    img: "/static/tktt.jpg",
  },
  {
    title: "Thiết kế nội thất",
    code: "7580108",
    desc: "Đào tạo về mỹ thuật ứng dụng, thiết kế không gian nội thất chuyên nghiệp.",
    img: "/static/tknt.png",
  },
  {
    title: "Công nghệ thông tin",
    code: "7480201",
    desc: "Nền tảng vững chắc về CNTT: phần mềm, mạng, an toàn hệ thống, AI, đa phương tiện.",
    img: "/static/cntt.png",
  },
  {
    title: "Công nghệ kỹ thuật điện tử - viễn thông",
    code: "7510302",
    desc: "Kiến thức về hệ thống điện tử, viễn thông, thiết kế, vận hành, bảo trì hiện đại.",
    img: "/static/major-5.jpg",
  },
  {
    title: "Quản trị kinh doanh",
    code: "7340101",
    desc: "Kiến thức kinh tế, quản trị, tài chính, đo lường, phân tích kinh tế, quản trị doanh nghiệp.",
    img: "/static/major-6.jpg",
  },
  {
    title: "Kế toán",
    code: "7340301",
    desc: "Kiến thức chuyên sâu về kế toán, kiểm toán, tài chính doanh nghiệp.",
    img: "/static/major-7.jpg",
  },
  {
    title: "Luật",
    code: "7380101",
    desc: "Đào tạo chuyên gia pháp lý, kiến thức pháp luật Việt Nam và quốc tế.",
    img: "/static/major-8.jpg",
  },
  {
    title: "Ngôn ngữ Anh",
    code: "7220201",
    desc: "Đào tạo sử dụng thành thạo tiếng Anh trong giao tiếp và công việc.",
    img: "/static/major-9.jpg",
  },
  {
    title: "Ngôn ngữ Trung Quốc",
    code: "7220204",
    desc: "Đào tạo sử dụng thành thạo tiếng Trung trong giao tiếp và công việc.",
    img: "/static/major-10.jpg",
  },
];

const stats = [
  { label: "Tỉ lệ có việc làm sau tốt nghiệp", value: ">90%" },
  { label: "Số lượng sinh viên", value: "~35.000" },
  { label: "Năm thành lập", value: "1993" },
  { label: "Ngành đào tạo đại học", value: "21" },
  { label: "Ngành đào tạo sau đại học", value: "7" },
];

export default function GioiThieu() {
  return (
    <main className="flex flex-col gap-16 pb-16">
      {/* Tổng quan & Logo */}
      <section className="bg-background py-12">
        <div className="container flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <Badge variant="outline" className="mb-2 w-fit">
              Tổng quan về trường
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Trường Đại học Mở Hà Nội (HOU)
            </h1>
            <p className="text-muted-foreground text-lg">
              &quot;Mở cơ hội học tập cho mọi người&quot;. Thành lập 3/11/1993,
              HOU là trường đại học công lập hàng đầu với quy mô 35.000 sinh
              viên, đa ngành, đa lĩnh vực, tiên phong đáp ứng nhu cầu xã hội
              hiện đại.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>
        </div>
      </section>

      {/* Thống kê nhanh */}
      <section className="container grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((s, i) => (
          <Card key={i} className="flex flex-col items-center py-6 bg-muted/40">
            <CardTitle className="text-2xl font-bold text-primary mb-2">
              {s.value}
            </CardTitle>
            <CardContent className="text-center text-sm text-muted-foreground">
              {s.label}
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Các ngành đào tạo - Carousel */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-8">
            <Badge variant="outline" className="mb-2">
              Các ngành đào tạo
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Khám phá ngành học nổi bật
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Đào tạo 21 ngành đại học, 7 ngành sau đại học, đáp ứng nhu cầu đa
              dạng của xã hội.
            </p>
          </div>
          <div className="relative">
            <Carousel opts={{ align: "start" }}>
              <CarouselContent>
                {majors.map((major, idx) => (
                  <CarouselItem
                    key={idx}
                    className="md:basis-1/3 lg:basis-1/4 px-2"
                  >
                    <Card className="h-full flex flex-col">
                      <div className="relative w-full aspect-[0.664451827]">
                        <Image
                          src={major.img}
                          alt={major.title}
                          fill
                          className="object-contain rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{major.title}</CardTitle>
                        <Badge variant="secondary" className="w-fit">
                          Mã ngành: {major.code}
                        </Badge>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground flex-1">
                        {major.desc}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Cam kết chất lượng */}
      <section className="container py-12">
        <div className="flex flex-col items-center text-center mb-8">
          <Badge variant="outline" className="mb-2">
            Cam kết chất lượng
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Tỷ lệ việc làm & khảo sát chất lượng
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tỷ lệ sinh viên có việc làm sau tốt nghiệp trên 90%. Khảo sát thường
            xuyên từ 2015 giúp điều chỉnh chương trình phù hợp, nâng cao chất
            lượng đào tạo và đáp ứng nhu cầu thực tế.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card/80">
            <CardHeader>
              <CardTitle className="text-lg">
                Tỷ lệ việc làm ngành Thiết kế đồ họa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                98% sinh viên có việc làm đúng chuyên môn ngay năm đầu tiên sau
                tốt nghiệp.
              </p>
              <Badge variant="secondary">Khảo sát 2023</Badge>
            </CardContent>
          </Card>
          <Card className="bg-card/80">
            <CardHeader>
              <CardTitle className="text-lg">
                Khảo sát chất lượng đào tạo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                Khảo sát online giúp trường nắm bắt thực tế, điều chỉnh chương
                trình, nâng cao chất lượng sinh viên.
              </p>
              <Badge variant="secondary">Liên tục từ 2015</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Đội ngũ giảng viên */}
      <section className="bg-muted/30 py-12">
        <div className="container flex flex-col items-center text-center mb-8">
          <Badge variant="outline" className="mb-2">
            Đội ngũ giảng viên
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Chuyên gia hàng đầu, tận tâm đồng hành
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            29 Giáo sư, 123 Phó Giáo sư, 322 Tiến sĩ, 487 Thạc sĩ. Đội ngũ đa
            dạng chuyên ngành, giàu kinh nghiệm, luôn hỗ trợ sinh viên từ nghiên
            cứu đến thực tiễn nghề nghiệp.
          </p>
        </div>
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="flex flex-col items-center py-6 bg-card/80">
            <CardTitle className="text-2xl font-bold text-primary mb-2">
              29
            </CardTitle>
            <CardContent className="text-center text-sm text-muted-foreground">
              Giáo sư
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center py-6 bg-card/80">
            <CardTitle className="text-2xl font-bold text-primary mb-2">
              123
            </CardTitle>
            <CardContent className="text-center text-sm text-muted-foreground">
              Phó Giáo sư
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center py-6 bg-card/80">
            <CardTitle className="text-2xl font-bold text-primary mb-2">
              322
            </CardTitle>
            <CardContent className="text-center text-sm text-muted-foreground">
              Tiến sĩ
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center py-6 bg-card/80">
            <CardTitle className="text-2xl font-bold text-primary mb-2">
              487
            </CardTitle>
            <CardContent className="text-center text-sm text-muted-foreground">
              Thạc sĩ
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bộ nhận diện thương hiệu */}
      <section className="container py-12">
        <div className="flex flex-col items-center text-center mb-8">
          <Badge variant="outline" className="mb-2">
            Bộ nhận diện thương hiệu
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Ý nghĩa logo Đại học Mở Hà Nội
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Logo lấy cảm hứng từ Khuê Văn Các – biểu tượng giáo dục truyền
            thống, kết nối giá trị truyền thống và tinh thần đổi mới. Hình vuông
            tượng trưng mặt đất, hình tròn biểu thị bầu trời, thể hiện sự hội tụ
            tinh hoa đất trời, uy tín và bề dày lịch sử giáo dục.
          </p>
        </div>
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="flex justify-center mt-4">
          <Badge variant="secondary">
            Ban hành theo Quyết định số 3366/QĐ-ĐHM ngày 16/09/2022
          </Badge>
        </div>
      </section>

      {/* Thông tin liên hệ */}
      <section className="bg-muted/30 py-12">
        <div className="container flex flex-col items-center text-center mb-8">
          <Badge variant="outline" className="mb-2">
            Thông tin liên hệ
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Liên hệ với chúng tôi
          </h2>
        </div>
        <div className="container grid md:grid-cols-3 gap-8">
          <Card className="bg-card/80">
            <CardHeader>
              <CardTitle className="text-lg">Địa chỉ</CardTitle>
            </CardHeader>
            <CardContent>
              Nhà B101, phố Nguyễn Hiền, phường Bách Khoa, quận Hai Bà Trưng, TP
              Hà Nội
              <div className="mt-4 w-full h-64 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.7869091872076!2d105.84507517600017!3d21.00117728064127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac73fa8a81c7%3A0xf02b3061ed412ded!2zUC4gTmd1eeG7hW4gSGnhu4FuLCBCw6FjaCBLaG9hLCBIYWkgQsOgIFRyxrBuZywgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1746655968895!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/80">
            <CardHeader>
              <CardTitle className="text-lg">Điện thoại & Email</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>024.38682321</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Mail className="w-5 h-5 text-primary" />
                <span>mhn@hou.edu.vn</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/80">
            <CardHeader>
              <CardTitle className="text-lg">Kênh trực tuyến</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <a
                  href="https://www.hou.edu.vn"
                  className="text-primary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.hou.edu.vn
                </a>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Facebook className="w-5 h-5 text-primary" />
                <a
                  href="https://www.facebook.com/viendaihocmohanoi.vn/"
                  className="text-primary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook.com/viendaihocmohanoi.vn
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
