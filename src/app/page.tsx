"use client";
import AboutSection from "./sections/about";
import ContactSection from "./sections/contact";
import HeroSection from "./sections/hero";
import SolutionSection from "./sections/solutions";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SolutionSection />
      <ContactSection />
    </>
  );
}
