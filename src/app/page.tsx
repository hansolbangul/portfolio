import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Contact from "@/components/Contact";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="relative">
      <Background />
      <ScrollProgress />
      <div id="portfolio-content" className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
