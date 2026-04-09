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
                    Full Stack Python Developer
                  </span>{' '}
                  apaixonado por transformar regras de negocio complexas e
                  exigencias legais em sistemas escalaveis e de alta
                  performance. Tenho{' '}
                  <span className="text-purple-light font-semibold">4 anos</span>{' '}
                  de experiencia desenhando e modernizando sistemas corporativos
                  e projetos governamentais vitais, com foco em ERP, gestao de
                  ponto e RH.
                </p>

                <p className="mb-6">
                  Minha especialidade esta na{' '}
                  <span className="text-purple-light font-semibold">
                    engenharia backend
                  </span>
                  : arquitetura de dados com{' '}
                  <span className="text-purple-light font-semibold">
                    Python (Django/FastAPI)
                  </span>{' '}
                  e{' '}
                  <span className="text-purple-light font-semibold">
                    Java (Spring Boot)
                  </span>
                  , utilizando{' '}
                  <span className="text-purple-light font-semibold">
                    PostgreSQL, SQL Server, Redis
                  </span>{' '}
                  e APIs REST para garantir velocidade, confiabilidade e
                  integridade para trilhas de auditoria.
                </p>

                <p className="mb-6">
                  Sou especialista em abstrair legislacoes rigidas e processos
                  matematicos complexos, como jornadas dinamicas e tolerancias,
                  para dentro de queries otimizadas no backend e fluxos de
                  negocio robustos, sempre alinhados a governanca de TI e
                  compliance corporativo.
                </p>

                <p className="mb-6">
                  No full stack, entrego features ponta a ponta com foco em
                  excelencia de UI/UX usando{' '}
                  <span className="text-purple-light font-semibold">
                    React, TypeScript, JavaScript, AJAX e ecossistema Django
                  </span>
                  . Tambem tenho historico em integracoes fisicas no navegador,
                  como biometria facial e leitura digital sincronizada a nuvem,
                  com seguranca da informacao e LGPD.
                </p>

                <p>
                  Trabalho com metodologias ageis, IA para automacao de codigo,
                  containerizacao com Docker e cloud em GCP. Para mim, nao
                  existe limite entre web e mundo fisico: gosto de criar e
                  plugar integracoes de hardware direto no navegador.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}