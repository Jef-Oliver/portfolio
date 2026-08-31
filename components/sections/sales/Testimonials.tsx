'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareQuote, Send, User, MapPin, CheckCircle2 } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const INITIAL_TESTIMONIALS = [
  {
    id: 1,
    name: 'Carlos Silva',
    location: 'São Paulo, SP - Gestor Imobiliário',
    text: 'O sistema transformou nossa operação. Reduzimos o tempo de fechamento de contratos pela metade e os relatórios financeiros ficaram impecáveis. Excelente atendimento e entrega rápida!',
  },
  {
    id: 2,
    name: 'Marina Costa',
    location: 'Belo Horizonte, MG - Sócia de Restaurante',
    text: 'Profissionalismo do começo ao fim. Nosso controle de pedidos e estoque nunca foi tão fácil. O sistema sob medida resolveu dores que softwares genéricos de prateleira não resolviam.',
  }
];

export default function Testimonials() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formata a mensagem para o WhatsApp
    const whatsappMessage = `*NOVA RECOMENDAÇÃO (Site)*\n\n*Nome:* ${formData.name}\n*Localidade/Empresa:* ${formData.location}\n*Depoimento:* "${formData.message}"\n\n_Autorizo o uso deste depoimento no site._`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Simula envio e abre WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodedMessage}`, '_blank');
      
      // Reseta form após 3 segundos
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', location: '', message: '' });
      }, 3000);
    }, 1000);
  };

  return (
    <section id="recomendacoes" className="section-padding bg-dark-surface border-t border-dark-border relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-4 justify-center">O que dizem sobre mim</div>
          <h2 className="heading-lg text-white mb-4">
            Recomendações <span className="text-neon">&</span> Feedbacks
          </h2>
          <p className="text-gray-text max-w-2xl mx-auto">
            A transparência e a satisfação dos meus clientes são o meu maior ativo. 
            Confira quem já trabalhou comigo e deixe também a sua avaliação.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Lado Esquerdo: Lista de Depoimentos */}
          <div className="space-y-6">
            <h3 className="text-xl font-grotesk text-white font-bold flex items-center gap-2 mb-6">
              <MessageSquareQuote className="w-5 h-5 text-neon" />
              Depoimentos Recentes
            </h3>
            
            <div className="space-y-4">
              {INITIAL_TESTIMONIALS.map((testimonial, idx) => (
                <motion.div 
                  key={testimonial.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="card-dark p-6 rounded-2xl border-l-2 border-neon/50 relative group"
                >
                  <MessageSquareQuote className="absolute top-6 right-6 w-8 h-8 text-white/5 opacity-50 group-hover:text-neon/10 transition-colors" />
                  <p className="text-gray-text italic mb-6 leading-relaxed relative z-10">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center border border-dark-border">
                      <User className="w-5 h-5 text-neon/70" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-gray-muted text-xs flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" /> {testimonial.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-dark p-8 rounded-2xl border border-neon/20 sticky top-24"
          >
            <h3 className="text-xl font-grotesk text-white font-bold mb-2">
              Deixe sua recomendação
            </h3>
            <p className="text-gray-text text-sm mb-6">
              Já trabalhou comigo? Escreva uma avaliação sincera. Ela será enviada para mim e adicionada aqui no site!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-muted uppercase tracking-wider mb-2">
                  Seu Nome
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-muted" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/50 border border-dark-border rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-neon/50 transition-colors"
                    placeholder="João Silva"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-muted uppercase tracking-wider mb-2">
                  Localidade ou Empresa (Opcional)
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-muted" />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full bg-black/50 border border-dark-border rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-neon/50 transition-colors"
                    placeholder="São Paulo, SP / Empresa X"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-muted uppercase tracking-wider mb-2">
                  Seu Depoimento
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black/50 border border-dark-border rounded-lg p-4 text-white focus:outline-none focus:border-neon/50 transition-colors resize-none"
                  placeholder="Escreva como foi trabalhar comigo ou usar o sistema..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full btn-neon py-3 flex justify-center items-center gap-2 mt-4"
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Enviando...
                    </motion.div>
                  ) : submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      Enviado via WhatsApp!
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Enviar Depoimento
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
              
              <p className="text-[10px] text-gray-muted text-center mt-3">
                * Para evitar spam, o depoimento será encaminhado primeiro para o WhatsApp para aprovação antes de aparecer no site.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
