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
                <p className="text-xl text-light mb-6">
                  Backend Developer apaixonado por resolver problemas reais com código.
                </p>
                
                <p className="mb-6">
                  Nos últimos anos, atuei modernizando <span className="text-purple-light font-semibold">sistemas governamentais e corporativos</span> — 
                  principalmente de <span className="text-purple-light font-semibold">gestão de ponto, controle de acesso e RH</span> — 
                  unindo tecnologia, automação e visão de produto para entregar soluções 
                  que fazem diferença no dia a dia.
                </p>
                
                <p className="mb-6">
                  Trabalho com <span className="text-purple-light font-semibold">Python (Django e Flask)</span>, 
                  ASP Clássico, <span className="text-purple-light font-semibold">Java (Spring Boot)</span> e 
                  bancos de dados como <span className="text-purple-light font-semibold">PostgreSQL</span> e 
                  SQL Server. Gosto de backend limpo, APIs REST bem pensadas e soluções fáceis de manter.
                </p>
                
                <p className="mb-6">
                  Tenho experiência com <span className="text-purple-light font-semibold">sistemas legados governamentais</span>, onde cada melhoria precisa ser estratégica. 
                  Uso metodologias ágeis e foco em qualidade — seja refatorando, construindo do zero ou automatizando tarefas 
                  com IA para <span className="text-purple-light font-semibold">projetos de governança digital</span>.
                </p>
                
                <p className="mb-6">
                  Atualmente, exploro <span className="text-purple-light font-semibold">IA e automação</span> para 
                  criar sistemas mais inteligentes e menos burocráticos. Desenvolvi <span className="text-purple-light font-semibold">reconhecimento facial para 
                  controle de acesso governamental</span>, <span className="text-purple-light font-semibold">sistemas de gestão de recursos humanos</span> e 
                  <span className="text-purple-light font-semibold"> soluções de governança digital</span> com dashboards, relatórios automatizados e comunicação 
                  por e-mail.
                </p>
                
                <p>
                  Curto <span className="text-purple-light font-semibold">Docker, containerização</span> e 
                  arquiteturas que simplifiquem deploy e manutenção. Especializo-me em <span className="text-purple-light font-semibold">sistemas de gestão pública</span>, 
                  <span className="text-purple-light font-semibold">controle de acesso governamental</span> e <span className="text-purple-light font-semibold">automação de processos públicos</span>. 
                  Acredito que software bom é funcional e intuitivo, por isso busco interfaces modernas e responsivas que complementem um backend robusto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}