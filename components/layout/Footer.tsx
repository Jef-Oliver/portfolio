'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Zap, MessageCircle } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark-border bg-black">
      <div className="absolute inset-0 bg-grid-neon opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-neon flex items-center justify-center">
                <Zap className="w-4 h-4 text-black" />
              </div>
              <span className="text-xl font-bold font-grotesk">
                Jef<span className="text-neon">Oliver</span>
              </span>
            </div>
            <p className="text-gray-text text-sm leading-relaxed max-w-xs">
              Transformo problemas reais em sistemas que funcionam. Soluções sob medida para o seu negócio.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold font-grotesk mb-4">Navegação</h3>
            <ul className="space-y-2">
              {[
                { label: 'Produtos', href: '/' },
                { label: 'Portfólio', href: '/portfolio' },
                { label: 'Contato', href: '#contato' },
                { label: 'Currículo', href: CONTACT.resumePath },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-text hover:text-neon text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold font-grotesk mb-4">Conecte-se</h3>
            <div className="flex flex-col gap-3">
              {[
                { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/${CONTACT.whatsapp}` },
                { icon: Linkedin, label: 'LinkedIn', href: CONTACT.linkedin },
                { icon: Github, label: 'GitHub', href: CONTACT.github },
                { icon: Mail, label: 'E-mail', href: `mailto:${CONTACT.email}` },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-text hover:text-neon text-sm transition-colors group"
                >
                  <Icon className="w-4 h-4 group-hover:text-neon" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-neon mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-muted text-xs font-mono">
            © {year} Jef Oliver. Todos os direitos reservados.
          </p>
          <p className="text-gray-muted text-xs font-mono">
            Feito com <span className="text-neon">{'<'}/{'>'}</span> e café
          </p>
        </div>
      </div>
    </footer>
  );
}