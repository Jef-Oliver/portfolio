import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PortfolioPage from '@/components/sections/portfolio/PortfolioPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfólio | Jef Oliver — Full Stack Developer',
  description:
    'Desenvolvedor Full Stack com 4 anos de experiência em Python, Django, Next.js, React, Angular, Java Spring Boot e suporte técnico de sistemas corporativos.',
  keywords: [
    'Full Stack Developer', 'Desenvolvedor Full Stack', 'Python', 'Django', 'FastAPI', 'Next.js', 'React', 'Angular',
    'PostgreSQL', 'Docker', 'Google Cloud Platform', 'Suporte Técnico',
  ],
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-dark">
      <Header />
      <PortfolioPage />
      <Footer />
    </main>
  );
}
