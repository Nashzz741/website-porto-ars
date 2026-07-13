"use client";
import { motion } from "framer-motion";

export default function Skills() {
  // Ditambahkan properti 'title' di setiap objek agar TypeScript tidak error saat build
  const skillCategories = [
    {
      title: "DESIGN & ADMIN",
      items: [
        "Graphic Design (Canva)",
        "Administrative Support",
        "Communication",
        "Team Management",
      ],
    },
    {
      title: "OFFICE & MANAGEMENT",
      items: [
        "Social Media Management",
        "Microsoft Office",
        "Teamwork",
        "Time Management",
      ],
    },
    {
      title: "TECHNICAL & OTHERS",
      items: ["Customer Service", "Programming", "Gaming"],
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col justify-center bg-studioGrey text-background px-6 sm:px-12 md:px-24 py-12">
      <div className="w-full max-w-[1440px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-16 md:mb-24">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="border-t border-background/20 pt-6">
              <span className="text-[11px] md:text-xs font-bold tracking-widest text-studioMuted block mb-6">
                {category.title}
              </span>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } },
                }}
                className="space-y-4"
              >
                {category.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                    className="text-sm md:text-base font-medium flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 bg-background rounded-full inline-block" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
