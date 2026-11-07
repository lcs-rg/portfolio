import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact, Footer } from "@/components/Contact";
import { Motion } from "@/components/Motion";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <SiteNav />
      <Motion />
      <main className="relative">
        <Hero />
        <SectionDivider index="01" label="Sobre" />
        <About />
        <SectionDivider index="02" label="Stack" reverse />
        <Stack />
        <SectionDivider index="03" label="Experiência" />
        <Experience />
        <SectionDivider index="04" label="Projetos" reverse />
        <Projects />
        <Education />
        <SectionDivider index="05" label="Contato" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
