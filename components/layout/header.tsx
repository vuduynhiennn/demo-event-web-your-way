"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { GraduationCap, BookOpen, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../ui/logo";

const HeaderLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Ngành học", href: "/chuong-trinh-hoc" },
  { name: "Thư viện ảnh", href: "/thu-vien-anh" },
  { name: "Cảm nhận", href: "/cam-nhan-sinh-vien" },
  { name: "Giới thiệu", href: "/gioi-thieu" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {HeaderLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathname === link.href &&
                        "bg-accent text-accent-foreground"
                    )}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-2 mb-8">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">
                  Khoa Kinh tế - ĐH Mở Hà Nội
                </span>
              </div>
              <nav className="grid gap-2">
                {HeaderLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      pathname === link.href
                        ? "bg-accent text-accent-foreground"
                        : "transparent"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-4">
                  <Button className="w-full" asChild>
                    <Link href="/dang-ky">Đăng ký ngay</Link>
                  </Button>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline">
            <Link href="/hen-tu-van">Đặt lịch tư vấn</Link>
          </Button>
          <Button asChild>
            <Link href="/dang-ky">Đăng ký ngay</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
