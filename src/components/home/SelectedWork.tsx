"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ALL_PROJECTS = [
  {
    id: "design logo",
    title: "Poster & Logo Design Service",
    category: "Editorial Design",
    year: "2026 - present",
    image: "/foto1.jpeg",
    description:
      "Need a clean and eye-catching design? We offer custom poster and logo design services for businesses, esports teams, communities, events, and personal branding. Choose from Simple, Custom, or Full Request packages with high-quality results, fast turnaround, and designs tailored to your style and vision.",
  },
  {
    id: "top up",
    title: "top up server malaysia",
    category: "Top up game",
    year: "2026 - present",
    image: "/foto2.jpeg",
    description:
      "Get your Mobile Legends Diamonds instantly at affordable prices. Enjoy a fast, secure, and reliable top-up service with smooth transactions and guaranteed customer satisfaction. Purchase MLBB Weekly Diamond Pass (Malaysia Server) quickly and securely at competitive prices. Fast processing, trusted service, and perfect for players who want daily diamond rewards with no hassle.",
  },
  {
    id: "joki",
    title: "Joki",
    category: "MLBB Game",
    year: "2026 - present",
    image: "/foto3.jpeg",
    description:
      "Boost your Mobile Legends rank with our trusted Rank Boost Service. Handled by experienced players, we provide a safe, fast, and reliable service to help you reach your desired rank with confidence.",
  },
  {
    id: "APK",
    title: "APK Premium Service",
    category: "APK Premium",
    year: "2026 - present",
    image: "/foto4.jpeg",
    description:
      "Get access to your favorite premium apps at affordable prices with trusted service and fast delivery. We provide a wide selection of premium subscriptions, including Netflix, ChatGPT, CapCut, Spotify, Alight Motion, and many more. Enjoy secure transactions, responsive support, and reliable activation for your daily entertainment, productivity, and creative needs.",
  },
];

export default function SelectedWork() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeProject, setActiveProject] = useState<
    (typeof ALL_PROJECTS)[0] | null
  >(null);

  const displayedProjects = isExpanded
    ? ALL_PROJECTS
    : ALL_PROJECTS.slice(0, 2);

  return (
    <section
      id="work"
      className="w-full min-h-screen flex flex-col justify-center bg-background text-foreground px-6 sm:px-12 md:px-24 py-24 border-t border-white/5 relative"
    >
      <div className="w-full max-w-[1440px] mx-auto">
        {/* HEADER SECTION */}
        <div className="flex justify-between items-baseline border-b border-white/10 pb-8 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
            Selected Produk
          </h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[10px] md:text-xs font-bold tracking-widest uppercase border-b border-white pb-1 hover:text-studioMuted hover:border-studioMuted transition-colors text-white cursor-pointer"
          >
            {isExpanded ? "Show Less" : "View All Projects"}
          </button>
        </div>

        {/* LIST PROJECT UTAMA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="group cursor-pointer flex flex-col"
              onClick={() => setActiveProject(project)}
            >
              <div className="w-full aspect-[4/3] bg-neutral-900 overflow-hidden relative mb-4 border border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out"
                  sizes="(max-w-768px) 100vw, 50vw"
                />
              </div>

              <div className="flex justify-between items-start mt-2">
                <div>
                  <h3 className="text-base md:text-lg font-bold tracking-tight text-white group-hover:text-studioMuted transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-studioMuted mt-1">
                    {project.category}
                  </p>
                </div>
                <span className="text-xs font-medium text-studioMuted font-mono">
                  {project.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MODAL OVERLAY POP-UP (FIXED FOR MOBILE VIEW) */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Latar Belakang Gelap (Klik di luar modal buat close) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Kotak Utama Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="bg-[#0A0A0C] border border-white/10 w-full max-w-5xl h-auto max-h-[85vh] md:h-[550px] overflow-y-auto md:overflow-hidden rounded-none relative grid grid-cols-1 md:grid-cols-2 z-10 shadow-2xl"
            >
              {/* Tombol Close (X) - Diubah ke fixed di HP agar tidak ikut ter-scroll ke bawah */}
              <button
                onClick={() => setActiveProject(null)}
                className="fixed md:absolute top-6 right-6 text-white/80 bg-black/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none px-3 py-1.5 md:p-0 border border-white/10 md:border-none hover:text-white text-xs font-mono tracking-widest uppercase transition-colors z-30 cursor-pointer"
              >
                [ CLOSE ✕ ]
              </button>

              {/* SISI KIRI (ATAS DI HP): FOTO DI DALAM MODAL */}
              <div className="w-full h-[260px] sm:h-[320px] md:h-full bg-neutral-900 relative border-b md:border-b-0 md:border-r border-white/10 overflow-hidden flex-shrink-0">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* SISI KANAN (BAWAH DI HP): DESKRIPSI */}
              <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center h-auto md:h-full bg-[#0A0A0C]">
                <span className="text-[10px] md:text-xs font-mono text-studioMuted uppercase tracking-widest">
                  {activeProject.category} // {activeProject.year}
                </span>

                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight text-white uppercase mt-3 mb-4 md:mb-6 leading-tight">
                  {activeProject.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-studioMuted leading-relaxed pb-4 md:pb-0">
                  {activeProject.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* --- END MODAL POP-UP --- */}
    </section>
  );
}