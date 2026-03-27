"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const links = [
  { href: "/",         label: "Home"         },
  { href: "/about",    label: "About"        },
  { href: "/programs", label: "Programs"     },
  { href: "/students", label: "Student Work" },
  { href: "/schools",  label: "For Schools"  },
  { href: "/contact",  label: "Contact"      },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        background:   "#FFFFFF",
        borderBottom: scrolled ? "1px solid #D4E8E0" : "1px solid #E8F5F0",
        boxShadow:    scrolled ? "0 2px 24px rgba(5,46,28,0.10)" : "none",
      }}
    >
      {/* ── Announcement Bar — full width orange ── */}
      <div style={{ background: "linear-gradient(135deg, #DC4A0A, #F97316)" }}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-2 flex-wrap">
          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 animate-pulse" />
          <span className="text-white text-xs font-semibold text-center leading-snug">
            🎓 Term 2 2026 Enrolment is Now Open — Limited spots per school!
          </span>
          <Link
            href="/contact"
            className="text-white text-xs font-black bg-white/20 px-2.5 py-0.5 rounded-full hover:bg-white/30 transition-all whitespace-nowrap"
          >
            Register Now →
          </Link>
        </div>
      </div>

      {/* ── Main Nav Row ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4" style={{ minHeight: "72px" }}>

          {/* ══ LOGO — no background, no filter, no box ══ */}
          <Link
            href="/"
            className="shrink-0 flex items-center group"
          >
            <Image
              src="/logo.png"
              alt="CodePath Digital Skills Consulting"
              width={200}
              height={64}
              className="object-contain transition-transform duration-200 group-hover:scale-105"
              style={{
                height:   "60px",
                width:    "auto",
                maxWidth: "200px",
                display:  "block",
              }}
              priority
            />
          </Link>

          {/* ══ Desktop Nav Links ══ */}
          <nav
            className="hidden lg:flex items-center gap-0.5 flex-1 justify-center"
            aria-label="Main navigation"
          >
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                  style={{
                    color:      active ? "#0D4A35" : "#374151",
                    background: active ? "#EDFAF4" : "transparent",
                  }}
                  onMouseEnter={e => {
                    if (!active) {
                      e.currentTarget.style.color      = "#0D4A35";
                      e.currentTarget.style.background = "#F0FAF5";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      e.currentTarget.style.color      = "#374151";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {l.label}
                  {active && (
                    <span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "#DC4A0A" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ══ Desktop CTA Buttons ══ */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap"
              style={{ border: "2px solid #0D4A35", color: "#0D4A35" }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#0D4A35";
                e.currentTarget.style.color      = "white";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color      = "#0D4A35";
              }}
            >
              Join Program
            </Link>
            <Link
              href="/schools"
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #DC4A0A, #F97316)",
                boxShadow:  "0 3px 14px rgba(220,74,10,0.38)",
              }}
            >
              Partner With Us
            </Link>
          </div>

          {/* ══ Mobile Hamburger ══ */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-all shrink-0"
            style={{ color: "#0D4A35", border: "1.5px solid #D4E8E0" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#EDFAF4")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ══ Mobile Drawer ══ */}
      {open && (
        <div
          className="lg:hidden"
          style={{ borderTop: "1px solid #D4E8E0", background: "#FFFFFF" }}
        >
          {/* Mobile logo — centred, no background */}
          <div
            className="flex items-center justify-center py-4"
            style={{ borderBottom: "1px solid #E8F5F0" }}
          >
            <Image
              src="/logo.png"
              alt="CodePath"
              width={160}
              height={52}
              className="object-contain"
              style={{ height: "48px", width: "auto" }}
            />
          </div>

          {/* Nav links */}
          <div className="px-5 py-3 space-y-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    color:      active ? "#0D4A35" : "#374151",
                    background: active ? "#EDFAF4" : "transparent",
                  }}
                >
                  {l.label}
                  <ChevronRight size={14} style={{ color: "#4B7A6A" }} />
                </Link>
              );
            })}
          </div>

          {/* Mobile CTAs */}
          <div className="px-5 pb-5 grid grid-cols-2 gap-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-center py-3 rounded-xl text-sm font-bold"
              style={{ border: "2px solid #0D4A35", color: "#0D4A35" }}
            >
              Join Program
            </Link>
            <Link
              href="/schools"
              onClick={() => setOpen(false)}
              className="text-center py-3 rounded-xl text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg, #DC4A0A, #F97316)" }}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}