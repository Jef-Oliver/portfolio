'use client';

import { useState } from 'react';
import { Mail, Github, Send, CheckCircle, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const subject = encodeURIComponent(`Contato de ${formData.name}`);
    const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`);
    const mailtoLink = `mailto:j4.oliver23@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="section-padding bg-gray-900/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-light mb-4">Vamos Conversar</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-primary to-purple-light mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Interessado em uma colaboração ou tem alguma dúvida? Entre em contato comigo!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="heading-sm text-light mb-6">Entre em Contato</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Estou sempre aberto a discutir novas oportunidades, projetos interessantes 
                  ou simplesmente trocar ideias sobre tecnologia e desenvolvimento.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:j4.oliver23@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-purple-primary/10 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Enviar email para j4.oliver23@gmail.com"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-light font-semibold">Email</h4>
                    <p className="text-gray-400">contato@jeferson</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Jef-Oliver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-purple-primary/10 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Ver perfil no GitHub (abre em nova aba)"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-light font-semibold">GitHub</h4>
                    <p className="text-gray-400">github.com/Jef-Oliver</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/jef-oliver/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-purple-primary/10 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Ver perfil no LinkedIn (abre em nova aba)"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-light font-semibold">LinkedIn</h4>
                    <p className="text-gray-400">linkedin.com/in/jef-oliver</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-light mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    placeholder="Seu nome completo"
                    aria-describedby="name-help"
                  />
                  <span id="name-help" className="sr-only">Digite seu nome completo</span>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-light mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    placeholder="seu@email.com"
                    aria-describedby="email-help"
                  />
                  <span id="email-help" className="sr-only">Digite seu endereço de email</span>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-light mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent transition-all duration-300 disabled:opacity-50 resize-vertical"
                    placeholder="Descreva seu projeto, dúvida ou proposta..."
                    aria-describedby="message-help"
                  />
                  <span id="message-help" className="sr-only">Digite sua mensagem detalhada</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Enviar mensagem por email"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Enviando...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Enviado!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensagem
                    </>
                  )}
                </button>

                {isSubmitted && (
                  <div className="text-center text-green-400 text-sm" role="status">
                    Mensagem enviada! Seu cliente de email foi aberto.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}