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
    <div className="relative w-full ">
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(2,125,197,0.75) 0%, rgba(2,125,197,0.45) 10%, rgba(2,125,197,0.15) 50%)",
        }}
      />
      <div
        className="w-full h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/static/banner.jpeg')",
        }}
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center">
        <div className="max-w-3xl w-full mx-auto px-4 md:px-8 space-y-8 md:space-y-12 py-12 md:py-0">
          {loaded && (
            <>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-5xl lg:leading-[1.3] font-extrabold text-white drop-shadow-xl leading-10 tracking-wider mb-6 md:mb-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Trường đại học Mở Hà Nội, Mở Cơ Hội, Mở Tương Lai
              </motion.h1>
              <motion.p
                className="text-base md:text-xl text-white drop-shadow font-medium mb-8 md:mb-10 max-w-2xl mx-auto tracking-wide leading-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Nơi chắp cánh tri thức, vững bước tương lai.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  asChild
                  className="text-lg uppercase font-semibold"
                >
                  <Link href="/register">Đăng ký ngay</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/70 backdrop-blur-sm text-black text-lg uppercase hover:bg-white"
                  asChild
                >
                  <Link href="/chuong-trinh-hoc">Tìm hiểu các ngành học</Link>
                </Button>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
