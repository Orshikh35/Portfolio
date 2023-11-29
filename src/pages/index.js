import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section className="h-full flex flex-col items-center justify-center ">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Experience />
      <Work/>
      <Contact/>
      <Footer />
    </section>
  );
}