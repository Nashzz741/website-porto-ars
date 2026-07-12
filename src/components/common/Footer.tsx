"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-background text-foreground px-6 sm:px-12 md:px-24 border-t border-white/5 py-12"
    >
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-studioMuted uppercase mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight max-w-4xl leading-none text-white">
            Let’s Work Together
          </h2>
        </motion.div>

        {/* Email Link */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-10 mb-20 md:mb-32 relative group inline-block max-w-full"
          whileHover={{ scale: 1.01 }}
        >
          <a
            href="mailto:hst0re9575@gmail.com"
            className="text-xl sm:text-3xl md:text-6xl font-semibold tracking-tight text-white block break-all"
          >
            hst0re9575@gmail.com
          </a>
          <div className="w-full h-[2px] bg-white mt-2 origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-500 ease-out" />
          <div className="w-full h-[2px] bg-studioMuted mt-[-2px] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
        </motion.div>

        {/* Socials */}
        <div className="flex gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-studioMuted mb-20">
          <a
            href="https://www.instagram.com/hernandezstore725?igsh=MWphMnBsbzJsOGc5OQ=="
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/widyani-alvita-sari-handayani-786aa8410?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="whatsapp://send?phone=6287874748414"
            className="hover:text-white transition-colors"
          >
            Whatsapp
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[11px] md:text-xs text-studioMuted gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-white tracking-tighter text-sm">
              STUDIO.M
            </span>
            <span className="mt-1">© 2026. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="/about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
