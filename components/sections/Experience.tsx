import TimelineItem from '@/components/ui/TimelineItem';
import { EXPERIENCE } from '@/lib/constants';

export default function Experience() {
  return (
    <section id="experiencia" className="section-padding bg-gray-900/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-light mb-4">Experiência</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-primary to-purple-light mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Histórico focado em backend, modernização de sistemas críticos e
            automação de processos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCE.map((item) => (
            <TimelineItem
              key={`${item.company}-${item.period}`}
              company={item.company}
              position={item.position}
              period={item.period}
              responsibilities={item.responsibilities}
              technologies={item.technologies}
              metrics={item.metrics}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

