import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PortfolioPage from '@/components/sections/portfolio/PortfolioPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfólio | Jef Oliver — Backend Developer',
  description:
    'Full Stack Developer com 4 anos de experiência em Python, Django, Java Spring Boot, Angular e sistemas corporativos. Veja minha experiência, skills e projetos.',
  keywords: [
    'Backend Developer', 'Python', 'Django', 'FastAPI', 'Java', 'Spring Boot',
    'PostgreSQL', 'Docker', 'Google Cloud Platform', 'Full Stack Developer',
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
