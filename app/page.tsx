import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] transition-colors duration-300">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Achievements />
      <Projects />
      <Footer />
    </main>
  );
}
