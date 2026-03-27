"use client";
import { motion } from "framer-motion";
import { Palette, FileText, Trophy, Lightbulb, Star, Users } from "lucide-react";

const items = [
  { icon: Palette,   title: "Creative Projects",    desc: "Design posters, certificates, banners and graphics using professional digital tools.", accent: "#E84E0F" },
  { icon: FileText,  title: "Guided Tasks",          desc: "Structured practical projects where students apply skills to real-world briefs.", accent: "#1A5C4A" },
  { icon: Trophy,    title: "Skills Challenges",     desc: "School-based digital competitions that build confidence and celebrate achievement.", accent: "#F59E0B" },
  { icon: Lightbulb, title: "Problem Solving",       desc: "Develop creativity, attention to detail, and critical digital thinking.", accent: "#3B82F6" },
  { icon: Star,      title: "Showcase & Recognition",desc: "Students present work and earn certificates at formal term-end events.", accent: "#8B5CF6" },
  { icon: Users,     title: "Peer Collaboration",    desc: "Team projects that mirror real-world digital workflows and build communication skills.", accent: "#EC4899" },
];

export default function WhatWeDo() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1A5C4A, transparent)" }} />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-5"
            style={{ background: "#E8F5F0", color: "#1A5C4A", border: "1px solid #D4E8E0" }}>
            What We Do
          </span>
          <h2 className="font-black text-cp-green-dark mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Hands-On Learning{" "}
            <span className="text-orange-gradient">That Sticks</span>
          </h2>
          <p className="text-cp-muted text-lg max-w-2xl mx-auto">
            Every activity is crafted to build real, usable digital skills — not just theory.
            Students leave with a portfolio they're proud of.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="group p-7 rounded-2xl border-2 cursor-default relative overflow-hidden"
              style={{ background: "white", borderColor: "#EAF4F0" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -6, borderColor: item.accent + "44", boxShadow: `0 16px 48px ${item.accent}18` }}
            >
              {/* Hover accent top border */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-all duration-300 scale-x-0 group-hover:scale-x-100"
                style={{ background: item.accent, transformOrigin: "left" }} />

              <div className="w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ background: item.accent + "15", border: `2px solid ${item.accent}30` }}>
                <item.icon size={22} style={{ color: item.accent }} />
              </div>
              <h3 className="font-black text-lg mb-2" style={{ color: "#0A2E22" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5A7A70" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}