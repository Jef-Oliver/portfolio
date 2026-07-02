import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Specialties from '@/components/sections/Specialties';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import LinkedInProjects from '@/components/sections/LinkedInProjects';
import Skills from '@/components/sections/Skills';
import Learning from '@/components/sections/Learning';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Header />
      <Hero />
      <Specialties />
      <About />
      <Experience />
      <LinkedInProjects />
      <Skills />
      <Learning />
      <Contact />
      <Footer />
    </main>
  );
}