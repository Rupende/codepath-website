"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, School, Users,
  BarChart3, Lightbulb, Trophy, BookOpen, Star
} from "lucide-react";

const benefits = [
  { icon: BarChart3,  title: "Measurable Outcomes",    desc: "Track student progress with structured assessments and project reviews each term." },
  { icon: Users,      title: "Expert Facilitation",     desc: "Our trained facilitators run sessions at your school — no extra burden on your staff." },
  { icon: BookOpen,   title: "Curriculum-Aligned",      desc: "Programs complement existing school subjects without disrupting timetables." },
  { icon: Trophy,     title: "Competitions & Awards",   desc: "Students compete in school-level challenges and receive recognised certificates." },
  { icon: Lightbulb,  title: "Creative Skill Building", desc: "Graphic design, office tools, presentations — skills students actually use." },
  { icon: Star,       title: "School-Wide Recognition", desc: "Showcase events celebrate student achievements in front of peers and parents." },
];

const steps = [
  { num: "01", title: "Book a Consultation",  desc: "We meet with your school leadership to understand your goals and student needs."  },
  { num: "02", title: "Tailor the Program",   desc: "We design a term-long plan that fits your school schedule and class sizes."       },
  { num: "03", title: "Launch & Facilitate",  desc: "Our team runs sessions at your school every week — fully managed by us."         },
  { num: "04", title: "Celebrate & Certify",  desc: "Students showcase work at a term-end event and receive printed certificates."    },
];

const included = [
  "Weekly facilitated sessions at your school",
  "All digital tools and materials provided",
  "Student progress tracking and reporting",
  "Term-end showcase and certificate ceremony",
  "School partnership certificate and branding",
  "Dedicated CodePath support contact",
];

export default function SchoolsPage() {
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

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.20)" }}
            >
              <School size={14} style={{ color: "#F97316" }} />
              <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.90)" }}>
                School Partnerships
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Bring Digital Skills
              <span
                className="block"
                style={{
                  background:           "linear-gradient(135deg, #DC4A0A, #F97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor:  "transparent",
                  backgroundClip:      "text",
                }}
              >
                To Your School
              </span>
            </h1>

            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Partner with CodePath to deliver structured, hands-on digital skills
              programs to your students — fully facilitated, curriculum-aligned,
              and built for Zimbabwean schools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-white text-base transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #DC4A0A, #F97316)",
                  boxShadow:  "0 4px 20px rgba(220,74,10,0.45)",
                  color:      "#FFFFFF",
                }}
              >
                Book a Free Consultation <ArrowRight size={18} />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-base transition-all hover:bg-white/10 active:scale-95"
                style={{
                  border: "2.5px solid rgba(255,255,255,0.70)",
                  color:  "#FFFFFF",
                }}
              >
                View Programs
              </Link>
            </div>
          </motion.div>

          {/* Right — Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="rounded-3xl p-8"
              style={{
                background:     "rgba(255,255,255,0.08)",
                border:         "1px solid rgba(255,255,255,0.16)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="text-white font-black text-lg mb-6">Why Schools Choose CodePath</p>
              {[
                { label: "Schools Currently Partnered",  value: "2+"  },
                { label: "Students Enrolled",   value: "50+" },
                { label: "Avg. Student Satisfaction",    value: "98%"  },
                { label: "Terms of Program Delivery",    value: "ongoing"   },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4"
                  style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.10)" : "none" }}
                >
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {s.label}
                  </span>
                  <span className="font-black text-xl" style={{ color: "#F97316" }}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ BENEFITS ══ */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "#F0FAF5", color: "#0D4A35", border: "1px solid #D4E8E0" }}
            >
              Partnership Benefits
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#0F3D30" }}>
              Everything Your School{" "}
              <span
                style={{
                  background:           "linear-gradient(135deg, #DC4A0A, #F97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor:  "transparent",
                  backgroundClip:      "text",
                }}
              >
                Gets
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#5A7A70" }}>
              A fully managed program that fits your school — no disruption, just results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="p-7 rounded-2xl transition-all duration-300 group"
                style={{ border: "2px solid #E8F5F0", background: "#FFFFFF" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                onMouseEnter={e => {
                  e.currentTarget.style.border     = "2px solid #1A5C4A";
                  e.currentTarget.style.boxShadow  = "0 12px 40px rgba(26,92,74,0.12)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.border    = "2px solid #E8F5F0";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "#F0FAF5", border: "1px solid #D4E8E0" }}
                >
                  <b.icon size={22} style={{ color: "#0D4A35" }} />
                </div>
                <h3 className="font-black text-lg mb-2" style={{ color: "#0F3D30" }}>
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A70" }}>
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="section-padding" style={{ background: "#F7FAF9" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "#FFF4EE", color: "#DC4A0A", border: "1px solid #FFD5BE" }}
            >
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "#0F3D30" }}>
              Getting Started is{" "}
              <span
                style={{
                  background:           "linear-gradient(135deg, #DC4A0A, #F97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor:  "transparent",
                  backgroundClip:      "text",
                }}
              >
                Simple
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative p-7 rounded-2xl text-center"
                style={{ background: "#FFFFFF", border: "2px solid #E8F5F0" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.10 }}
              >
                {/* Step number */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 font-black text-xl"
                  style={{
                    background: "linear-gradient(135deg, #DC4A0A, #F97316)",
                    color:      "#FFFFFF",
                    boxShadow:  "0 4px 14px rgba(220,74,10,0.35)",
                  }}
                >
                  {step.num}
                </div>
                <h3 className="font-black text-base mb-2" style={{ color: "#0F3D30" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A70" }}>
                  {step.desc}
                </p>

                {/* Connector arrow (not on last) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 font-black text-xl"
                    style={{ color: "#D4E8E0" }}
                  >
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT'S INCLUDED ══ */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              What's Included
            </span>
            <h2 className="text-4xl font-black mb-6" style={{ color: "#0F3D30" }}>
              A Complete,{" "}
              <span
                style={{
                  background:           "linear-gradient(135deg, #DC4A0A, #F97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor:  "transparent",
                  backgroundClip:      "text",
                }}
              >
                Managed Program
              </span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#5A7A70" }}>
              When you partner with CodePath, we handle everything — all you need
              to do is open the doors for your students.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-white transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #DC4A0A, #F97316)",
                boxShadow:  "0 4px 16px rgba(220,74,10,0.40)",
                color:      "#FFFFFF",
              }}
            >
              Book a Free Consultation <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="space-y-4">
            {included.map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-4 p-5 rounded-2xl"
                style={{ background: "#F7FAF9", border: "1px solid #E8F5F0" }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ x: 4 }}
              >
                <CheckCircle2 size={22} style={{ color: "#0D4A35", flexShrink: 0 }} />
                <span className="font-semibold" style={{ color: "#1A2E28" }}>
                  {item}
                </span>
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
            Ready to Partner With Us?
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.75)" }}>
            Book a free 30-minute consultation and let's build a program
            tailored to your school.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-black text-base transition-all hover:bg-gray-50 active:scale-95"
            style={{
              background: "#FFFFFF",
              color:      "#DC4A0A",
              boxShadow:  "0 4px 20px rgba(0,0,0,0.20)",
            }}
          >
            Book a Free Consultation <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}