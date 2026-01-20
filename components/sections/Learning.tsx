import { BookOpen, Cpu, Network } from 'lucide-react';

import { LEARNING } from '@/lib/constants';

const icons = [Cpu, Network, BookOpen] as const;

export default function Learning() {
  return (
    <section id="aprendendo" className="section-padding bg-dark">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-light mb-4">O Que Estou Aprendendo</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-primary to-purple-light mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Mantendo o repertório sempre atualizado para construir backends mais
            inteligentes, resilientes e escaláveis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {LEARNING.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.title}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 card-hover"
              >
                <div className="inline-flex p-3 rounded-xl bg-purple-primary/15 border border-purple-primary/20 text-purple-light mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-light mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

