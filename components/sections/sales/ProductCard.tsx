'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MessageCircle, ExternalLink, Play, CheckCircle2, Clock } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

interface ProductCardProps {
  title: string;
  category: string;
  description: string;
  video?: string;
  image?: string;
  demoUrl?: string;
  previewType?: 'prumo-certo' | 'caixa-da-obra';
  partnerCredits?: string;
  technologies: string[];
  status: 'available' | 'sold';
  ctaText?: string;
  linkedinUrl?: string;
  index: number;
}

export default function ProductCard({
  title,
  category,
  description,
  video,
  image,
  demoUrl,
  previewType,
  partnerCredits,
  technologies,
  status,
  ctaText = 'Quero um sistema assim',
  linkedinUrl,
  index,
}: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
    videoRef.current?.pause();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const whatsappMsg = encodeURIComponent(
    `Olá! Vim pelo site e tenho interesse em: ${title}. Podemos conversar?`
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Neon glow border on hover */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl"
        animate={{
          opacity: isHovered ? 1 : 0,
          background: isHovered
            ? 'linear-gradient(135deg, rgba(0,255,65,0.4) 0%, rgba(0,204,51,0.2) 100%)'
            : 'transparent',
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden">
        {/* Media area (Video or Interactive Demo Preview) */}
        <div className="relative aspect-video bg-black overflow-hidden group/media">
          {video ? (
            <>
              <video
                ref={videoRef}
                src={video}
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Play overlay when not hovered */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/50"
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 rounded-full border-2 border-neon flex items-center justify-center bg-black/60 backdrop-blur-sm">
                  <Play className="w-6 h-6 text-neon ml-1" />
                </div>
              </motion.div>
            </>
          ) : previewType === 'prumo-certo' ? (
            /* PrumoCerto Interactive UI Preview */
            <div className="relative w-full h-full bg-[#161616] flex flex-col overflow-hidden select-none transition-transform duration-500 group-hover:scale-105">
              {/* Fake browser bar */}
              <div className="bg-[#0f0f0f] border-b border-white/10 px-2.5 py-1.5 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#EF6A12' }} />
                </div>
                <div className="flex-1 bg-black/50 rounded px-2 py-0.5 text-[8px] font-mono text-gray-400 text-center truncate">
                  prumocerto-demo.netlify.app
                </div>
              </div>

              {/* Dashboard Mockup */}
              <div className="flex-1 flex overflow-hidden">
                {/* Mini sidebar */}
                <div className="w-[30%] bg-[#101010] p-2 flex flex-col gap-1 border-r border-white/5">
                  <div className="text-[8px] font-bold text-[#EF6A12] mb-1 flex items-center gap-1">
                    👷 PrumoCerto
                  </div>
                  {['📋 Presença', '💵 Vales', '💰 Pagamentos', '👥 Equipe'].map((item, i) => (
                    <div
                      key={i}
                      className={`text-[7px] px-1.5 py-0.5 rounded ${
                        i === 0
                          ? 'bg-[#EF6A12]/20 text-[#EF6A12] font-bold'
                          : 'text-white/50'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Mini content */}
                <div className="flex-1 p-2 flex flex-col gap-1.5 bg-[#1a1a1a]">
                  <div className="grid grid-cols-4 gap-1">
                    {[
                      { label: 'Vieram', val: '8', color: '#4ade80' },
                      { label: 'Meio-dia', val: '2', color: '#facc15' },
                      { label: 'Faltas', val: '1', color: '#f87171' },
                      { label: 'Sem marcar', val: '3', color: '#94a3b8' },
                    ].map((s, i) => (
                      <div key={i} className="bg-[#242424] border border-white/5 rounded p-1 text-center">
                        <div className="text-[9px] font-extrabold" style={{ color: s.color }}>{s.val}</div>
                        <div className="text-[5px] text-white/40">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Mini workers */}
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <div className="text-[5px] text-white/30 font-semibold uppercase">Equipe de Hoje</div>
                    {[
                      { name: 'Carlos Pereira', status: 'Presente', color: '#4ade80' },
                      { name: 'João Marcos', status: 'Meio-dia', color: '#facc15' },
                      { name: 'Antônio Lima', status: 'Falta', color: '#f87171' },
                    ].map((w, i) => (
                      <div key={i} className="flex items-center justify-between bg-[#242424] rounded px-1.5 py-0.5">
                        <span className="text-[6.5px] text-white/80 truncate">{w.name}</span>
                        <span className="text-[5.5px] font-bold" style={{ color: w.color }}>{w.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Play / Preview overlay when not hovered */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[0.5px]"
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 rounded-full border-2 border-neon flex items-center justify-center bg-black/60 backdrop-blur-sm shadow-neon">
                  <Play className="w-6 h-6 text-neon ml-1" />
                </div>
              </motion.div>
            </div>
          ) : previewType === 'caixa-da-obra' ? (
            /* Caixa da Obra Interactive UI Preview */
            <div className="relative w-full h-full bg-[#090d16] flex flex-col overflow-hidden select-none transition-transform duration-500 group-hover:scale-105">
              {/* Fake browser bar */}
              <div className="bg-[#050811] border-b border-white/10 px-2.5 py-1.5 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <div className="w-2 h-2 rounded-full bg-blue-500/70" />
                </div>
                <div className="flex-1 bg-black/50 rounded px-2 py-0.5 text-[8px] font-mono text-gray-400 text-center truncate">
                  caixa-da-obra-demo.netlify.app
                </div>
              </div>

              {/* Dashboard Mockup */}
              <div className="flex-1 flex overflow-hidden">
                {/* Mini sidebar */}
                <div className="w-[30%] bg-[#080c14] p-2 flex flex-col gap-1 border-r border-white/5">
                  <div className="text-[8px] font-bold text-blue-400 mb-1 flex items-center gap-1">
                    💰 Caixa Obra
                  </div>
                  {['📊 Dashboard', '📋 Etapas', '💸 Contas', '👥 Equipe'].map((item, i) => (
                    <div
                      key={i}
                      className={`text-[7px] px-1.5 py-0.5 rounded ${
                        i === 0
                          ? 'bg-blue-500/20 text-blue-300 font-bold'
                          : 'text-white/50'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Mini content */}
                <div className="flex-1 p-2 bg-[#f8fafc] flex flex-col gap-1.5">
                  <div className="grid grid-cols-3 gap-1">
                    {[
                      { label: 'Gasto', val: 'R$ 284k', color: 'text-blue-700' },
                      { label: 'Etapas', val: '6 ativas', color: 'text-emerald-700' },
                      { label: 'A Vencer', val: '3 contas', color: 'text-amber-700' },
                    ].map((k, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded p-1 shadow-xs">
                        <div className="text-[5px] text-slate-500">{k.label}</div>
                        <div className={`text-[8.5px] font-extrabold ${k.color}`}>{k.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Mini Etapas bars */}
                  <div className="bg-white border border-slate-200 rounded p-1 flex flex-col gap-0.5 mt-0.5">
                    <div className="text-[6px] font-bold text-slate-800">Gastos por Etapa</div>
                    {[
                      { etapa: 'Fundação', pct: 100, color: 'bg-blue-500' },
                      { etapa: 'Estrutura', pct: 65, color: 'bg-indigo-400' },
                      { etapa: 'Acabamento', pct: 20, color: 'bg-sky-400' },
                    ].map((e, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <span className="text-[5.5px] text-slate-600 w-11 truncate">{e.etapa}</span>
                        <div className="flex-1 bg-slate-100 rounded-full h-1">
                          <div className={`${e.color} h-1 rounded-full`} style={{ width: `${e.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Play / Preview overlay when not hovered */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[0.5px]"
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 rounded-full border-2 border-neon flex items-center justify-center bg-black/60 backdrop-blur-sm shadow-neon">
                  <Play className="w-6 h-6 text-neon ml-1" />
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-br from-dark-card to-black p-4">
              <div className="absolute inset-0 bg-grid-neon opacity-20" />
              <div className="w-14 h-14 rounded-full border-2 border-neon flex items-center justify-center bg-black/60 backdrop-blur-sm">
                <Play className="w-6 h-6 text-neon ml-1" />
              </div>
            </div>
          )}

          {/* Status badge */}
          <div className="absolute top-3 right-3 z-20">
            {status === 'available' ? (
              <span className="status-available text-xs px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm border border-neon/20">
                Disponível
              </span>
            ) : (
              <span className="status-sold text-xs px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm border border-dark-border">
                Vendido
              </span>
            )}
          </div>

          {/* Category badge */}
          <div className="absolute top-3 left-3 z-20">
            <span className="badge-neon text-xs">{category}</span>
          </div>
        </div>

        {/* Card content */}
        <div className="p-6">
          <h3 className="text-white font-bold text-xl font-grotesk mb-3 leading-tight group-hover:text-neon transition-colors">
            {title}
          </h3>

          <p className="text-gray-text text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Developers / Partner Credits */}
          {partnerCredits && (
            <div className="flex items-center gap-2.5 text-xs text-gray-300 mb-4 bg-white/[0.04] py-1.5 px-3 rounded-lg border border-white/5">
              <div className="relative w-6 h-6 rounded-full overflow-hidden border border-neon/50 flex-shrink-0 bg-neutral-800 shadow-[0_0_8px_rgba(0,255,65,0.2)]">
                <Image
                  src="/projects-images/walison.jpeg"
                  alt="Walison Fernandes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="truncate">
                <span className="text-neon font-mono font-semibold text-[10px] mr-1.5">Dev:</span>
                <span className="text-white font-medium">{partnerCredits}</span>
              </div>
            </div>
          )}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span key={tech} className="badge-neon text-xs">
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-2.5">
            <motion.a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 btn-neon text-sm py-2.5 px-3 justify-center text-center"
            >
              <MessageCircle className="w-4 h-4" />
              {ctaText}
            </motion.a>

            {demoUrl && (
              <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="btn-outline-neon text-sm py-2.5 px-3 flex items-center gap-1.5"
                title="Abrir Demonstração"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline text-xs font-semibold">Demo</span>
              </motion.a>
            )}

            {linkedinUrl && (
              <motion.a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="btn-outline-neon text-sm py-2.5 px-3"
                title="Ver no LinkedIn"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
          </div>

          {/* Guarantee note for sold items */}
          {status === 'sold' && (
            <div className="mt-3 flex items-center gap-2 text-xs text-gray-muted">
              <CheckCircle2 className="w-3.5 h-3.5 text-neon" />
              Sistema similar pode ser desenvolvido para você
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
