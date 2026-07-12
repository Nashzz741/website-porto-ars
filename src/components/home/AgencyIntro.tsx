"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Data dua agensi berbeda lengkap dengan text, logo, dan statistik uniknya masing-masing
const AGENCIES_DATA = [
  {
    id: "hernandez",
    name: "HERNANDEZ",
    logo: "/hernandez.jpeg", // Ganti dengan path logo agensi pertama lo
    description:
      "Hernandez Store is a trusted digital service provider offering MLBB Top Up, Rank Boost (Joki), poster and logo design services, premium app subscriptions, and various other digital products. We are committed to delivering fast, secure, affordable, and high-quality services while ensuring the best experience for every customer.",
  },
  {
    id: "ovrs",
    name: "OVRS",
    logo: "/ovrs.jpeg", // Ganti dengan path logo agensi kedua lo
    description:
      "OVRS Esports Team is a competitive gaming team driven by passion, teamwork, and dedication. We strive to improve every day, compete with confidence, and represent our team with professionalism, respect, and a winning mindset in every match.", 
  },
];

export default function AgencyIntro() {
  // Index 0 = Agensi pertama, Index 1 = Agensi kedua
  const [activeIdx, setActiveIdx] = useState(0);
  const currentAgency = AGENCIES_DATA[activeIdx];

  // Fungsi toggle bolak-balik bulatannya pas diklik
  const handleToggle = () => {
    setActiveIdx((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-center bg-studioGrey text-background px-6 sm:px-12 md:px-24 py-20 transition-colors duration-500 relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* TOP LAYOUT CONTROL: JUDUL & BUTTON GESER BULAT */}
        <div className="flex flex-row justify-between items-center border-b border-background/10 pb-8 mb-12">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase text-studioMuted">
              AGENCY
            </span>
            <h2 className="text-lg md:text-xl font-bold tracking-tight uppercase">
              {currentAgency.name}
            </h2>
          </div>

          {/* TOGGLE BUTTON BERGESER BULAT */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] md:text-xs font-mono font-bold text-studioMuted uppercase hidden sm:inline">
              Switch Agency
            </span>
            <button
              onClick={handleToggle}
              className="w-14 h-8 bg-background rounded-full p-1 cursor-pointer relative flex items-center transition-all duration-300 shadow-inner"
              aria-label="Toggle agency view"
            >
              {/* Bulatan yang bergeser secara otomatis menggunakan layoutId Framer Motion */}
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 bg-studioGrey rounded-full shadow-md"
                style={{
                  marginLeft: activeIdx === 1 ? "auto" : "0px",
                }}
              />
            </button>
          </div>
        </div>

        {/* MAIN INTRO TEXT GRID & SPACE LOGO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start border-b border-background/10 pb-16">
          {/* TEMPAT LOGO AGENSI (Responsif & Clean) */}
          <div className="w-full flex md:justify-start items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentAgency.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-background/5 border border-background/10 p-4 relative flex items-center justify-center grayscale"
              >
                {/* Image bawaan Next.js, pastikan file logo.png lo transparan biar rapi */}
                <Image
                  src={currentAgency.logo}
                  alt={`${currentAgency.name} Logo`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-w-768px) 112px, 128px"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DESKRIPSI TEXT AGENSI */}
          <div className="col-span-1 md:col-span-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentAgency.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed tracking-tight"
              >
                {currentAgency.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
