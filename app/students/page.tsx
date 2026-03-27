"use client";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Monitor, Trophy, Star, Award, Lightbulb } from "lucide-react";
import Link from "next/link";

const categories = [
  { icon: Palette,   label: "Graphic Design",    color: { bg: "#FFF4EE", border: "#FFD5BE", icon: "#DC4A0A" } },
  { icon: Monitor,   label: "Digital Office",     color: { bg: "#F0FAF5", border: "#D4E8E0", icon: "#0D4A35" } },
  { icon: Trophy,    label: "Skills Challenges",  color: { bg: "#FFFBEA", border: "#FFE57F", icon: "#D4A000" } },
  { icon: Lightbulb, label: "Creative Projects",  color: { bg: "#F5F0FF", border: "#DDD6FE", icon: "#7C3AED" } },
];

const projects = [
  { title: "School Event Poster",       student: "Tafadzwa M.",   category: "Graphic Design",   term: "Term 1, 2026", desc: "A vibrant A3 poster designed for a school Sports Day event using layout and typography principles."   },
  { title: "Sports Day Certificate",    student: "Rutendo C.",    category: "Graphic Design",   term: "Term 1, 2026", desc: "Custom certificate template created for student achievement recognition at term-end events."         },
  { title: "Business Proposal Doc",     student: "Tinashe K.",    category: "Digital Office",   term: "Term 1, 2026", desc: "A professionally formatted Word document with headers, tables, and structured sections."             },
  { title: "Class Timetable Design",    student: "Nyasha P.",     category: "Digital Office",   term: "Term 4, 2025", desc: "Designed and formatted a class timetable with colour-coding and clean grid structure."              },
  { title: "Digital Creativity Entry",  student: "Simba F.",      category: "Skills Challenges", term: "Term 4, 2025", desc: "Competition entry for the school-wide digital challenge — awarded Best Creative Design 2025."       },
  { title: "Infographic Poster",        student: "Chiedza R.",    category: "Creative Projects", term: "Term 3, 2025", desc: "An informational infographic poster combining icons, text layout, and colour theory."               },
  { title: "Welcome Banner Design",     student: "Makomborero T.", category: "Graphic Design",   term: "Term 3, 2025", desc: "A welcome banner created for the school open day — printed and displayed at the school entrance."   },
  { title: "Presentation Deck",         student: "Farai N.",      category: "Digital Office",   term: "Term 2, 2025", desc: "A 12-slide PowerPoint presentation on environmental awareness with consistent visual design."       },
  { title: "Logo Design Exercise",      student: "Vimbai S.",     category: "Creative Projects", term: "Term 2, 2025", desc: "A concept logo designed for a fictional student business — exploring shapes, fonts, and colour."    },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Graphic Design":    { bg: "#FFF4EE", text: "#DC4A0A", border: "#FFD5BE" },
  "Digital Office":    { bg: "#F0FAF5", text: "#0D4A35", border: "#D4E8E0" },
  "Skills Challenges": { bg: "#FFFBEA", text: "#D4A000", border: "#FFE57F" },
  "Creative Projects": { bg: "#F5F0FF", text: "#7C3AED", border: "#DDD6FE" },
};

const testimonials = [
  { quote: "I never thought I could design something that looked professional. CodePath changed that for me.", name: "Tafadzwa M.", school: "Harare High School"   },
  { quote: "The skills challenge was the best part. I learned so much just by trying to win!", name: "Simba F.",     school: "Churchill High School" },
  { quote: "Now I help my teachers format documents. It feels great to know something they don't!", name: "Nyasha P.",    school: "Prince Edward School" },
];

export default function StudentsPage() {
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
          >
            <Star size={14} style={{ color: "#F97316" }} />
            <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.90)" }}>
              Student Work Showcase
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Real Work by
            <span
              className="block"
              style={{
                background:           "linear-gradient(135deg, #DC4A0A, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:  "transparent",
                backgroundClip:      "text",
              }}
            >
              Real Students
            </span>
          </motion.h1>

          <motion.p
            className="text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.75)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Every project here was created by a student in a CodePath program —
            hands-on, practical, and genuinely impressive.
          </motion.p>
        </div>
      </section>

      {/* ══ CATEGORIES ══ */}
      <section style={{ background: "#0F3D30" }}>
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((c, i) => (
              <motion.div
                key={c.label}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: c.color.bg }}
                >
                  <c.icon size={18} style={{ color: c.color.icon }} />
                </div>
                <span className="text-sm font-bold text-white">{c.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROJECT GALLERY ══ */}
      <section className="section-padding" style={{ background: "#F7FAF9" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "#F0FAF5", color: "#0D4A35", border: "1px solid #D4E8E0" }}
            >
              Student Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "#0F3D30" }}>
              What Our Students{" "}
              <span
                style={{
                  background:           "linear-gradient(135deg, #DC4A0A, #F97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor:  "transparent",
                  backgroundClip:      "text",
                }}
              >
                Have Created
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => {
              const cat = categoryColors[p.category];
              return (
                <motion.div
                  key={p.title}
                  className="rounded-2xl overflow-hidden transition-all duration-300 group"
                  style={{ background: "#FFFFFF", border: "2px solid #E8F5F0" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                  whileHover={{ y: -4 }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 12px 40px rgba(26,92,74,0.14)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                >
                  {/* Project colour header */}
                  <div
                    className="h-3 w-full"
                    style={{ background: "linear-gradient(135deg, #0F3D30, #2D7A63)" }}
                  />

                  <div className="p-6">
                    {/* Category tag */}
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                      style={{ background: cat.bg, color: cat.text, border: `1px solid ${cat.border}` }}
                    >
                      {p.category}
                    </span>

                    <h3 className="font-black text-lg mb-2" style={{ color: "#0F3D30" }}>
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "#5A7A70" }}>
                      {p.desc}
                    </p>

                    {/* Footer row */}
                    <div
                      className="flex items-center justify-between pt-4"
                      style={{ borderTop: "1px solid #E8F5F0" }}
                    >
                      <div>
                        <p className="text-xs font-black" style={{ color: "#0F3D30" }}>{p.student}</p>
                        <p className="text-xs" style={{ color: "#5A7A70" }}>{p.term}</p>
                      </div>
                      <Award size={16} style={{ color: "#DC4A0A" }} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "#FFF4EE", color: "#DC4A0A", border: "1px solid #FFD5BE" }}
            >
              Student Voices
            </span>
            <h2 className="text-4xl font-black" style={{ color: "#0F3D30" }}>
              What Students{" "}
              <span
                style={{
                  background:           "linear-gradient(135deg, #DC4A0A, #F97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor:  "transparent",
                  backgroundClip:      "text",
                }}
              >
                Are Saying
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="p-7 rounded-2xl"
                style={{ background: "#F7FAF9", border: "2px solid #E8F5F0" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.10 }}
                whileHover={{ y: -4 }}
              >
                {/* Quote mark */}
                <div
                  className="text-5xl font-black leading-none mb-4"
                  style={{ color: "#F97316" }}
                >
                  "
                </div>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#1A2E28" }}>
                  {t.quote}
                </p>
                <div
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: "1px solid #E8F5F0" }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm text-white shrink-0"
                    style={{ background: "linear-gradient(135deg, #0F3D30, #1A5C4A)" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-sm" style={{ color: "#0F3D30" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "#5A7A70" }}>{t.school}</p>
                  </div>
                </div>
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
            Your Work Could Be Next
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.75)" }}>
            Join a CodePath program and start building projects you're proud to show the world.
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
            Join a Program <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}