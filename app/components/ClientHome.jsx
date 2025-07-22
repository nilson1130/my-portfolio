"use client";
import TitleEffect from "./TitleEffect";
import HeroSection from "./homepage/hero-section";
import AboutSection from "./homepage/about";
import Experience from "./homepage/experience";
import Skills from "./homepage/skills";
import Projects from "./homepage/projects";
import Education from "./homepage/education";
import Blog from "./homepage/blog";
import ContactSection from "./homepage/contact";

export default function ClientHome({ blogs }) {
  return (
    <>
      <TitleEffect />
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  );
} 