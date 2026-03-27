import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cp: {
          "900": "#052E1C",
          "800": "#0D4A35",
          "700": "#1A6B50",
          "600": "#2D8A6A",
          "100": "#EDFAF4",
          "50":  "#F8FFFE",
          orange:    "#DC4A0A",
          "orange-l":"#F97316",
          text:      "#111827",
          muted:     "#4B7A6A",
          border:    "#C8E6DA",
          white:     "#FFFFFF",
        },
      },
      fontFamily: { sans: ["Inter", "sans-serif"] },
      fontSize: {
        "display": ["clamp(2.8rem,5.5vw,4.5rem)", { lineHeight: "1.05", fontWeight: "900" }],
        "h1":      ["clamp(2.2rem,4vw,3.4rem)",   { lineHeight: "1.1",  fontWeight: "800" }],
        "h2":      ["clamp(1.6rem,3vw,2.4rem)",   { lineHeight: "1.2",  fontWeight: "700" }],
        "h3":      ["clamp(1.1rem,2vw,1.4rem)",   { lineHeight: "1.3",  fontWeight: "700" }],
      },
      boxShadow: {
        sm:    "0 2px 8px rgba(5,46,28,0.06)",
        md:    "0 4px 20px rgba(5,46,28,0.10)",
        lg:    "0 8px 40px rgba(5,46,28,0.14)",
        xl:    "0 16px 60px rgba(5,46,28,0.18)",
        orange:"0 4px 20px rgba(220,74,10,0.35)",
        green: "0 4px 20px rgba(13,74,53,0.28)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      animation: {
        "float":      "float 5s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "slide-up":   "slideUp 0.6s ease forwards",
      },
      keyframes: {
        float:     { "0%,100%": { transform: "translateY(0)" },      "50%": { transform: "translateY(-10px)" } },
        pulseSoft: { "0%,100%": { opacity: "1" },                    "50%": { opacity: "0.6" } },
        slideUp:   { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
};
export default config;