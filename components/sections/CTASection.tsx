"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, GraduationCap, School } from "lucide-react";

const cards = [
  {
    icon:  GraduationCap,
    title: "For Students",
    desc:  "Join a program and develop hands-on digital skills that set you apart in school and beyond.",
    href:  "/contact",
    cta:   "Enrol Now",
  },
  {
    icon:  School,
    title: "For Schools",
    desc:  "Partner with CodePath to bring digital skills to your students through structured programs.",
    href:  "/schools",
    cta:   "Learn More",
  },
];

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden section-padding"
      style={{ background: "linear-gradient(135deg, #0F3D30 0%, #1A5C4A 50%, #2D7A63 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(255,255,255,0.04)", transform: "translate(-50%, -50%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(220,74,10,0.12)", transform: "translate(50%, 50%)" }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* ── Top badge ── */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "rgba(255,255,255,0.10)",
              border:     "1px solid rgba(255,255,255,0.20)",
            }}
          >
            <Sparkles size={14} style={{ color: "#F97316" }} />
            <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.90)" }}>
              Enrolling Now — Limited Spots
            </span>
          </div>
        </motion.div>

        {/* ── Headline ── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight">
            Students Don't Just Learn —
            <br />
            <span
              style={{
                background:              "linear-gradient(135deg, #DC4A0A, #F97316)",
                WebkitBackgroundClip:    "text",
                WebkitTextFillColor:     "transparent",
                backgroundClip:         "text",
              }}
            >
              They Create. Inspire. Design.
            </span>
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Give your students the digital edge they need. Join hundreds already
            building their future with CodePath.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.10)",
                border:     "1px solid rgba(255,255,255,0.20)",
                backdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(249,115,22,0.20)", border: "1px solid rgba(249,115,22,0.35)" }}
              >
                <card.icon size={26} style={{ color: "#F97316" }} />
              </div>

              {/* Text */}
              <h3 className="text-2xl font-black text-white mb-3">
                {card.title}
              </h3>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {card.desc}
              </p>

              {/* Card CTA button */}
              <Link
                href={card.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #DC4A0A, #F97316)",
                  color:      "#FFFFFF",
                  boxShadow:  "0 4px 16px rgba(220,74,10,0.40)",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.90")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                {card.cta} <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom single CTA ── */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p
            className="text-sm mb-5"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Not sure where to start? Talk to us — we'll guide you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-black text-base text-white transition-all active:scale-95"
            style={{
              background: "#FFFFFF",
              color:      "#0F3D30",
              boxShadow:  "0 4px 20px rgba(0,0,0,0.20)",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#F0FAF5")}
            onMouseLeave={e => (e.currentTarget.style.background = "#FFFFFF")}
          >
            Contact Us Today <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}