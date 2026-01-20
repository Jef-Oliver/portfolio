'use client';

import { Mail, Github, User } from 'lucide-react';

import { CONTACT } from '@/lib/constants';

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-dark">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-light mb-4">Sobre Mim</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-primary to-purple-light mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Avatar/Profile section */}
            <div className="md:col-span-1">
              <div className="relative mx-auto w-48 h-48 mb-8">
                <div className="w-full h-full bg-gradient-to-br from-purple-primary to-purple-light rounded-2xl p-1">
                  <div className="w-full h-full bg-dark rounded-xl overflow-hidden">
                    <img
                      src="/projects-images/cp.png"
                      alt="Jeferson Oliver - Foto de Perfil"
                      className="w-full h-full object-cover"
                    />
                    <div className="fallback-icon hidden w-full h-full items-center justify-center">
                      <User className="w-24 h-24 text-purple-light" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-primary"
                  aria-label="Ver perfil no GitHub (abre em nova aba)"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 btn-secondary ml-4"
                  aria-label="Enviar email"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>

            {/* Content section */}
            <div className="md:col-span-2">
              <div className="prose prose-lg text-gray-300 leading-relaxed">
                <p className="mb-6">
                  Sou especialista em backend com{' '}
                  <span className="text-purple-light font-semibold">4 anos</span>{' '}
                  de experiência em{' '}
                  <span className="text-purple-light font-semibold">
                    arquitetura
                  </span>
                  ,{' '}
                  <span className="text-purple-light font-semibold">
                    otimização
                  </span>{' '}
                  e{' '}
                  <span className="text-purple-light font-semibold">
                    modernização
                  </span>{' '}
                  de sistemas corporativos.
                </p>

                <p className="mb-6">
                  Trabalho com{' '}
                  <span className="text-purple-light font-semibold">
                    Python (Django/FastAPI)
                  </span>
                  ,{' '}
                  <span className="text-purple-light font-semibold">
                    Java (Spring Boot)
                  </span>
                  ,{' '}
                  <span className="text-purple-light font-semibold">PostgreSQL</span>{' '}
                  e{' '}
                  <span className="text-purple-light font-semibold">
                    Google Cloud Platform
                  </span>
                  .
                </p>

                <p className="mb-6">
                  Tenho capacidade full-stack (
                  <span className="text-purple-light font-semibold">
                    React e TypeScript
                  </span>
                  ) e posso contribuir no frontend quando necessário, mas meu foco
                  e expertise estão em backend.
                </p>

                <p className="mb-6">
                  Apaixonado por código limpo, APIs bem pensadas e soluções que
                  fazem diferença real na rotina das pessoas.
                </p>

                <p>
                  Atualmente, estou explorando o uso de{' '}
                  <span className="text-purple-light font-semibold">
                    Inteligência Artificial
                  </span>{' '}
                  e{' '}
                  <span className="text-purple-light font-semibold">
                    automação de processos
                  </span>{' '}
                  para criar sistemas mais inteligentes e menos burocráticos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}