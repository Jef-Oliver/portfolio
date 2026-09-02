'use client';

import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle, Building2, Calculator, Users, TrendingUp, Calendar, FileText } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const FEATURES = [
  { icon: Building2, label: 'Gestão e catálogo de imóveis com filtros dinâmicos' },
  { icon: Users, label: 'Pipeline CRM de leads (Kanban com Lead Scoring)' },
  { icon: Calculator, label: 'Simulador de financiamento multibancos (SAC/Price)' },
  { icon: Calendar, label: 'Agenda de visitas com integração WhatsApp' },
  { icon: FileText, label: 'Controle de locações, vistorias e repasses' },
  { icon: TrendingUp, label: 'Inteligência de mercado (M² por bairro e Cap Rate)' },
];

export default function ImobiliariaPromo() {
  const whatsappMsg = encodeURIComponent(
    'Olá Jeferson! Vi o protótipo do ImobPRO no seu portfólio e gostaria de um sistema sob medida para minha imobiliária/corretora. Podemos conversar?'
  );

  return (
    <section id="imobiliaria-pro" className="section-padding bg-[#090d16] relative overflow-hidden border-t border-white/5">
      {/* Background accent */}
      <div className="absolute inset-0 bg-grid-neon opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-4 justify-center text-cyan-400 border-cyan-500/30 bg-cyan-500/10">
            Protótipo Imobiliário Interativo
          </div>
          <h2 className="heading-lg text-white mb-4">
            Conheça o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ImobPRO Enterprise</span>
          </h2>
          <p className="text-gray-text max-w-2xl mx-auto text-lg">
            Ecossistema completo de gestão imobiliária, funil de vendas (CRM com SLA), simulador financeiro e locações.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Interactive Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-3xl" />

            <div className="relative card-dark border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl">
              {/* Fake browser chrome */}
              <div className="bg-dark-surface border-b border-dark-border px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-cyan-400/60" />
                </div>
                <div className="flex-1 bg-black/40 rounded-md px-3 py-1 text-xs font-mono text-gray-muted text-center">
                  imobpro.app/dashboard-enterprise
                </div>
              </div>

              {/* Screenshot preview representation */}
              <div className="relative bg-[#0f172a] aspect-video overflow-hidden">
                <div className="absolute inset-0 flex">
                  {/* Fake sidebar */}
                  <div className="w-[24%] bg-[#090d16] h-full p-3 flex flex-col gap-1.5 border-r border-white/5">
                    <div className="text-[9px] font-bold text-cyan-400 mb-1 flex items-center gap-1">
                      🏢 ImobPRO
                    </div>
                    {['📊 Dashboard', '🏠 Imóveis', '👥 CRM Leads', '📅 Visitas', '🧮 Simulador', '📑 Locações'].map((item, i) => (
                      <div key={i} className={`text-[7px] px-2 py-1 rounded text-white/60 ${i === 0 ? 'bg-cyan-500/20 text-cyan-300 font-bold' : ''}`}>
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Fake main content */}
                  <div className="flex-1 p-3 bg-[#f8fafc] flex flex-col gap-2">
                    <div className="grid grid-cols-4 gap-1">
                      {[
                        { label: 'VGV Carteira', val: 'R$ 48.6M', color: 'text-cyan-700' },
                        { label: 'SLA Resposta', val: '4 min', color: 'text-emerald-700' },
                        { label: 'Vacância', val: '4.2%', color: 'text-amber-700' },
                        { label: 'Comissão Mês', val: 'R$ 142k', color: 'text-indigo-700' }
                      ].map((k, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded p-1 shadow-sm">
                          <div className="text-[6px] text-slate-500 font-semibold">{k.label}</div>
                          <div className={`text-[9px] font-extrabold ${k.color}`}>{k.val}</div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 flex-1">
                      <div className="bg-white border border-slate-200 rounded p-1.5 flex flex-col justify-between">
                        <div className="text-[7px] font-bold text-slate-800">Pipeline CRM (Kanban)</div>
                        <div className="flex gap-1">
                          <div className="flex-1 bg-cyan-50 border border-cyan-200 rounded p-1 text-[6px]">
                            <strong className="text-cyan-900">Novos (5)</strong>
                            <div className="text-slate-600 truncate mt-0.5">Rodrigo M.</div>
                          </div>
                          <div className="flex-1 bg-emerald-50 border border-emerald-200 rounded p-1 text-[6px]">
                            <strong className="text-emerald-900">Visita (3)</strong>
                            <div className="text-slate-600 truncate mt-0.5">Beatriz N.</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200 rounded p-1.5 flex flex-col justify-between">
                        <div className="text-[7px] font-bold text-slate-800">Simulador SAC vs Price</div>
                        <div className="bg-slate-900 text-white rounded p-1 text-[6px]">
                          <div className="text-cyan-300 font-bold">1ª Parcela: R$ 6.320</div>
                          <div className="text-slate-400">Renda Mín: R$ 21.066</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlay with launch CTA */}
                <div className="absolute inset-0 bg-black/45 flex items-center justify-center backdrop-blur-[1px]">
                  <a
                    href="/prototipo-imobiliaria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform text-white">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <span className="text-white font-semibold text-sm bg-black/80 px-4 py-1.5 rounded-full border border-white/10">
                      Abrir Protótipo Imobiliário
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
            <div className="inline-flex items-center gap-2 badge-cyan mb-6 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              Solução de Software para o Mercado Imobiliário
            </div>

            <h3 className="heading-md text-white mb-4">
              Tecnologia de ponta para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                potencializar vendas e locações
              </span>
            </h3>

            <p className="text-gray-text mb-8 leading-relaxed">
              Do primeiro contato com o lead vindo de portais (ZAP/VivaReal) à assinatura de contratos e cálculo de parcelas em tempo real. Tudo integrado em uma interface de alta performance.
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
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span className="text-gray-text text-sm">{label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="/prototipo-imobiliaria"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline-neon flex items-center gap-2 justify-center py-3 border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10"
              >
                <ExternalLink className="w-4 h-4" />
                Explorar ImobPRO
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
                Quero para minha imobiliária
              </motion.a>
            </div>

            <p className="text-gray-muted text-xs mt-4 font-mono">
              ✓ Integrável com portais, WhatsApp API, bancos e CRMs legados.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
