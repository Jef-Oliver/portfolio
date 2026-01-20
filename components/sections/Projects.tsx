'use client';

import ProjectCard from '@/components/ui/ProjectCard';
import { PROJECTS } from '@/lib/constants';

export default function Projects() {
  return (
    <section id="projetos" className="section-padding bg-gray-900/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-light mb-4">Projetos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-primary to-purple-light mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Seleção de cases com contexto claro: problema, solução e impacto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              problem={p.problem}
              solution={p.solution}
              result={p.result}
              technologies={p.technologies}
              links={p.links}
              image={p.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}