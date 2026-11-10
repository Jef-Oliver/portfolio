'use client';

import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle, Clock, DollarSign, Calculator, WifiOff, CheckSquare, BarChart2, HardHat } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const FEATURES = [
  { icon: Clock, label: 'Presença diária da equipe registrada no celular' },
  { icon: DollarSign, label: 'Controle de vales por trabalhador' },
  { icon: Calculator, label: 'Cálculo automático do pagamento da mão de obra' },
  { icon: WifiOff, label: 'Funciona offline, sem precisar de internet' },
  { icon: CheckSquare, label: 'Marcação de meio-dia e faltas' },
  { icon: BarChart2, label: 'Dashboard da equipe em tempo real' },
];

export default function PrumoCertoPromo() {
  const whatsappMsg = encodeURIComponent(
    'Olá Jeferson! Vi o PrumoCerto no seu portfólio e tenho interesse em um sistema de controle de mão de obra para a minha obra/empresa. Podemos conversar?'
  );

  return (
    <section id="prumo-certo" className="section-padding bg-black relative overflow-hidden border-t border-white/5">
      {/* Background accent */}
      <div className="absolute inset-0 bg-grid-neon opacity-25" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/8 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/5 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-4 justify-center" style={{ color: '#EF6A12', borderColor: 'rgba(239,106,18,0.3)', backgroundColor: 'rgba(239,106,18,0.1)' }}>
            Sistema Entregue · Mão de Obra
          </div>
          <h2 className="heading-lg text-white mb-4">
            Conheça o <span style={{ color: '#EF6A12' }}>PrumoCerto</span> em ação
          </h2>
          <p className="text-gray-text max-w-2xl mx-auto text-lg">
            Controle de presença, vales e pagamento da mão de obra — funciona offline, direto do canteiro de obras.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Preview card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl blur-3xl" style={{ backgroundColor: 'rgba(239,106,18,0.07)' }} />

            <div className="relative card-dark rounded-2xl overflow-hidden" style={{ borderColor: 'rgba(239,106,18,0.25)', borderWidth: 1, borderStyle: 'solid' }}>
              {/* Fake browser chrome */}
              <div className="bg-dark-surface border-b border-dark-border px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(239,106,18,0.6)' }} />
                </div>
                <div className="flex-1 bg-black/40 rounded-md px-3 py-1 text-xs font-mono text-gray-muted text-center">
                  prumocerto-demo.netlify.app
                </div>
              </div>

              {/* Simulated dashboard UI */}
              <div className="relative bg-[#1a1a1a] aspect-video overflow-hidden">
                <div className="absolute inset-0 flex">
                  {/* Fake sidebar */}
                  <div className="w-[25%] bg-[#111] h-full p-3 flex flex-col gap-2 border-r border-white/5">
                    <div className="text-[8px] font-bold mb-2 flex items-center gap-1" style={{ color: '#EF6A12' }}>
                      👷 PrumoCerto
                    </div>
                    {['📋 Presença', '💵 Vales', '💰 Pagamentos', '👥 Equipe', '⚙️ Config'].map((item, i) => (
                      <div key={i} className={`text-[7px] px-2 py-1 rounded text-white/60 ${i === 0 ? 'font-bold text-white' : ''}`} style={i === 0 ? { backgroundColor: 'rgba(239,106,18,0.2)', color: '#EF6A12' } : {}}>
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Fake main content */}
                  <div className="flex-1 p-3 flex flex-col gap-2 bg-[#1c1c1c]">
                    {/* Stats cards */}
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        { label: 'Vieram', val: '8', color: '#4ade80' },
                        { label: 'Meio-dia', val: '2', color: '#facc15' },
                        { label: 'Faltas', val: '1', color: '#f87171' },
                        { label: 'Sem marcar', val: '3', color: '#94a3b8' },
                      ].map((s, i) => (
                        <div key={i} className="bg-[#252525] border border-white/10 rounded p-1.5 text-center">
                          <div className="text-[10px] font-extrabold" style={{ color: s.color }}>{s.val}</div>
                          <div className="text-[6px] text-white/40 mt-0.5">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Worker list */}
                    <div className="flex flex-col gap-1 mt-1">
                      <div className="text-[6px] text-white/40 font-semibold mb-0.5">EQUIPE DE HOJE</div>
                      {[
                        { name: 'Carlos Pereira', status: 'Presente', color: '#4ade80' },
                        { name: 'João Marcos', status: 'Meio-dia', color: '#facc15' },
                        { name: 'Antônio Lima', status: 'Falta', color: '#f87171' },
                        { name: 'Pedro Costa', status: 'Presente', color: '#4ade80' },
                      ].map((w, i) => (
                        <div key={i} className="flex items-center justify-between bg-[#252525] rounded px-2 py-1">
                          <span className="text-[7px] text-white/70">{w.name}</span>
                          <span className="text-[6px] font-bold" style={{ color: w.color }}>{w.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Overlay with CTA */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-[1px]">
                  <a
                    href="https://prumocerto-demo.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform text-white" style={{ background: 'linear-gradient(135deg, #EF6A12, #d4580f)' }}>
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <span className="text-white font-semibold text-sm bg-black/80 px-4 py-1.5 rounded-full border border-white/10">
                      Explorar PrumoCerto
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Features + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: 'rgba(239,106,18,0.1)', border: '1px solid rgba(239,106,18,0.3)', color: '#EF6A12' }}>
              <HardHat className="w-3.5 h-3.5" />
              Sistema para Construtoras, Obras e Empreiteiras
            </div>

            <h3 className="heading-md text-white mb-4">
              Controle total da mão de obra da sua obra com o{' '}
              <span style={{ color: '#EF6A12' }}>PrumoCerto</span>
            </h3>

            <p className="text-gray-text mb-8 leading-relaxed">
              Para construtores, empreiteiros e donos de obra que querem saber exatamente quem trabalhou,
              quantas horas e quanto deve receber — sem papel, sem planilha, sem complicação.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {FEATURES.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(239,106,18,0.1)', border: '1px solid rgba(239,106,18,0.2)' }}>
                    <Icon className="w-3.5 h-3.5" style={{ color: '#EF6A12' }} />
                  </div>
                  <span className="text-gray-text text-sm">{label}</span>
                </motion.div>
              ))}
            </div>

            {/* Developers / Parceria */}
            <div className="mb-8 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono text-orange-400 font-semibold uppercase tracking-wider block">
                  Desenvolvedores do Projeto
                </span>
                <p className="text-sm text-white font-medium mt-0.5">
                  Walison Fernandes <span className="text-gray-400 text-xs font-normal">(Dev Fullstack)</span> &amp; Jeferson Oliveira
                </p>
              </div>
              <span className="inline-flex items-center text-[11px] px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 font-mono w-fit">
                Projeto em Parceria
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="https://prumocerto-demo.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline-neon flex items-center gap-2 justify-center py-3"
                style={{ borderColor: 'rgba(239,106,18,0.4)', color: '#EF6A12' }}
              >
                <ExternalLink className="w-4 h-4" />
                Explorar PrumoCerto
              </motion.a>

              <motion.a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-neon flex items-center gap-2 justify-center py-3"
                style={{ background: 'linear-gradient(135deg, #EF6A12, #d4580f)', borderColor: 'transparent' }}
              >
                <MessageCircle className="w-4 h-4" />
                Quero para minha obra
              </motion.a>
            </div>

            <p className="text-gray-muted text-xs mt-4 font-mono">
              ✓ Sem login necessário. Acesse e comece a explorar agora.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

