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
                  <span className="text-purple-light font-semibold">
                    Full Stack Developer
                  </span>{' '}
                  especializado em transformar regras de negócio complexas em soluções escaláveis, seguras e performáticas. Tenho{' '}
                  <span className="text-purple-light font-semibold">5 anos</span>{' '}
                  de experiência arquitetando e modernizando sistemas corporativos e projetos governamentais de missão crítica.
                </p>

                <p className="mb-6">
                  Minha expertise abrange o desenvolvimento completo de sistemas utilizando{' '}
                  <span className="text-purple-light font-semibold">
                    Python (Django/FastAPI), Java (Spring Boot) e Angular 19
                  </span>
                  . Domino a criação de arquiteturas de dados robustas com{' '}
                  <span className="text-purple-light font-semibold">
                    PostgreSQL, SQL Server e Redis
                  </span>
                  , garantindo integridade e trilhas de auditoria para operações complexas.
                </p>

                <p className="mb-6">
                  Um grande diferencial no meu fluxo de trabalho é o uso estratégico de{' '}
                  <span className="text-purple-light font-semibold">
                    Inteligência Artificial como acelerador de desenvolvimento
                  </span>
                  . Sou especialista em criar agentes inteligentes, utilizar MCPs e aplicar engenharia de prompts para otimização de código e correção de bugs, mantendo sempre o controle humano total sobre as decisões arquiteturais e de segurança.
                </p>

                <p className="mb-6">
                  No frontend, entrego interfaces de alta produtividade com{' '}
                  <span className="text-purple-light font-semibold">
                    React, Angular, Next.js e Tailwind CSS
                  </span>
                  . Tenho vasta experiência em integrações web-hardware, como biometria facial multiângulo e leitura digital, operando em conformidade com a LGPD.
                </p>

                <p>
                  Trabalho com infraestrutura moderna, utilizando containerização com Docker e deploy em Google Cloud Platform (GCP). Meu foco é extrair o máximo da tecnologia para entregar software confiável que resolve problemas reais do mundo corporativo e governamental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}