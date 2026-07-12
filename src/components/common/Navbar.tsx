"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Fungsi Logika Smooth Scroll Bawaan Lo (Ditambah penutup menu otomatis di HP)
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setIsOpen(false); // Otomatis tutup menu drop-down pas di-klik di HP

    if (pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${targetId}`);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-6 bg-background/50 backdrop-blur-md border-b border-white/5"
    >
      {/* WRAPPER LOGO & NAMA BRAND */}
      <Link href="/" className="flex items-center gap-3 group z-50">
        <Image
          src="/logo-ars.png"
          alt="Studio.M Logo"
          width={32}
          height={32}
          className="w-7 h-7 md:w-8 md:h-8 object-contain group-hover:rotate-12 transition-transform duration-300"
        />
        <span className="text-base sm:text-xl font-bold tracking-tighter text-white whitespace-nowrap">
          WIDYANI ALVITA SARI
        </span>
      </Link>

      {/* MENU NAVIGATION LINKS (Desktop Version — hidden on mobile) */}
      <div className="hidden md:flex gap-6 md:gap-8 text-xs md:text-sm font-medium text-white">
        <Link href="/" className="hover:text-studioMuted transition-colors">
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-studioMuted transition-colors"
        >
          About
        </Link>
        <a
          href="#work"
          onClick={(e) => handleScroll(e, "work")}
          className="hover:text-studioMuted transition-colors cursor-pointer"
        >
          Work
        </a>
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className="hover:text-studioMuted transition-colors cursor-pointer"
        >
          Contact
        </a>
      </div>

      {/* BURGER BUTTON (Mobile Version — only visible on mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex md:hidden flex-col justify-center items-center w-6 h-6 gap-1.5 z-50 relative focus:outline-none cursor-pointer"
      >
        <span
          className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* OVERLAY NAVIGATION MENU MOBILE (Slide Down dari Atas Navbar) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-background/95 border-b border-white/10 backdrop-blur-lg flex flex-col p-8 gap-6 md:hidden shadow-xl"
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold tracking-widest uppercase text-white hover:text-studioMuted transition-colors border-b border-white/5 pb-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold tracking-widest uppercase text-white hover:text-studioMuted transition-colors border-b border-white/5 pb-2"
            >
              About
            </Link>
            <a
              href="#work"
              onClick={(e) => handleScroll(e, "work")}
              className="text-base font-semibold tracking-widest uppercase text-white hover:text-studioMuted transition-colors border-b border-white/5 pb-2 cursor-pointer"
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="text-base font-semibold tracking-widest uppercase text-white hover:text-studioMuted transition-colors pb-2 cursor-pointer"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
