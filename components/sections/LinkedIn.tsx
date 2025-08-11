"use client";

import { ExternalLink, Linkedin } from "lucide-react";

interface LinkedInProps {
  postUrl?: string;
}

export default function LinkedInSection({ postUrl = "https://www.linkedin.com/feed/update/urn:li:activity:7359332775478411266/" }: LinkedInProps) {
  // LinkedIn embed aceita o formato: https://www.linkedin.com/embed/feed/update/urn:li:activity:ID
  const match = postUrl.match(/urn:li:activity:(\d+)/);
  const activityId = match?.[1];
  const embedUrl = activityId
    ? `https://www.linkedin.com/embed/feed/update/urn:li:activity:${activityId}`
    : undefined;

  return (
    <section id="linkedin" className="section-padding bg-gray-900/50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="heading-lg text-light mb-4">Destaques no LinkedIn</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-primary to-purple-light mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Publicação recente com fotos e detalhes do projeto.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {embedUrl ? (
            <div className="relative w-full aspect-[16/9] bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50">
              <iframe
                src={embedUrl}
                height="100%"
                width="100%"
                style={{ border: 0, height: "100%", width: "100%" }}
                title="Post do LinkedIn"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="text-center text-gray-300">
              <p className="mb-4">Não foi possível gerar o embed desta publicação.</p>
              <a
                href={postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-light hover:text-white transition-colors"
              >
                Ver no LinkedIn
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          <div className="text-center mt-6">
            <a
              href={postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-light transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Abrir publicação no LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
