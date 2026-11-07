import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact, Footer } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="relative">
        <Hero />
        <div aria-hidden className="mx-auto max-w-3xl px-6">
          <div className="h-px bg-line" />
        </div>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Stack />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
