import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact, Footer } from "@/components/Contact";
import { Motion } from "@/components/Motion";

export default function Home() {
  return (
    <>
      <SiteNav />
      <Motion />
      <main className="relative">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
