'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const STATS = [
  { value: '4+', label: 'Anos de experiência', sub: 'em desenvolvimento de sistemas' },
  { value: '+7', label: 'Sistemas entregues', sub: 'para empresas e clientes reais' },
  { value: '95%', label: 'Redução de erros', sub: 'em processos automatizados' },
  { value: '60%', label: 'Ganho de performance', sub: 'em sistemas otimizados' },
];

const REASONS = [
  {
    emoji: '🎯',
    title: 'Sistemas que resolvem de verdade',
    desc: 'Não entrego template. Estudo seu negócio, entendo o problema e construo uma solução que funciona na prática.',
  },
  {
    emoji: '🔐',
    title: 'Código seguro e auditável',
    desc: 'Todo sistema entregue com documentação, histórico de alterações e segurança de dados conforme a LGPD.',
  },
  {
    emoji: '⚡',
    title: 'Entrega rápida, suporte real',
    desc: 'Prazo cumprido e suporte pós-entrega. Você não fica sozinho depois que o sistema vai pro ar.',
  },
  {
    emoji: '📈',
    title: 'Escalável desde o início',
    desc: 'Construo pensando no futuro. O sistema cresce junto com o seu negócio sem precisar refazer tudo do zero.',
  },
];

export default function SocialProof() {
  const whatsappMsg = encodeURIComponent(
    'Olá! Vim pelo site e quero conversar sobre desenvolver um sistema para o meu negócio.'
  );

  return (
    <>
      {/* Stats section */}
      <section className="py-16 bg-dark-surface border-y border-dark-border relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-neon opacity-40" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-neon font-grotesk glow-neon-text mb-1">
                  {stat.value}
                </div>
                <div className="text-white text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-muted text-xs">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why hire me section */}
      <section id="sobre" className="section-padding bg-black relative">
        <div className="absolute inset-0 bg-grid-neon opacity-25" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="section-tag mb-4 justify-center">Por que me contratar</div>
            <h2 className="heading-lg text-white mb-4">
              Sistemas que funcionam,{' '}
              <span className="text-neon">entregues de verdade</span>
            </h2>
            <p className="text-gray-text max-w-2xl mx-auto text-lg">
              4 anos transformando regras de negócio complexas em software confiável, com foco em segurança e performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: 'rgba(0, 255, 65, 0.3)' }}
                className="card-dark p-6 flex gap-4"
              >
                <div className="text-2xl flex-shrink-0">{r.emoji}</div>
                <div>
                  <h3 className="text-white font-bold font-grotesk mb-2">{r.title}</h3>
                  <p className="text-gray-text text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-dark border border-neon/20 p-8 rounded-2xl max-w-3xl mx-auto text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-neon/10 flex items-center justify-center mx-auto mb-4 text-2xl">
              🏛️
            </div>
            <h3 className="text-white font-bold font-grotesk text-xl mb-2">
              Governo do Estado do Tocantins
            </h3>
            <p className="text-gray-text mb-4">
              Analista de Sistemas | Desenvolvedor Backend · Jun/2023 – Presente
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {['Python', 'Django', 'Angular', 'Java Spring Boot', 'PostgreSQL', 'Docker', 'GCP'].map(tech => (
                <span key={tech} className="badge-neon">{tech}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              {['95% redução em erros', '60% melhoria em performance', '99.5% uptime'].map(m => (
                <span key={m} className="flex items-center gap-1.5 text-neon">
                  <span className="text-neon">✓</span> {m}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
