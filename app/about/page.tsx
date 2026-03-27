"use client";
import { motion } from "framer-motion";
import { Target, Heart, Zap, Star, Users, Award, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon:  Heart,
    label: "Creativity",
    desc:  "We encourage students to express ideas visually and digitally through every project.",
    color: { bg: "#FFF0F5", border: "#FFD6E7", icon: "#E91E8C" },
  },
  {
    icon:  Zap,
    label: "Practical Learning",
    desc:  "Every skill taught is one students can use immediately — in school and beyond.",
    color: { bg: "#FFFBEA", border: "#FFE57F", icon: "#D4A000" },
  },
  {
    icon:  Star,
    label: "Confidence",
    desc:  "We empower students to complete real projects and proudly showcase their work.",
    color: { bg: "#FFF4EE", border: "#FFD5BE", icon: "#DC4A0A" },
  },
  {
    icon:  Target,
    label: "Excellence",
    desc:  "Competitions and recognition motivate students to give their very best.",
    color: { bg: "#F0FAF5", border: "#D4E8E0", icon: "#0D4A35" },
  },
];

const team = [
  {
    name:  "Facilitator Team",
    role:  "Digital Skills Coaches",
    desc:  "Trained educators who deliver hands-on sessions in schools across Harare.",
    initials: "FT",
  },
  {
    name:  "Program Team",
    role:  "Curriculum & Design",
    desc:  "Develops practical, school-aligned digital skills programs every term.",
    initials: "PT",
  },
  {
    name:  "Support Team",
    role:  "School Partnerships",
    desc:  "Works directly with school leadership to tailor and implement each program.",
    initials: "ST",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Students Trained"  },
  { icon: Award, value: "12+",  label: "Schools Partnered" },
  { icon: Star,  value: "98%",  label: "Satisfaction Rate" },
  { icon: BookOpen, value: "6+", label: "Terms Delivered"  },
];

export default function AboutPage() {
  return (
    <div>

      {/* ══ HERO ══ */}
      <section
        className="relative overflow-hidden section-padding"
        style={{ background: "linear-gradient(135deg, #0F3D30 0%, #1A5C4A 50%, #2D7A63 100%)" }}
      >
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(255,255,255,0.05)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(220,74,10,0.10)" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.20)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.90)" }}>
              Who We Are
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building Zimbabwe's
            <span
              className="block"
              style={{
                background:           "linear-gradient(135deg, #DC4A0A, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:  "transparent",
                backgroundClip:      "text",
              }}
            >
              Digital Generation
            </span>
          </motion.h1>

          <motion.p
            className="text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.75)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            CodePath Digital Skills Consulting helps students across Zimbabwe
            develop real digital skills through structured, hands-on school programs.
          </motion.p>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section style={{ background: "#0F3D30" }}>
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="text-center py-6 px-4 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(249,115,22,0.20)", border: "1px solid rgba(249,115,22,0.30)" }}
                >
                  <s.icon size={18} style={{ color: "#F97316" }} />
                </div>
                <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MISSION & VISION ══ */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Mission */}
          <motion.div
            className="p-8 rounded-3xl"
            style={{ background: "#F7FAF9", border: "2px solid #E8F5F0" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "#F0FAF5", border: "1px solid #D4E8E0" }}
            >
              <Target size={22} style={{ color: "#0D4A35" }} />
            </div>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
              style={{ background: "#F0FAF5", color: "#0D4A35", border: "1px solid #D4E8E0" }}
            >
              Our Mission
            </span>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0F3D30" }}>
              Practical Skills for Real Impact
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#5A7A70" }}>
              To equip students with practical digital skills through hands-on learning,
              preparing them for academic success and the digital future.
            </p>
          </motion.div>

          {/* Vision / Quote */}
          <motion.div
            className="p-8 rounded-3xl relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0F3D30, #1A5C4A)" }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-5"
              style={{ background: "rgba(249,115,22,0.20)", color: "#F97316", border: "1px solid rgba(249,115,22,0.35)" }}
            >
              Our Vision
            </span>
            <p className="text-2xl font-black text-white leading-relaxed mb-4">
              "Students don't just learn digital skills —
            </p>
            <p className="text-2xl font-black leading-relaxed">
              <span style={{ color: "#F97316" }}>they create</span>
              <span className="text-white">, </span>
              <span style={{ color: "#F97316" }}>inspire</span>
              <span className="text-white">, </span>
              <span style={{ color: "#F97316" }}>design</span>
              <span className="text-white">, and shine!"</span>
            </p>
          </motion.div>

        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="section-padding" style={{ background: "#F7FAF9" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "#FFF4EE", color: "#DC4A0A", border: "1px solid #FFD5BE" }}
            >
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "#0F3D30" }}>
              What Drives{" "}
              <span
                style={{
                  background:           "linear-gradient(135deg, #DC4A0A, #F97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor:  "transparent",
                  backgroundClip:      "text",
                }}
              >
                Everything We Do
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                className="p-7 rounded-2xl text-center transition-all duration-300 group"
                style={{ background: "#FFFFFF", border: `2px solid ${v.color.border}` }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform group-hover:scale-110"
                  style={{ background: v.color.bg, border: `1px solid ${v.color.border}` }}
                >
                  <v.icon size={24} style={{ color: v.color.icon }} />
                </div>
                <h3 className="font-black text-lg mb-2" style={{ color: "#0F3D30" }}>
                  {v.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A70" }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT WE DO ══ */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "#F0FAF5", color: "#0D4A35", border: "1px solid #D4E8E0" }}
            >
              What We Do
            </span>
            <h2 className="text-4xl font-black mb-6" style={{ color: "#0F3D30" }}>
              Hands-On Learning{" "}
              <span
                style={{
                  background:           "linear-gradient(135deg, #DC4A0A, #F97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor:  "transparent",
                  backgroundClip:      "text",
                }}
              >
                That Sticks
              </span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#5A7A70" }}>
              CodePath delivers structured, practical programs in schools across Zimbabwe.
              Students work on real projects, compete in digital challenges, and walk away
              with skills, certificates, and confidence.
            </p>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-white transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #DC4A0A, #F97316)",
                boxShadow:  "0 4px 16px rgba(220,74,10,0.40)",
                color:      "#FFFFFF",
              }}
            >
              View Our Programs <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="space-y-4">
            {[
              "Design creative projects — posters, certificates, and graphics",
              "Apply skills through guided practical tasks and structured briefs",
              "Participate in school-based digital skills challenges",
              "Develop creativity, attention to detail, and problem-solving",
              "Showcase completed work and receive recognition and certificates",
              "Build a portfolio of real digital projects",
            ].map((item, i) => (
              <motion.div
                key={item}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: "#F7FAF9", border: "1px solid #E8F5F0" }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ x: 4 }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "#F0FAF5", border: "1px solid #D4E8E0" }}
                >
                  <span className="font-black text-xs" style={{ color: "#0D4A35" }}>✓</span>
                </div>
                <span className="text-sm font-medium" style={{ color: "#1A2E28" }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM ══ */}
      <section className="section-padding" style={{ background: "#F7FAF9" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "#F0FAF5", color: "#0D4A35", border: "1px solid #D4E8E0" }}
            >
              Our Team
            </span>
            <h2 className="text-4xl font-black" style={{ color: "#0F3D30" }}>
              The People{" "}
              <span
                style={{
                  background:           "linear-gradient(135deg, #DC4A0A, #F97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor:  "transparent",
                  backgroundClip:      "text",
                }}
              >
                Behind CodePath
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                className="p-8 rounded-2xl text-center"
                style={{ background: "#FFFFFF", border: "2px solid #E8F5F0" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.10 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 font-black text-lg text-white"
                  style={{ background: "linear-gradient(135deg, #0F3D30, #1A5C4A)" }}
                >
                  {t.initials}
                </div>
                <h3 className="font-black text-lg mb-1" style={{ color: "#0F3D30" }}>
                  {t.name}
                </h3>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "#DC4A0A" }}
                >
                  {t.role}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A70" }}>
                  {t.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <section
        className="section-padding text-center"
        style={{ background: "linear-gradient(135deg, #0F3D30, #1A5C4A)" }}
      >
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Be Part of the Story
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.75)" }}>
            Whether you're a student, parent, or school — there's a place for you at CodePath.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-black text-base transition-all hover:bg-gray-50 active:scale-95"
              style={{ background: "#FFFFFF", color: "#DC4A0A", boxShadow: "0 4px 20px rgba(0,0,0,0.20)" }}
            >
              Join a Program <ArrowRight size={18} />
            </Link>
            <Link
              href="/schools"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-black text-base text-white transition-all hover:bg-white/10 active:scale-95"
              style={{ border: "2.5px solid rgba(255,255,255,0.70)", color: "#FFFFFF" }}
            >
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}