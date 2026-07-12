"use client";
import { motion } from "framer-motion";
import Footer from "@/components/common/Footer";

export default function AboutPage() {
  const experiences = [
    {
      role: "Esports Team Manager",
      company: "Wolvrines Alliance",
      period: "Early 2026 — Present",
    },
    {
      role: "Administrator",
      company: "Hernandez Store",
      period: "2026 — Present",
    },
    {
      role: "Freelance Graphic Designer",
      company: "Self-employed",
      period: "2025 — Present",
    },
  ];

  const achievements = [
    "1st Place – Indonesian Student Olympiad (Social Studies)",
    "1st Place – Indonesian Student Olympiad (Natural Sciences)",
    "1st Place – Indonesian Student Olympiad (English)",
    "1st Place – Indonesian Student Olympiad (Indonesian Language)",
    "1st Place – Indonesian Student Olympiad (Mathematics)",
    "2nd Place – Indonesian Student Olympiad (Mathematics)",
    "2nd Place – Sableng Kiyoko Oxalis Ladies Tournament",
  ];

  const organizations = [
    "Esports Player & Management Team Member",
    "Secretary – Science and Technology Division (IPTEK)",
    "Former Basketball Team Captain",
    "Former Pencak Silat Athlete",
    "Former Archery Athlete",
  ];

  return (
    <main className="w-full flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* SECTION 1: HERO ABOUT */}
      <section className="w-full min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-24 pt-20 bg-background">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <div className="col-span-1 md:col-span-2 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tight text-white uppercase leading-none"
            >
              PROFILE<br />
              <span className="text-studioMuted text-normal font-light italic font-serif lowercase">
                SUMMARY.
              </span>{" "}
            
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 pb-4"
          >
            
            <p className="text-base sm:text-lg text-studioMuted leading-relaxed first-letter:uppercase">
              I am a responsible, disciplined, and adaptable individual with
              strong communication and organizational skills. I have a strong
              interest in administration, graphic design, and community
              management, and I enjoy working both independently and
              collaboratively to achieve the best possible results.
              I am committed to continuous learning
              and self-improvement, always seeking opportunities to develop new
              skills and gain valuable experience. I strive to deliver high
              quality work with professionalism, creativity, and dedication in
              every project and responsibility I undertake.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CREDENTIALS (EDUCATION, ACHIEVEMENTS, ORG, LANGUAGES) */}
      <section className="w-full min-h-screen flex flex-col justify-center bg-studioGrey text-background px-6 sm:px-12 md:px-24 py-24">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
          {/* KOLOM KIRI: EDUCATION & LANGUAGES */}
          <div className="col-span-1 flex flex-col gap-12 border-b md:border-b-0 md:border-r border-background/10 pb-12 md:pb-0 md:pr-8">
            {/* Education */}
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-studioMuted block mb-4">
                [ EDUCATION ]
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight">
                YASPEN TUGU IBU 1 Senior High School
              </h3>
              <p className="text-sm text-studioMuted mt-1 font-medium">
                Major: Natural Sciences (Science)
              </p>
              <p className="text-xs font-mono text-studioMuted mt-2">
                2026 — Present
              </p>
            </div>

            {/* Languages */}
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-studioMuted block mb-4">
                [ LANGUAGES ]
              </span>
              <div className="space-y-2">
                <div className="flex justify-between items-center max-w-[250px]">
                  <span className="font-bold text-base">Indonesian</span>
                  <span className="text-xs font-mono text-studioMuted">
                    Native
                  </span>
                </div>
                <div className="flex justify-between items-center max-w-[250px]">
                  <span className="font-bold text-base">English</span>
                  <span className="text-xs font-mono text-studioMuted">
                    Intermediate
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM TENGAH & KANAN: ACHIEVEMENTS & ORGANIZATIONS */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* Achievements */}
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-studioMuted block mb-4">
                [ ACHIEVEMENTS ]
              </span>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } },
                }}
                className="space-y-3"
              >
                {achievements.map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="text-sm md:text-base font-medium leading-tight flex items-start gap-2 text-background/90"
                  >
                    <span className="text-studioMuted mt-1.5">•</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Organization */}
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-studioMuted block mb-4">
                [ ORGANIZATIONS & ACTIVITIES ]
              </span>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } },
                }}
                className="space-y-3"
              >
                {organizations.map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="text-sm md:text-base font-medium leading-tight flex items-start gap-2 text-background/90"
                  >
                    <span className="text-studioMuted mt-1.5">•</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPERIENCES */}
      <section className="w-full min-h-screen flex flex-col justify-center bg-background text-foreground px-6 sm:px-12 md:px-24 py-12">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex justify-between items-baseline border-b border-white/10 pb-8 mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
              Selected Journey
            </h2>
            <span className="text-xs font-mono text-studioMuted">
              PATHWAYS //
            </span>
          </div>

          <div className="flex flex-col w-full">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full grid grid-cols-1 md:grid-cols-4 py-8 sm:py-10 border-b border-white/5 items-center group hover:bg-neutral-900/30 px-2 transition-colors duration-300"
              >
                <span className="text-xs sm:text-sm font-mono text-studioMuted mb-2 md:mb-0">
                  {exp.period}
                </span>
                <span className="col-span-1 md:col-span-2 text-lg sm:text-2xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                  {exp.role}
                </span>
                <span className="text-sm sm:text-base text-studioMuted text-left md:text-right font-medium">
                  {exp.company}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
