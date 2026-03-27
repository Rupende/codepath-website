"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, TrendingUp, Award, Briefcase, Smile } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Gain hands-on digital skills used in real jobs",
  "Build a portfolio of completed creative projects",
  "Participate in fun, competitive skills challenges",
  "Receive certificates and formal recognition",
  "Become more confident and digitally capable",
  "Get a head start on academic and career success",
];

const outcomes = [
  { icon: TrendingUp, value: "3x",    label: "More confident",  color: "#E84E0F" },
  { icon: Award,      value: "100%",  label: "Get certified",   color: "#1A5C4A" },
  { icon: Briefcase,  value: "Day 1", label: "Applicable skills",color: "#3B82F6" },
  { icon: Smile,      value: "98%",   label: "Enjoy learning",  color: "#8B5CF6" },
];

export default function Benefits() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #F4F9F7 0%, #EAF4F0 100%)" }}>
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Outcome counters */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {outcomes.map((o, i) => (
            <motion.div
              key={o.label}
              className="text-center p-6 rounded-2xl bg-white border"
              style={{ borderColor: "#D4E8E0", boxShadow: "0 4px 16px rgba(26,92,74,0.06)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(26,92,74,0.12)" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: o.color + "15", border: `2px solid ${o.color}25` }}>
                <o.icon size={20} style={{ color: o.color }} />
              </div>
              <div className="font-black text-2xl mb-1" style={{ color: "#0A2E22" }}>{o.value}</div>
              <div className="text-xs font-semibold" style={{ color: "#5A7A70" }}>{o.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-5"
              style={{ background: "white", color: "#E84E0F", border: "1px solid #F5C4B4" }}>
              Student Benefits
            </span>
            <h2 className="font-black text-cp-green-dark mb-5"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              What Students <span className="text-orange-gradient">Walk Away With</span>
            </h2>
            <p className="text-cp-muted text-lg leading-relaxed mb-10">
              CodePath isn't just about learning — it's about building real confidence,
              real skills, and a real portfolio that opens doors long after the program ends.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-black orange-gradient hover:opacity-90 transition-all"
              style={{ boxShadow: "0 4px 20px rgba(232,78,15,0.38)" }}>
              Enrol Your Child <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Right list */}
          <div className="space-y-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border"
                style={{ borderColor: "#D4E8E0" }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ x: 6, boxShadow: "0 8px 24px rgba(26,92,74,0.1)" }}
              >
                <CheckCircle2 size={20} style={{ color: "#1A5C4A", flexShrink: 0 }} />
                <span className="font-semibold text-sm" style={{ color: "#1A2E28" }}>{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}