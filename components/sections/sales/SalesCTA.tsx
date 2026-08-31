'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Github, Linkedin, ArrowUpRight, Phone } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const CONTACT_CARDS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+55 (63) 99267-8596',
    href: `https://wa.me/${CONTACT.whatsapp}?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20os%20sistemas.`,
    highlight: true,
    desc: 'Resposta rápida',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    highlight: false,
    desc: 'Para propostas formais',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/jef-oliver',
    href: CONTACT.linkedin,
    highlight: false,
    desc: 'Perfil profissional',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '/Jef-Oliver',
    href: CONTACT.github,
    highlight: false,
    desc: 'Código público',
  },
];

export default function SalesCTA() {
  return (
    <section id="contato" className="section-padding bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-neon opacity-30" />
      <div className="absolute inset-0 bg-radial-neon opacity-50" />

      {/* Neon glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-6 justify-center">Pronto para começar?</div>

          <h2 className="heading-xl text-white mb-6">
            Vamos construir o sistema{' '}
            <br className="hidden sm:block" />
            <span className="text-neon glow-neon-text">que seu negócio precisa</span>
          </h2>

          <p className="text-gray-text text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Me conta qual é o seu problema. Em uma conversa rápida no WhatsApp
            já consigo te dizer se consigo resolver e qual seria o investimento.
          </p>

          <motion.a
            href={`https://wa.me/${CONTACT.whatsapp}?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20os%20sistemas%20disponíveis.%20Pode%20me%20ajudar?`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 btn-neon text-lg py-5 px-10 animate-pulse-neon"
          >
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp agora
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>

          <p className="text-gray-muted text-sm mt-4 font-mono">
            Geralmente respondo em menos de 1 hora
          </p>
        </motion.div>

        {/* Divider */}
        <div className="divider-neon mb-16" />

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-center text-gray-muted text-sm mb-8 font-mono">
            Ou se preferir, me encontre em:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONTACT_CARDS.map(({ icon: Icon, label, value, href, highlight, desc }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group card-dark p-5 rounded-xl flex flex-col gap-3 transition-all ${
                  highlight
                    ? 'border-neon/30 bg-neon/5'
                    : ''
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  highlight ? 'bg-neon text-black' : 'bg-dark-surface border border-dark-border text-neon'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-0.5 group-hover:text-neon transition-colors">
                    {label}
                  </div>
                  <div className="text-gray-muted text-xs font-mono truncate">{value}</div>
                  <div className="text-gray-muted text-xs mt-1">{desc}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-muted group-hover:text-neon transition-colors mt-auto ml-auto" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
