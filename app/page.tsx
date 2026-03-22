import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Languages from "@/components/languages";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Languages />
      <Contact />
      <Footer />
    </>
  );
}
