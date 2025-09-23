'use client';

import { Mail, Github, User } from 'lucide-react';

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
                  href="https://github.com/Jef-Oliver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-primary"
                  aria-label="Ver perfil no GitHub (abre em nova aba)"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                
                <a
                  href="mailto:j4.oliver23@gmail.com"
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
                  Me formei no <span className="text-purple-light font-semibold">Instituto Federal do Tocantins</span>, onde nossa principal linguagem era
                  {' '}<span className="text-purple-light font-semibold">Java</span> com
                  {' '}<span className="text-purple-light font-semibold">Spring Boot</span>. Ao longo da minha experiência trabalhando no
                  {' '}<span className="text-purple-light font-semibold">governo</span> e acompanhando o avanço da tecnologia, especialmente com
                  {' '}<span className="text-purple-light font-semibold">IA</span>, fui me aprofundando cada vez mais. Hoje vejo como o apoio dessas ferramentas na criação de
                  {' '}<span className="text-purple-light font-semibold">sistemas</span> e
                  {' '}<span className="text-purple-light font-semibold">websites</span> faz diferença: poder resolver um
                  {' '}<span className="text-purple-light font-semibold">bug</span> em instantes e não perder tempo com o óbvio é crucial para um
                  {' '}<span className="text-purple-light font-semibold">desenvolvimento ágil e eficiente</span>.
                </p>

                <p className="mb-6">
                  Atualmente, também estou me aprofundando em novas tecnologias como
                  {' '}<span className="text-purple-light font-semibold">React.js</span>,
                  {' '}<span className="text-purple-light font-semibold">Next.js</span>,
                  {' '}<span className="text-purple-light font-semibold">Tailwind CSS</span> e
                  {' '}<span className="text-purple-light font-semibold">Firebase</span>.
                </p>

                <p className="mb-6">
                  Atuo modernizando
                  {' '}<span className="text-purple-light font-semibold">sistemas governamentais e corporativos</span>, principalmente de
                  {' '}<span className="text-purple-light font-semibold">gestão de ponto</span>,
                  {' '}<span className="text-purple-light font-semibold">controle de acesso</span> e
                  {' '}<span className="text-purple-light font-semibold">RH</span>, unindo
                  {' '}<span className="text-purple-light font-semibold">tecnologia</span>,
                  {' '}<span className="text-purple-light font-semibold">automação</span> e
                  {' '}<span className="text-purple-light font-semibold">visão de produto</span> para entregar soluções que realmente impactam o dia a dia.
                </p>

                <p className="mb-6">
                  Trabalho com <span className="text-purple-light font-semibold">Python</span> (
                  <span className="text-purple-light font-semibold">Django</span> e
                  {' '}<span className="text-purple-light font-semibold">Flask</span>),
                  {' '}<span className="text-purple-light font-semibold">ASP Clássico</span>,
                  {' '}<span className="text-purple-light font-semibold">Java</span> (
                  <span className="text-purple-light font-semibold">Spring Boot</span>) e bancos como
                  {' '}<span className="text-purple-light font-semibold">PostgreSQL</span> e
                  {' '}<span className="text-purple-light font-semibold">SQL Server</span>. Tenho preferência por
                  {' '}<span className="text-purple-light font-semibold">backends limpos</span>,
                  {' '}<span className="text-purple-light font-semibold">APIs REST</span> bem estruturadas e soluções fáceis de manter.
                </p>

                <p className="mb-6">
                  Minha experiência com
                  {' '}<span className="text-purple-light font-semibold">sistemas legados</span> me ensinou que cada melhoria precisa ser estratégica. Por isso, aplico
                  {' '}<span className="text-purple-light font-semibold">metodologias ágeis</span> e foco em
                  {' '}<span className="text-purple-light font-semibold">qualidade</span> seja refatorando, criando do zero ou automatizando processos com
                  {' '}<span className="text-purple-light font-semibold">IA</span> para apoiar a
                  {' '}<span className="text-purple-light font-semibold">governança digital</span>.
                </p>

                <p className="mb-6">
                  Já desenvolvi sistemas de
                  {' '}<span className="text-purple-light font-semibold">reconhecimento facial</span> para
                  {' '}<span className="text-purple-light font-semibold">controle de acesso governamental</span>, plataformas de
                  {' '}<span className="text-purple-light font-semibold">gestão de RH</span> e soluções de governança com
                  {' '}<span className="text-purple-light font-semibold">dashboards</span>,
                  {' '}<span className="text-purple-light font-semibold">relatórios automatizados</span> e comunicação por
                  {' '}<span className="text-purple-light font-semibold">e-mail</span>.
                </p>

                <p>
                  Também gosto de trabalhar com <span className="text-purple-light font-semibold">Docker</span> e
                  {' '}<span className="text-purple-light font-semibold">containerização</span>, buscando arquiteturas que simplifiquem
                  {' '}<span className="text-purple-light font-semibold">deploy</span> e
                  {' '}<span className="text-purple-light font-semibold">manutenção</span>. Meu foco é sempre em
                  {' '}<span className="text-purple-light font-semibold">sistemas de gestão pública</span>,
                  {' '}<span className="text-purple-light font-semibold">controle de acesso</span> e
                  {' '}<span className="text-purple-light font-semibold">automação de processos</span>, acreditando que um bom software deve ser funcional, intuitivo e acompanhado de
                  {' '}<span className="text-purple-light font-semibold">interfaces modernas e responsivas</span> que complementem um
                  {' '}<span className="text-purple-light font-semibold">backend robusto</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}