'use client';

import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { CONTACT, SKILLS_BY_CATEGORY, EXPERIENCE, SPECIALTIES, LEARNING } from '@/lib/constants';
import MotionContainer from '@/components/motion/MotionContainer';
import MotionItem, { MotionReveal } from '@/components/motion/MotionItem';
import { projects } from '@/data/projects';

// ── Hero ──────────────────────────────────────────────
function PortfolioHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid-neon opacity-30" />
      <div className="absolute inset-0 bg-radial-neon opacity-50" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="section-tag mb-6 justify-center">Para recrutadores</div>
          
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-br from-neon to-neon/20 shadow-[0_0_30px_rgba(0,255,65,0.3)]">
              <img src="/projects-images/profile.jpg" alt="Jeferson Oliveira" className="w-full h-full rounded-full object-cover bg-black" />
            </div>
          </div>

          <h1 className="heading-xl text-white mb-6">
            Jeferson Oliveira
            <br />
            <span className="text-neon glow-neon-text">Full Stack Developer</span>
          </h1>
          <p className="text-gray-text text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            4 anos transformando regras de negócio complexas em software confiável, auditável e
            escalável. Especialização em Backend (Python/Django/FastAPI/Java Spring Boot).
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={CONTACT.resumePath} download className="btn-neon py-3 px-6">
              <Download className="w-4 h-4" /> Baixar Currículo (PDF)
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline-neon py-3 px-6">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="btn-outline-neon py-3 px-6">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Skills ─────────────────────────────────────────────
function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-dark-surface border-y border-dark-border">
      <div className="container mx-auto px-6">
        <MotionReveal className="text-center mb-14">
          <div className="section-tag mb-4 justify-center">Tecnologias</div>
          <h2 className="heading-lg text-white mb-4">Skills & Tecnologias</h2>
          <p className="text-gray-text max-w-xl mx-auto">
            Organizado por categoria, com foco claro em backend e capacidade full-stack quando necessário.
          </p>
        </MotionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(Object.entries(SKILLS_BY_CATEGORY) as Array<[string, typeof SKILLS_BY_CATEGORY[keyof typeof SKILLS_BY_CATEGORY]]>).map(([, category], catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="card-dark p-6 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-neon" />
                  </div>
                  <h3 className="text-white font-bold font-grotesk">{category.title}</h3>
                </div>
                <MotionContainer className="flex flex-wrap gap-2" staggerChildren={0.06}>
                  {category.skills.map((skill) => (
                    <MotionItem key={skill} direction="left">
                      <span className="badge-neon">{skill}</span>
                    </MotionItem>
                  ))}
                </MotionContainer>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Experience ─────────────────────────────────────────
function ExperienceSection() {
  return (
    <section id="experiencia" className="section-padding bg-black">
      <div className="container mx-auto px-6">
        <MotionReveal className="text-center mb-14">
          <div className="section-tag mb-4 justify-center">Trajetória</div>
          <h2 className="heading-lg text-white mb-4">Experiência Profissional</h2>
        </MotionReveal>

        <div className="max-w-3xl mx-auto space-y-6">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-dark p-6 rounded-2xl border-l-2 border-neon/40 pl-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-white font-bold text-lg font-grotesk">{exp.position}</h3>
                  <p className="text-neon font-medium">{exp.company}</p>
                </div>
                <span className="badge-neon text-xs">{exp.period}</span>
              </div>
              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((r) => (
                  <li key={r} className="text-gray-text text-sm flex items-start gap-2">
                    <span className="text-neon mt-0.5 flex-shrink-0">▸</span> {r}
                  </li>
                ))}
              </ul>
              {exp.metrics && (
                <div className="flex flex-wrap gap-3 pt-4 border-t border-dark-border">
                  {exp.metrics.map((m) => (
                    <span key={m} className="text-xs text-neon font-mono flex items-center gap-1">
                      <span>✓</span> {m}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.technologies.map((t) => (
                  <span key={t} className="badge-neon text-xs">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Projects ───────────────────────────────────────────
function ProjectsSection() {
  const featured = projects.filter(p => p.featured);

  return (
    <section id="projetos" className="section-padding bg-dark-surface border-y border-dark-border">
      <div className="container mx-auto px-6">
        <MotionReveal className="text-center mb-14">
          <div className="section-tag mb-4 justify-center">Trabalhos realizados</div>
          <h2 className="heading-lg text-white mb-4">Projetos em Destaque</h2>
          <p className="text-gray-text max-w-xl mx-auto">
            Sistemas desenvolvidos para clientes reais e para o setor público.
          </p>
        </MotionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="card-dark p-5 rounded-2xl"
            >
              {project.images && project.images[0] && (
                <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-black">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              )}
              <span className="badge-neon text-xs mb-3 inline-block">{project.category}</span>
              <h3 className="text-white font-bold font-grotesk mb-2 leading-tight text-sm line-clamp-2">
                {project.title}
              </h3>
              <p className="text-gray-muted text-xs mb-3 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.technologies.slice(0, 3).map(t => (
                  <span key={t} className="text-xs text-gray-muted font-mono bg-dark-surface px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
              {project.linkedinUrl && (
                <a
                  href={project.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-neon hover:underline"
                >
                  <ExternalLink className="w-3 h-3" /> Ver no LinkedIn
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Learning ───────────────────────────────────────────
function LearningSection() {
  return (
    <section id="aprendendo" className="section-padding bg-black">
      <div className="container mx-auto px-6">
        <MotionReveal className="text-center mb-14">
          <div className="section-tag mb-4 justify-center">Em constante evolução</div>
          <h2 className="heading-lg text-white mb-4">Estudando Agora</h2>
        </MotionReveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {LEARNING.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-dark p-6 rounded-2xl"
            >
              <h3 className="text-neon font-bold font-grotesk mb-3">{item.title}</h3>
              <p className="text-gray-text text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact ─────────────────────────────────────────────
function ContactSection() {
  return (
    <section id="contato" className="section-padding bg-dark-surface border-t border-dark-border">
      <div className="container mx-auto px-6 text-center">
        <MotionReveal>
          <div className="section-tag mb-6 justify-center">Entre em contato</div>
          <h2 className="heading-lg text-white mb-4">Vamos conversar?</h2>
          <p className="text-gray-text mb-10 max-w-lg mx-auto">
            Aberto a oportunidades remotas, presenciais ou freelas. Me manda uma mensagem!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`mailto:${CONTACT.email}`} className="btn-neon py-3 px-6">
              <Mail className="w-4 h-4" /> {CONTACT.email}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-neon py-3 px-6"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href={CONTACT.resumePath} download className="btn-outline-neon py-3 px-6">
              <Download className="w-4 h-4" /> Currículo PDF
            </a>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

// ── Main export ────────────────────────────────────────
export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <LearningSection />
      <ContactSection />
    </>
  );
}
