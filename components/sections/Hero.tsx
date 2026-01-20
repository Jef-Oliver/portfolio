import { ArrowDown, Download, Github, Mail } from 'lucide-react';

import { CONTACT } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-light rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-primary rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-light rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="heading-xl text-light mb-6">
            Backend Developer{' '}
            <span className="text-transparent bg-gradient-to-r from-purple-primary to-purple-light bg-clip-text">
              especializado
            </span>
          </h1>
          
          <div className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            <p className="mb-2">
              Arquitetura robusta, performance otimizada e sistemas escaláveis.
            </p>
            <p className="mb-2">
              4 anos de experiência modernizando sistemas corporativos.
            </p>
            <p>
              Especialista em Python, Java, PostgreSQL e Google Cloud Platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <a
              href="#projetos"
              className="btn-primary group flex items-center gap-2"
              aria-label="Ver meus projetos"
            >
              Explorar Projetos
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            
            <a
              href="#contato"
              className="btn-secondary group flex items-center gap-2"
              aria-label="Ir para a seção de contato"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Entrar em Contato
            </a>

            <a
              href={CONTACT.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="btn-secondary group flex items-center gap-2"
              aria-label="Baixar currículo (PDF)"
            >
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Baixar Currículo
            </a>
          </div>

          <div className="flex justify-center animate-slide-up">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-dark rounded-lg px-3 py-2"
              aria-label="Ver perfil no GitHub (abre em nova aba)"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-primary rounded-full flex justify-center">
          <div className="w-1 h-2 bg-purple-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}