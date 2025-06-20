import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
//import Hero from "@/components/Hero";
import Intro from "@/components/Intro";

import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function page() {
  return (
    <main className="flex items-center justify-center w-full mx-auto flex-col px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
