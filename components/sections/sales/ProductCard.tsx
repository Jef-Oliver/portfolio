'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MessageCircle, ExternalLink, Play, CheckCircle2, Clock } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

interface ProductCardProps {
  title: string;
  category: string;
  description: string;
  video: string;
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
        {/* Video area */}
        <div className="relative aspect-video bg-black overflow-hidden">
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

          {/* Status badge */}
          <div className="absolute top-3 right-3">
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
          <div className="absolute top-3 left-3">
            <span className="badge-neon text-xs">{category}</span>
          </div>
        </div>

        {/* Card content */}
        <div className="p-6">
          <h3 className="text-white font-bold text-xl font-grotesk mb-3 leading-tight group-hover:text-neon transition-colors">
            {title}
          </h3>

          <p className="text-gray-text text-sm leading-relaxed mb-5 line-clamp-3">
            {description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span key={tech} className="badge-neon text-xs">
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-3">
            <motion.a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 btn-neon text-sm py-2.5 px-4 justify-center text-center"
            >
              <MessageCircle className="w-4 h-4" />
              {ctaText}
            </motion.a>

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
