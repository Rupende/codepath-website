"use client";
import { motion } from "framer-motion";
import { Palette, Monitor, Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";

const programs = [
  { icon: Palette, title: "Graphic Design Basics",  desc: "Posters, certificates, banners and creative visual work.", tag: "Beginner",  color: "#E84E0F" },
  { icon: Monitor, title: "Digital Office Skills",   desc: "Word processing, spreadsheets, professional presentations.", tag: "Beginner",  color: "#1A5C4A" },
  { icon: Trophy,  title: "Skills Challenges",       desc: "Competitive school-based digital events and recognition.", tag: "All Levels", color: "#F59E0B" },
];

export default function ProgramsPreview() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
              style={{ background: "#E8F5F0", color: "#1A5C4A", border: "1px solid #D4E8E0" }}>
              Programs
            </span>
            <h2 className="font-black" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A2E22" }}>
              Start Your{" "}
              <span className="text-orange-gradient">Digital Journey</span>
            </h2>
          </motion.div>
          <Link href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold border-2 text-sm transition-all hover:text-white shrink-0"
            style={{ borderColor: "#1A5C4A", color: "#1A5C4A" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#1A5C4A"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1A5C4A"; }}>
            All Programs <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              className="group relative overflow-hidden p-7 rounded-2xl border-2 bg-white"
              style={{ borderColor: "#EAF4F0" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: `0 20px 60px ${p.color}20`, borderColor: p.color + "40" }}
            >
              {/* BG blob */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 translate-x-10 -translate-y-10 group-hover:opacity-10 transition-opacity"
                style={{ background: p.color }} />

              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                style={{ background: "#EAF4F0", border: `2px solid ${p.color}30` }}>
                <p.icon size={24} style={{ color: p.color }} />
              </div>

              <span className="text-xs font-black px-3 py-1 rounded-full"
                style={{ background: p.color + "15", color: p.color, border: `1px solid ${p.color}30` }}>
                {p.tag}
              </span>

              <h3 className="font-black text-xl mt-3 mb-2" style={{ color: "#0A2E22" }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5A7A70" }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}