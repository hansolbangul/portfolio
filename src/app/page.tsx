import Hero from "@/features/home/components/Hero";
import About from "@/features/about/About";
import Projects from "@/features/projects/Projects";
import Contact from "@/features/contact/Contact";
import Background from "@/shared/components/animations/Background";
import FloatingGameButton from "@/features/games/components/FloatingGameButton";
import ScrollProgress from "@/shared/components/layout/ScrollProgress";

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
      <FloatingGameButton />
    </main>
  );
}
