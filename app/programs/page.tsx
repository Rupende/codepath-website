import type { Metadata } from "next";
import ProgramsGrid from "@/components/sections/ProgramsPreview";

export const metadata: Metadata = {
  title: "Programs | CodePath Digital Skills Consulting",
  description: "Explore our hands-on digital skills programs for students.",
};

export default function ProgramsPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #0F3D30 0%, #1A5C4A 50%, #2D7A63 100%)" }}
      >
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
          Our{" "}
          <span style={{
            background: "linear-gradient(135deg, #E84E0F, #FF6B35)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Programs
          </span>
        </h1>
        <p className="text-xl max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
          Every program is hands-on, school-based, and designed to build real
          digital confidence from day one.
        </p>
      </section>

      {/* Grid */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F7FAF9" }}>
        <div className="max-w-6xl mx-auto">
          <ProgramsGrid />
        </div>
      </section>
    </div>
  );
}