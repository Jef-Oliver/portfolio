'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const PRODUCTS = [
  {
    id: 'gestao-imobiliaria',
    title: 'Sistema de Gestão Imobiliária',
    category: 'Gestão Imobiliária',
    description:
      'Controle completo de contratos, aluguéis, manutenções e relatórios financeiros automatizados. Chega de planilhas, tudo em um só lugar, com histórico auditável e alertas automáticos.',
    video: '/media/gestao-imobiliaria.mp4',
    technologies: ['Python', 'Django', 'PostgreSQL', 'APIs REST'],
    status: 'available' as const,
    ctaText: 'Quero este sistema',
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7359332775478411266/',
  },
  {
    id: 'inventario',
    title: 'Sistema de Inventário e Espólio',
    category: 'Prestação de Contas',
    description:
      'O judiciário exige padrão mercantil (Art. 551 do CPC). Planilhas são rejeitadas. Separa receitas por imóvel, vincula NF/Recibo em cada gasto e gera relatório oficial com hash SHA-256 anti-fraude.',
    video: '/media/inventario.mp4',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'SHA-256'],
    status: 'sold' as const,
    ctaText: 'Quero algo similar',
  },
  {
    id: 'controle-ponto',
    title: 'Sistema de Controle de Ponto',
    category: 'RH & Automação',
    description:
      'Controle de ponto com reconhecimento facial direto no navegador, sem hardware extra, com conformidade total com a LGPD. Cálculos de RH automatizados que antes levavam horas agora rodam em segundos.',
    video: '/media/ponto.mp4',
    technologies: ['Python', 'Django', 'OpenCV', 'PostgreSQL', 'Celery'],
    status: 'available' as const,
    ctaText: 'Quero este sistema',
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7448027457657393152/',
  },
];

export default function ProductsGrid() {
  return (
    <section id="produtos" className="section-padding bg-black relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-neon opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-4 justify-center">Sistemas disponíveis</div>
          <h2 className="heading-lg text-white mb-4">
            Sistemas que{' '}
            <span className="text-neon">já transformaram</span>{' '}
            negócios reais
          </h2>
          <p className="text-gray-text max-w-2xl mx-auto text-lg">
            Cada sistema foi desenvolvido para resolver problemas específicos. Passe o mouse para ver em ação.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} {...product} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-gray-muted text-sm font-mono"
        >
          <span className="text-neon">✓</span> Todos os sistemas são desenvolvidos com código limpo, documentação e suporte pós-entrega.
        </motion.div>
      </div>
    </section>
  );
}
