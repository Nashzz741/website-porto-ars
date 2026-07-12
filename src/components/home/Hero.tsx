"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  // Fungsi Smooth Scroll Manual JavaScript
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
const textVariant = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { 
      duration: 1, 
      ease: "easeOut" // <--- Pakai string bawaan ini juga mulus dan super aman
    },
  },
};
  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    // md:h-screen mengunci halaman pas satu layar di desktop, md:overflow-hidden mencegah scrollbar muncul
    <section className="w-full min-h-screen md:min-h-0 md:h-screen flex flex-col justify-center px-6 sm:px-12 md:px-24 bg-background pt-36 pb-16 md:py-0 md:overflow-hidden relative">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center h-full">
        {/* KOLOM KIRI: TEKS */}
        {/* md:pt-12 ditambahkan di bawah untuk menurunkan seluruh blok teks di desktop agar tidak nabrak navbar */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-start justify-center order-1 md:order-none md:pt-12"
        >
          {/* Row 1 — GRAPHIC DESIGNER */}
          {/* Ukuran font desktop disesuaikan ke md:text-4xl / lg:text-5xl agar proporsinya pas & elegan */}
          <div className="overflow-hidden h-auto py-2 w-full relative">
            <motion.h1
              variants={textVariant}
              className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-none uppercase"
            >
              Graphic Designer
            </motion.h1>
          </div>

          {/* Row 2 — & ADMINISTRATIVE PROFESSIONAL */}
          <div className="overflow-hidden h-auto py-2 w-full mt-1 md:mt-2 relative">
            <motion.h1
              variants={textVariant}
              className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-bold tracking-tight text-studioMuted leading-tight md:leading-none uppercase"
            >
              & Administrative Professional
            </motion.h1>
          </div>

          {/* Deskripsi */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="mt-6 text-sm sm:text-base md:text-sm lg:text-base text-studioMuted max-w-xl leading-relaxed"
          >
            Crafting precise digital experiences through editorial rigor and
            architectural precision. Focused on quiet luxury and high-end
            minimalism.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 md:mt-10 w-full sm:w-auto"
          >
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, "work")}
              className="block sm:inline-block border border-white px-8 py-4 text-[11px] md:text-xs font-bold tracking-widest text-white uppercase hover:bg-white hover:text-background transition-colors duration-300 text-center cursor-pointer"
            >
              VIEW MY PRODUK
            </a>
          </motion.div>
        </motion.div>

        {/* KOLOM KANAN: FOTO */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="w-full flex justify-center md:justify-end items-center order-2 md:order-none mt-4 md:mt-0"
        >
          {/* Maksimum tinggi gambar di desktop disesuaikan (max-h-[65vh]) agar selaras dengan penurunan teks */}
          <div className="w-full max-w-[290px] sm:max-w-[350px] md:max-w-[320px] lg:max-w-[380px] aspect-[3/4] max-h-[65vh] overflow-hidden relative group">
            <Image
              src="/foto_cwe_ars.png"
              alt="Widyani Alvita Sari H."
              fill
              sizes="(max-w-768px) 100vw, 50vw"
              priority
              className="object-cover mix-blend-lighten transition-all duration-700 ease-out filter grayscale group-hover:grayscale-0 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
