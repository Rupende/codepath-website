"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Mail, MapPin, Phone, ArrowRight,
  ExternalLink, MessageCircle, Video, Share2,
} from "lucide-react";

const navLinks = {
  Company: [
    { l: "About Us",     h: "/about"    },
    { l: "Programs",     h: "/programs" },
    { l: "Student Work", h: "/students" },
    { l: "For Schools",  h: "/schools"  },
  ],
  Support: [
    { l: "Contact Us",        h: "/contact" },
    { l: "Join a Program",    h: "/contact" },
    { l: "Partner With Us",   h: "/schools" },
    { l: "Book Consultation", h: "/contact" },
  ],
};

const socials = [
  { Icon: Share2,        href: "#", label: "Facebook" },
  { Icon: MessageCircle, href: "#", label: "WhatsApp" },
  { Icon: Video,         href: "#", label: "YouTube"  },
  { Icon: ExternalLink,  href: "#", label: "Website"  },
];

export default function Footer() {
  return (
    <footer>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <div
        className="relative overflow-hidden py-16 px-6"
        style={{ background: "linear-gradient(135deg, #DC4A0A, #F97316)" }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.10)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.07)" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Ready to Transform Your School?
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.90)" }}
          >
            Join CodePath and give your students the digital skills they need for tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            {/* Get Started Today — solid white, orange text */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-base transition-all hover:bg-gray-50 active:scale-95"
              style={{
                background: "#FFFFFF",
                color:      "#DC4A0A",
                boxShadow:  "0 4px 20px rgba(0,0,0,0.20)",
              }}
            >
              Get Started Today <ArrowRight size={18} />
            </Link>

            {/* View Programs — solid dark green, white text */}
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-base text-white transition-all active:scale-95"
              style={{
                background: "#0A2E22",
                border:     "2px solid rgba(255,255,255,0.30)",
                color:      "#FFFFFF",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#0D3D2C")}
              onMouseLeave={e => (e.currentTarget.style.background = "#0A2E22")}
            >
              View Programs
            </Link>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MAIN FOOTER BODY
      ══════════════════════════════════════ */}
      <div style={{ background: "#0A2E22" }}>
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* ══ BRAND COLUMN ══ */}
            <div className="lg:col-span-1">
              {/* Logo — no background, no filter */}
              <div className="mb-6">
                <Image
                  src="/logo-white.png"
                  alt="CodePath Digital Skills Consulting"
                  width={180}
                  height={58}
                  className="object-contain"
                  style={{
                    height:   "56px",
                    width:    "auto",
                    maxWidth: "180px",
                    display:  "block",
                  }}
                />
              </div>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "rgba(255,255,255,0.68)" }}
              >
                Equipping students with practical digital skills for academic
                success and the digital future.
              </p>

              {/* Tagline pill */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7"
                style={{
                  background: "rgba(249,115,22,0.15)",
                  border:     "1px solid rgba(249,115,22,0.35)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#F97316" }} />
                <span className="text-xs font-black" style={{ color: "#F97316" }}>
                  Create. Inspire. Design.
                </span>
              </div>

              {/* Contact details */}
              <div className="space-y-3">
                {[
                  { Icon: MapPin, text: "Harare, Zimbabwe"            },
                  { Icon: Mail,   text: "codepathconsulting@mail.com" },
                  { Icon: Phone,  text: "+263 77 166 8918"            },
                  { Icon: Phone,  text: "+263 77 175 8466"            },
                ].map(({ Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                      style={{ background: "rgba(249,115,22,0.18)" }}
                    >
                      <Icon size={12} style={{ color: "#F97316" }} />
                    </div>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ══ NAV LINK COLUMNS ══ */}
            {Object.entries(navLinks).map(([section, items]) => (
              <div key={section}>
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="w-3 h-0.5 rounded-full"
                    style={{ background: "#F97316" }}
                  />
                  <p
                    className="font-black text-xs uppercase tracking-widest"
                    style={{ color: "#FFFFFF" }}
                  >
                    {section}
                  </p>
                </div>
                <ul className="space-y-3">
                  {items.map(({ l, h }) => (
                    <li key={l}>
                      <Link
                        href={h}
                        className="flex items-center gap-2.5 text-sm font-medium transition-all duration-200"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                      >
                        <span
                          className="w-1 h-1 rounded-full shrink-0"
                          style={{ background: "rgba(255,255,255,0.30)" }}
                        />
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* ══ NEWSLETTER COLUMN ══ */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-3 h-0.5 rounded-full"
                  style={{ background: "#F97316" }}
                />
                <p
                  className="font-black text-xs uppercase tracking-widest"
                  style={{ color: "#FFFFFF" }}
                >
                  Stay Updated
                </p>
              </div>

              <p
                className="text-sm mb-4 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Get news about programs, achievements, and new opportunities.
              </p>

              <div className="space-y-2.5">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border:     "1.5px solid rgba(255,255,255,0.14)",
                    color:      "white",
                    outline:    "none",
                  }}
                  onFocus={e => (e.currentTarget.style.border = "1.5px solid rgba(249,115,22,0.65)")}
                  onBlur={e  => (e.currentTarget.style.border = "1.5px solid rgba(255,255,255,0.14)")}
                />
                <button
                  type="button"
                  className="w-full py-3 rounded-xl text-sm font-black text-white transition-all hover:opacity-90 active:scale-95"
                  style={{ background: "linear-gradient(135deg, #DC4A0A, #F97316)" }}
                >
                  Subscribe
                </button>
              </div>

              {/* Social icons */}
              <div className="mt-7">
                <p
                  className="text-xs font-semibold mb-3 uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,0.40)" }}
                >
                  Follow Us
                </p>
                <div className="flex gap-2.5 flex-wrap">
                  {socials.map(({ Icon, href, label }, i) => (
                    <Link
                      key={i}
                      href={href}
                      title={label}
                      aria-label={label}
                      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border:     "1px solid rgba(255,255,255,0.14)",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = "rgba(249,115,22,0.28)";
                        e.currentTarget.style.border     = "1px solid rgba(249,115,22,0.55)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.border     = "1px solid rgba(255,255,255,0.14)";
                      }}
                    >
                      <Icon size={15} style={{ color: "rgba(255,255,255,0.80)" }} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

        {/* ══ BOTTOM BAR ══ */}
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Image
              src="/logo-white.png"
              alt="CodePath"
              width={120}
              height={38}
              className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
              style={{
                height:   "34px",
                width:    "auto",
                maxWidth: "120px",
                display:  "block",
              }}
            />
            <p
              className="text-xs text-center"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              © {new Date().getFullYear()} CodePath Digital Skills Consulting.
              All rights reserved.
            </p>
            <p className="text-xs font-black" style={{ color: "#F97316" }}>
              Create. Inspire. Design.
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}