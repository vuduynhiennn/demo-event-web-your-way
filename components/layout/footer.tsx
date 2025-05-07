import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Logo from "../ui/logo";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-muted-foreground">
            Khoa Kinh tế - Trường Đại học Mở Hà Nội: Mở Cơ Hội, Mở Tương Lai.
            Đào tạo chất lượng, đồng hành cùng sự phát triển của bạn.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Ngành đào tạo</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/chuong-trinh-hoc/ke-toan"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Kế toán
              </Link>
            </li>
            <li>
              <Link
                href="/chuong-trinh-hoc/quan-tri-kinh-doanh"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Quản trị kinh doanh
              </Link>
            </li>
            <li>
              <Link
                href="/chuong-trinh-hoc/thuong-mai-dien-tu"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Thương mại điện tử
              </Link>
            </li>
            <li>
              <Link
                href="/chuong-trinh-hoc/online"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Online Learning
              </Link>
            </li>
            <li>
              <Link
                href="/chuong-trinh-hoc/international"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                International Programs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Liên kết nhanh</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/gioi-thieu"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link
                href="/thu-vien-anh"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Thư viện ảnh
              </Link>
            </li>
            <li>
              <Link
                href="/cam-nhan-sinh-vien"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Cảm nhận sinh viên
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Tin tức & Sự kiện
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Tuyển dụng
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Thông tin liên hệ</h3>
          <address className="not-italic space-y-2">
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <span className="text-muted-foreground">
                Quận Hai Bà Trưng, TP Hà Nội
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">024.38682321</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">mhn@hou.edu.vn</span>
            </div>
          </address>
        </div>
      </div>

      <div className="container mt-8">
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Khoa Kinh tế - Trường Đại học Mở Hà
            Nội. Đã đăng ký bản quyền.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Chính sách bảo mật
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Điều khoản sử dụng
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-foreground transition-colors"
            >
              Trợ năng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
