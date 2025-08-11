import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import LinkedInSection from '@/components/sections/LinkedIn';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Header />
      <Hero />
      <About />
      <Projects />
      <LinkedInSection />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}