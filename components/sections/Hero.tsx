"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Users, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Students Trained"  },
  { icon: Award, value: "12+",  label: "Schools Partnered" },
  { icon: Star,  value: "98%",  label: "Satisfaction Rate" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[92vh] flex items-center"
      style={{ background: "linear-gradient(135deg, #0F3D30 0%, #1A5C4A 50%, #2D7A63 100%)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(255,255,255,0.05)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(220,74,10,0.10)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "rgba(255,255,255,0.03)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* ══ LEFT CONTENT ══ */}
        <div>
          {/* Enrolment badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(255,255,255,0.10)",
              border:     "1px solid rgba(255,255,255,0.20)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#F97316", animation: "pulse 2s infinite" }}
            />
            <span className="text-white text-sm font-semibold">
              Now enrolling — Term 2, 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Empowering
            <span
              className="block"
              style={{
                background:              "linear-gradient(135deg, #DC4A0A, #F97316)",
                WebkitBackgroundClip:    "text",
                WebkitTextFillColor:     "transparent",
                backgroundClip:         "text",
              }}
            >
              Students
            </span>
            <span className="block">with Real</span>
            <span className="block" style={{ color: "rgba(255,255,255,0.80)" }}>
              Digital Skills
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
            style={{ color: "rgba(255,255,255,0.72)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            CodePath equips students with hands-on digital skills — graphic design,
            presentations, and creative projects that build real confidence
            and career-readiness.
          </motion.p>

          {/* ══ CTA BUTTONS ══ */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* PRIMARY — Join a Program */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-white text-base transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #DC4A0A, #F97316)",
                boxShadow:  "0 4px 20px rgba(220,74,10,0.50)",
                color:      "#FFFFFF",
              }}
            >
              Join a Program <ArrowRight size={18} />
            </Link>

            {/* SECONDARY — See Programs */}
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-base transition-all active:scale-95"
              style={{
                border:           "2.5px solid rgba(255,255,255,0.80)",
                color:            "#FFFFFF",
                background:       "transparent",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              See Programs <ArrowRight size={18} />
            </Link>

            {/* TERTIARY — Partner With Us */}
            <Link
              href="/schools"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-base transition-all active:scale-95"
              style={{
                border:     "2.5px solid rgba(249,115,22,0.70)",
                color:      "#F97316",
                background: "rgba(249,115,22,0.10)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(249,115,22,0.22)";
                e.currentTarget.style.border     = "2.5px solid rgba(249,115,22,1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(249,115,22,0.10)";
                e.currentTarget.style.border     = "2.5px solid rgba(249,115,22,0.70)";
              }}
            >
              Partner With Us <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border:     "1px solid rgba(255,255,255,0.20)",
                  }}
                >
                  <s.icon size={18} style={{ color: "#F97316" }} />
                </div>
                <div>
                  <div className="text-white font-black text-xl leading-none">{s.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ══ RIGHT — Dashboard Card ══ */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div
            className="rounded-3xl p-8"
            style={{
              background:    "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              border:        "1px solid rgba(255,255,255,0.16)",
            }}
          >
            {/* Card header */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-lg shrink-0"
                style={{ background: "linear-gradient(135deg, #DC4A0A, #F97316)" }}
              >
                CP
              </div>
              <div>
                <div className="text-white font-bold">CodePath Studio</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.50)" }}>
                  Student Dashboard
                </div>
              </div>
            </div>

            {/* Progress bars */}
            {[
              { label: "Graphic Design",    progress: 85, color: "#F97316" },
              { label: "Office Skills",      progress: 72, color: "#34D399" },
              { label: "Digital Creativity", progress: 60, color: "#60A5FA" },
            ].map((item) => (
              <div key={item.label} className="mb-5">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {item.label}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.45)" }}>{item.progress}%</span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.10)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: item.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                  />
                </div>
              </div>
            ))}

            {/* Mini stats */}
            <div
              className="mt-6 pt-6 grid grid-cols-2 gap-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
            >
              {[
                { value: "14", label: "Projects Done"  },
                { value: "3",  label: "Certificates"   },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-4 text-center"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <div className="text-white font-black text-2xl">{s.value}</div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.50)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}