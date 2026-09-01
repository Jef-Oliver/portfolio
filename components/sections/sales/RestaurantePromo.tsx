'use client';

import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle, Monitor, Utensils, BarChart2, ShoppingCart, Package, Users } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const FEATURES = [
  { icon: Monitor, label: 'Mapa de mesas em tempo real' },
  { icon: ShoppingCart, label: 'Gestão de comandas e pedidos' },
  { icon: BarChart2, label: 'Dashboard com KPIs e relatórios' },
  { icon: Package, label: 'Controle de estoque integrado' },
  { icon: Users, label: 'Gestão de usuários e permissões' },
  { icon: Utensils, label: 'Emissão fiscal NFC-e' },
];

export default function RestaurantePromo() {
  const whatsappMsg = encodeURIComponent(
    'Olá! Vi o protótipo do RestaurantePRO no site e tenho interesse em um sistema similar para o meu restaurante. Podemos conversar?'
  );

  return (
    <section id="restaurante-pro" className="section-padding bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-grid-neon opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-4 justify-center">Protótipo interativo</div>
          <h2 className="heading-lg text-white mb-4">
            Veja o <span className="text-neon">RestaurantePRO</span> funcionando agora
          </h2>
          <p className="text-gray-text max-w-2xl mx-auto text-lg">
            Um sistema completo de gestão para restaurantes, explore as funcionalidades antes de decidir.
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
            <div className="absolute -inset-4 bg-neon/8 blur-3xl rounded-3xl" />

            <div className="relative card-dark border border-neon/20 rounded-2xl overflow-hidden">
              {/* Fake browser chrome */}
              <div className="bg-dark-surface border-b border-dark-border px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-neon/60" />
                </div>
                <div className="flex-1 bg-black/40 rounded-md px-3 py-1 text-xs font-mono text-gray-muted text-center">
                  restaurantepro.app/demo
                </div>
              </div>

              {/* Screenshot preview */}
              <div className="relative bg-[#f8f7f7] aspect-video overflow-hidden">
                {/* Simulated dashboard UI */}
                <div className="absolute inset-0 flex">
                  {/* Fake sidebar */}
                  <div className="w-[22%] bg-[#0f0a0a] h-full p-3 flex flex-col gap-2">
                    <div className="text-[8px] font-bold text-red-400 mb-2">RestaurantePRO</div>
                    {['📊 Dashboard', '🍽️ Mesas', '🧾 Pedidos', '💰 Caixa', '📋 Cardápio'].map((item, i) => (
                      <div key={i} className={`text-[7px] px-2 py-1 rounded text-white/50 ${i === 1 ? 'bg-red-500/20 text-white' : ''}`}>
                        {item}
                      </div>
                    ))}
                  </div>
                  {/* Fake content */}
                  <div className="flex-1 p-3 flex flex-col gap-2">
                    <div className="grid grid-cols-4 gap-1.5 mb-1">
                      {['R$ 1.847', '3/12', 'R$ 84,50', '18 NFC-e'].map((v, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded p-1.5">
                          <div className="text-[9px] font-bold text-gray-800">{v}</div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 flex-1">
                      {['Livre', 'Ocupada', 'Livre', 'Conta', 'Reservada', 'Livre', 'Ocupada', 'Livre'].map((s, i) => (
                        <div key={i} className={`rounded border-2 p-1 ${
                          s === 'Ocupada' ? 'border-red-300 bg-red-50' :
                          s === 'Conta' ? 'border-purple-300 bg-purple-50' :
                          s === 'Reservada' ? 'border-yellow-300 bg-yellow-50' :
                          'border-green-200 bg-white'
                        }`}>
                          <div className="text-[9px] font-bold text-gray-600">{`0${i+1}`}</div>
                          <div className={`text-[7px] ${
                            s === 'Ocupada' ? 'text-red-600' :
                            s === 'Conta' ? 'text-purple-600' :
                            s === 'Reservada' ? 'text-yellow-700' :
                            'text-green-600'
                          }`}>{s}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Overlay with play button */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <a
                    href="/prototipo-restaurante"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-neon flex items-center justify-center shadow-neon group-hover:scale-110 transition-transform">
                      <ExternalLink className="w-6 h-6 text-black" />
                    </div>
                    <span className="text-white font-semibold text-sm bg-black/60 px-4 py-1.5 rounded-full">
                      Abrir protótipo interativo
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
            <div className="inline-flex items-center gap-2 badge-neon mb-6">
              <Utensils className="w-3.5 h-3.5" />
              Sistema de Gestão para Restaurantes
            </div>

            <h3 className="heading-md text-white mb-4">
              Tudo que seu restaurante precisa em{' '}
              <span className="text-neon">um único sistema</span>
            </h3>

            <p className="text-gray-text mb-8 leading-relaxed">
              Do mapa de mesas à emissão de NFC-e, controle completo da operação, em tempo real,
              de qualquer dispositivo. Desenvolvido sob medida para o seu modelo de negócio.
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
                  <div className="w-7 h-7 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-neon" />
                  </div>
                  <span className="text-gray-text text-sm">{label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="/prototipo-restaurante"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline-neon flex items-center gap-2 justify-center py-3"
              >
                <ExternalLink className="w-4 h-4" />
                Explorar protótipo
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
                Quero para meu restaurante
              </motion.a>
            </div>

            <p className="text-gray-muted text-xs mt-4 font-mono">
              ✓ Adaptável a bares, lanchonetes, delivery e muito mais.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
