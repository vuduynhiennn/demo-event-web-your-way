"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "@/lib/motion";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-background/30 z-10" />
      <div
        className="w-full h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      />
      <div className="absolute inset-0 z-20 container flex flex-col justify-center">
        <div className="max-w-2xl space-y-5">
          {loaded && (
            <>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Khoa Kinh Tế Trường Đại Học Mở Hà Nội: Mở Cơ Hội, Mở Tương Lai
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-white/90 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Khoa Kinh tế Trường Đại học Mở Hà Nội, được thành lập theo Quyết
                định số 2653/QĐ-TCCB ngày 01/12/1993 của Bộ trưởng Bộ Giáo dục
                và Đào tạo, là một đơn vị đào tạo có bề dày truyền thống với các
                chương trình đào tạo đa dạng và chất lượng. Với triết lý đào tạo
                gắn với 5 chữ Mở, Khoa Kinh tế đã và đang không ngừng nâng cao
                chất lượng đào tạo, đáp ứng nhu cầu sử dụng lao động tại các cơ
                quan và tổ chức doanh nghiệp.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button size="lg" asChild>
                  <Link href="/register">Đăng ký ngay</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  asChild
                >
                  <Link href="/programs">Tìm hiểu các ngành học</Link>
                </Button>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
