import { ExternalLink, Github, Linkedin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

type ProjectCardProps = {
  title: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    article?: string;
  };
  image?: string;
  featured?: boolean;
};

export default function ProjectCard({
  title,
  problem,
  solution,
  result,
  technologies,
  links,
  featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`bg-gray-800/50 backdrop-blur-sm border rounded-2xl p-6 card-hover ${
        featured
          ? 'border-purple-primary/60 shadow-lg shadow-purple-primary/10'
          : 'border-gray-700/50'
      }`}
    >
      <div className="mb-4">
        {featured && (
          <span className="inline-flex items-center px-3 py-1 mb-3 rounded-full text-xs font-semibold uppercase tracking-wide bg-purple-primary/20 text-purple-light border border-purple-primary/40">
            Projeto em destaque
          </span>
        )}
        <h3 className="text-xl font-semibold text-light">{title}</h3>
      </div>

      <div className="space-y-3 mb-5">
        <p className="text-gray-300 text-sm leading-relaxed">
          <span className="text-purple-light font-semibold">Problema:</span>{' '}
          {problem}
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">
          <span className="text-purple-light font-semibold">Solução:</span>{' '}
          {solution}
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">
          <span className="text-purple-light font-semibold">Resultado:</span>{' '}
          {result}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="bg-gray-700/50 text-gray-200 border-gray-600/40 hover:bg-gray-700/70"
          >
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-gray-800 rounded-lg px-3 py-2"
            aria-label={`Ver código do projeto ${title} no GitHub (abre em nova aba)`}
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-gray-800 rounded-lg px-3 py-2"
            aria-label={`Ver demo do projeto ${title} (abre em nova aba)`}
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        )}
        {links.article && (
          <a
            href={links.article}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-gray-800 rounded-lg px-3 py-2"
            aria-label={`Ver artigo do projeto ${title} (abre em nova aba)`}
          >
            <Linkedin className="w-4 h-4" />
            Link do projeto
          </a>
        )}
      </div>
    </div>
  );
}

