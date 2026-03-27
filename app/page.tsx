import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Benefits from "@/components/sections/Benefits";
import ProgramsPreview from "@/components/sections/ProgramsPreview";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Benefits />
      <ProgramsPreview />
      <CTASection />
    </>
  );
}