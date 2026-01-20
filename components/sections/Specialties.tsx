import SpecialtyCard from '@/components/ui/SpecialtyCard';
import { SPECIALTIES } from '@/lib/constants';

export default function Specialties() {
  return (
    <section id="especialidades" className="section-padding bg-dark">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-light mb-4">Especialidades</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-primary to-purple-light mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Foco em backend: arquitetura, performance e modernização — com entregas
            orientadas a métricas e impacto real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SPECIALTIES.map((s) => {
            const Icon = s.icon;
            return (
              <SpecialtyCard
                key={s.title}
                icon={<Icon className="w-6 h-6" />}
                title={s.title}
                description={s.description}
                example={s.example}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

