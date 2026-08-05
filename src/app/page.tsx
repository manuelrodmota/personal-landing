import { Nav } from "@/components/Nav/Nav";
import { Hero } from "@/components/Hero/Hero";
import { ClientMarquee } from "@/components/ClientMarquee/ClientMarquee";
import { About } from "@/components/About/About";
import { FeaturedWork } from "@/components/FeaturedWork/FeaturedWork";
import { Experience } from "@/components/Experience/Experience";
import { Skills } from "@/components/Skills/Skills";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Container } from "@/components/Container/Container";

export default function Home() {
  return (
    <>
      <Nav />

      <Container id="top">
        <Hero />
      </Container>

      <ClientMarquee />

      <Container>
        <About />
        <FeaturedWork />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}
