"use client";

import { ExternalLink, Linkedin, ChevronLeft, ChevronRight, AlertCircle, Image as ImageIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface LinkedInPost {
  id: string;
  url: string;
  title: string;
  description: string;
}

const linkedInPosts: LinkedInPost[] = [
  {
    id: "7359332775478411266",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7359332775478411266/",
    title: "Sistema de Controle de Aluguéis",
    description: "Sistema completo desenvolvido em Python/Django com PostgreSQL e APIs REST."
  },
  {
    id: "7353458120074887169",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7353458120074887169/",
    title: "Sistema de Ponto",
    description: "Sistema de controle de ponto com reconhecimento facial e automação."
  },
  {
    id: "7133957650156765184",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7133957650156765184/",
    title: "Projeto de Automação",
    description: "Sistema automatizado para processos corporativos com dashboards em tempo real."
  }
];

export default function LinkedInSection() {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  const currentPost = linkedInPosts[currentPostIndex];
  const embedUrl = `https://www.linkedin.com/embed/feed/update/urn:li:activity:${currentPost.id}`;

  const nextPost = () => {
    setCurrentPostIndex((prev) => (prev + 1) % linkedInPosts.length);
    setIframeError(false);
    setIframeLoading(true);
  };

  const prevPost = () => {
    setCurrentPostIndex((prev) => (prev - 1 + linkedInPosts.length) % linkedInPosts.length);
    setIframeError(false);
    setIframeLoading(true);
  };

  const handleIframeLoad = () => {
    setIframeLoading(false);
    setIframeError(false);
  };

  const handleIframeError = () => {
    setIframeError(true);
    setIframeLoading(false);
  };

  // Reset states when post changes
  useEffect(() => {
    setIframeError(false);
    setIframeLoading(true);
  }, [currentPostIndex]);

  return (
    <section id="linkedin" className="section-padding bg-gray-900/50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="heading-lg text-light mb-4">Destaques no LinkedIn</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-primary to-purple-light mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Publicações recentes com fotos e detalhes dos projetos desenvolvidos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Post Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevPost}
              className="flex items-center gap-2 text-gray-300 hover:text-purple-light transition-colors p-2 rounded-lg hover:bg-gray-800/50"
              aria-label="Post anterior"
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-light">{currentPost.title}</h3>
              <p className="text-sm text-gray-400">{currentPost.description}</p>
              <div className="flex justify-center gap-2 mt-2">
                {linkedInPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPostIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentPostIndex ? 'bg-purple-primary' : 'bg-gray-600'
                    }`}
                    aria-label={`Ir para post ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <button
              onClick={nextPost}
              className="flex items-center gap-2 text-gray-300 hover:text-purple-light transition-colors p-2 rounded-lg hover:bg-gray-800/50"
              aria-label="Próximo post"
            >
              Próximo
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* LinkedIn Embed with Error Handling */}
          <div className="relative w-full aspect-[16/9] bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50">
            {iframeLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-primary mx-auto mb-4"></div>
                  <p className="text-gray-300">Carregando publicação...</p>
                </div>
              </div>
            )}

            {iframeError ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80">
                <div className="text-center p-6">
                  <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-light mb-2">Publicação Indisponível</h4>
                  <p className="text-gray-300 mb-4 max-w-sm">
                    Esta publicação não pode ser exibida diretamente. 
                    Clique no link abaixo para visualizá-la no LinkedIn.
                  </p>
                  <a
                    href={currentPost.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    Ver no LinkedIn
                  </a>
                </div>
              </div>
            ) : (
              <iframe
                src={embedUrl}
                height="100%"
                width="100%"
                style={{ border: 0, height: "100%", width: "100%" }}
                title={`Post do LinkedIn - ${currentPost.title}`}
                allowFullScreen
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            )}
          </div>

          {/* Direct Links */}
          <div className="text-center mt-6">
            <a
              href={currentPost.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-light transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Abrir publicação no LinkedIn
            </a>
          </div>

          {/* All Posts Links */}
          <div className="mt-8 text-center">
            <h4 className="text-light font-semibold mb-4">Todas as Publicações</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {linkedInPosts.map((post, index) => (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    index === currentPostIndex
                      ? 'bg-purple-primary text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Linkedin className="w-4 h-4" />
                  {post.title}
                </a>
              ))}
            </div>
          </div>

          {/* Troubleshooting Info */}
          <div className="mt-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
            <h5 className="text-blue-300 font-semibold mb-2">💡 Dica</h5>
            <p className="text-blue-200 text-sm">
              Se alguma publicação não carregar, clique em "Ver no LinkedIn" para acessá-la diretamente. 
              O LinkedIn às vezes restringe embeds por questões de segurança ou privacidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
