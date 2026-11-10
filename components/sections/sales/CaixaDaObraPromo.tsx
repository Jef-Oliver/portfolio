'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle, Layers, Calendar, Users, Building2, Monitor, FileText } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const FEATURES = [
  { icon: Layers, label: 'Gastos organizados por etapa e categoria de obra' },
  { icon: Calendar, label: 'Contas a pagar com controle de vencimentos' },
  { icon: Users, label: 'Múltiplos perfis: Dono, Administrador e Equipe' },
  { icon: Building2, label: 'Dados segmentados por terreno e unidade' },
  { icon: Monitor, label: 'Funciona no celular e no computador' },
  { icon: FileText, label: 'Histórico financeiro completo da obra' },
];

const DEMO_PROFILES = [
  { label: 'Dono', desc: 'Visão completa e controle total' },
  { label: 'Administrador', desc: 'Lança gastos e gerencia equipe' },
  { label: 'Equipe', desc: 'Registra despesas do dia a dia' },
];

export default function CaixaDaObraPromo() {
  const whatsappMsg = encodeURIComponent(
    'Olá Jeferson! Vi o Caixa da Obra no seu portfólio e tenho interesse em um sistema de gestão financeira de obras para a minha construtora. Podemos conversar?'
  );

  return (
    <section id="caixa-da-obra" className="section-padding bg-[#090d16] relative overflow-hidden border-t border-white/5">
      {/* Background accent */}
      <div className="absolute inset-0 bg-grid-neon opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/8 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-4 justify-center text-blue-400 border-blue-500/30 bg-blue-500/10">
            Sistema Entregue · Gestão de Obras
          </div>
          <h2 className="heading-lg text-white mb-4">
            Conheça o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Caixa da Obra
            </span>{' '}
            em ação
          </h2>
          <p className="text-gray-text max-w-2xl mx-auto text-lg">
            Cada centavo da obra registrado, categorizado e acessível para toda a equipe — com controle por etapa, unidade e terreno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Preview card — layout invertido (imagem à esquerda no desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-blue-500/8 blur-3xl rounded-3xl" />

            <div className="relative card-dark border border-blue-500/25 rounded-2xl overflow-hidden shadow-2xl">
              {/* Fake browser chrome */}
              <div className="bg-dark-surface border-b border-dark-border px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-blue-400/60" />
                </div>
                <div className="flex-1 bg-black/40 rounded-md px-3 py-1 text-xs font-mono text-gray-muted text-center">
                  caixa-da-obra-demo.netlify.app
                </div>
              </div>

              {/* Simulated dashboard UI */}
              <div className="relative bg-[#0f172a] aspect-video overflow-hidden">
                <div className="absolute inset-0 flex">
                  {/* Fake sidebar */}
                  <div className="w-[25%] bg-[#090d16] h-full p-3 flex flex-col gap-1.5 border-r border-white/5">
                    <div className="text-[9px] font-bold text-blue-400 mb-1 flex items-center gap-1">
                      💰 Caixa da Obra
                    </div>
                    {['📊 Dashboard', '📋 Etapas', '💸 Contas', '👥 Equipe', '🏗️ Obras'].map((item, i) => (
                      <div key={i} className={`text-[7px] px-2 py-1 rounded text-white/60 ${i === 0 ? 'bg-blue-500/20 text-blue-300 font-bold' : ''}`}>
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Fake main content */}
                  <div className="flex-1 p-3 bg-[#f8fafc] flex flex-col gap-2">
                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-1">
                      {[
                        { label: 'Total Gasto', val: 'R$ 284k', color: 'text-blue-700' },
                        { label: 'Etapas', val: '6 ativas', color: 'text-emerald-700' },
                        { label: 'A Vencer', val: '3 contas', color: 'text-amber-700' },
                        { label: 'Equipe', val: '5 pessoas', color: 'text-indigo-700' },
                      ].map((k, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded p-1 shadow-sm">
                          <div className="text-[6px] text-slate-500 font-semibold">{k.label}</div>
                          <div className={`text-[9px] font-extrabold ${k.color}`}>{k.val}</div>
                        </div>
                      ))}
                    </div>

                    {/* Content grid */}
                    <div className="grid grid-cols-2 gap-1.5 flex-1">
                      {/* Etapas */}
                      <div className="bg-white border border-slate-200 rounded p-1.5 flex flex-col gap-1">
                        <div className="text-[7px] font-bold text-slate-800">Gastos por Etapa</div>
                        {[
                          { etapa: 'Fundação', pct: 100, color: 'bg-blue-500' },
                          { etapa: 'Estrutura', pct: 65, color: 'bg-indigo-400' },
                          { etapa: 'Acabamento', pct: 20, color: 'bg-sky-400' },
                        ].map((e, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <div className="text-[6px] text-slate-600 w-14 truncate">{e.etapa}</div>
                            <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                              <div className={`${e.color} h-1.5 rounded-full`} style={{ width: `${e.pct}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Lançamentos */}
                      <div className="bg-white border border-slate-200 rounded p-1.5 flex flex-col gap-0.5">
                        <div className="text-[7px] font-bold text-slate-800">Últimos Lançamentos</div>
                        {[
                          { desc: 'Cimento (50 sacos)', val: 'R$ 1.800' },
                          { desc: 'Mão de Obra', val: 'R$ 3.200' },
                          { desc: 'Vergalhão', val: 'R$ 940' },
                        ].map((l, i) => (
                          <div key={i} className="flex justify-between text-[6px] text-slate-600 border-b border-slate-100 pb-0.5">
                            <span className="truncate max-w-[60%]">{l.desc}</span>
                            <span className="font-bold text-blue-700">{l.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlay with CTA */}
                <div className="absolute inset-0 bg-black/45 flex items-center justify-center backdrop-blur-[1px]">
                  <a
                    href="https://caixa-da-obra-demo.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform text-white">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <span className="text-white font-semibold text-sm bg-black/80 px-4 py-1.5 rounded-full border border-white/10">
                      Abrir Caixa da Obra
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Features & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              Solução para Construtoras e Incorporadoras
            </div>

            <h3 className="heading-md text-white mb-4">
              Cada centavo da sua obra, registrado e organizado com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Caixa da Obra
              </span>
            </h3>

            <p className="text-gray-text mb-6 leading-relaxed">
              Para construtoras e incorporadoras que precisam controlar gastos por etapa, unidade e terreno —
              com múltiplos perfis de acesso para toda a equipe, sem perder nenhum lançamento.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {FEATURES.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <span className="text-gray-text text-sm">{label}</span>
                </motion.div>
              ))}
            </div>

            {/* Demo profiles block */}
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 mb-5">
              <p className="text-xs font-semibold text-blue-400 mb-3">
                🔑 Contas de demonstração — senha de todas: <span className="font-mono bg-blue-500/20 px-2 py-0.5 rounded">prumo123</span>
              </p>
              <div className="grid grid-cols-3 gap-2">
                {DEMO_PROFILES.map((p) => (
                  <div key={p.label} className="bg-black/30 rounded-lg p-2 text-center border border-white/5">
                    <div className="text-xs font-bold text-white mb-0.5">{p.label}</div>
                    <div className="text-[10px] text-gray-muted leading-tight">{p.desc}</div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-muted mt-2">
                Toque no nome do perfil na tela de login para preencher automaticamente.
              </p>
            </div>

            {/* Developers / Parceria */}
            <div className="mb-6 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.3)] flex-shrink-0 bg-neutral-800">
                  <Image
                    src="/projects-images/walison.jpeg"
                    alt="Walison Fernandes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-blue-400 font-semibold uppercase tracking-wider block">
                    Desenvolvedores do Projeto
                  </span>
                  <p className="text-sm text-white font-medium mt-0.5">
                    Walison Fernandes <span className="text-gray-400 text-xs font-normal">(Dev Fullstack)</span> &amp; Jeferson Oliveira
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center text-[11px] px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono w-fit">
                Projeto em Parceria
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="https://caixa-da-obra-demo.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline-neon flex items-center gap-2 justify-center py-3 border-blue-500/40 text-blue-400 hover:bg-blue-500/10"
              >
                <ExternalLink className="w-4 h-4" />
                Explorar Caixa da Obra
              </motion.a>

              <motion.a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-neon flex items-center gap-2 justify-center py-3"
              >
                <MessageCircle className="w-4 h-4" />
                Quero para minha construtora
              </motion.a>
            </div>

            <p className="text-gray-muted text-xs mt-4 font-mono">
              ✓ Dados fictícios. Acesse com qualquer perfil e explore à vontade.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

