import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { default: "CodePath Digital Skills Consulting", template: "%s | CodePath" },
  description: "Empowering students with real digital skills — graphic design, digital office skills, and creative projects, delivered inside schools across Zimbabwe.",
  keywords: ["digital skills Zimbabwe", "coding clubs", "graphic design students", "CodePath"],
  openGraph: {
    title: "CodePath Digital Skills Consulting",
    description: "Create. Inspire. Design.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased bg-white text-cp-text">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}