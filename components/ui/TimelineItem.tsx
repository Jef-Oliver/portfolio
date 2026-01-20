import { Badge } from '@/components/ui/badge';

type TimelineItemProps = {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  metrics?: string[];
};

export default function TimelineItem({
  company,
  position,
  period,
  responsibilities,
  technologies,
  metrics,
}: TimelineItemProps) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-purple-primary/60 to-transparent" />
      <div className="absolute left-[-6px] top-2 w-4 h-4 rounded-full bg-purple-primary shadow-lg shadow-purple-primary/30" />

      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg font-semibold text-light">{company}</h3>
            <p className="text-gray-300">{position}</p>
          </div>
          <div className="text-gray-400 text-sm md:text-right">{period}</div>
        </div>

        <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm leading-relaxed mb-4">
          {responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {metrics?.length ? (
          <div className="mb-4">
            <div className="text-sm text-purple-light font-semibold mb-2">
              Impacto
            </div>
            <div className="flex flex-wrap gap-2">
              {metrics.map((m) => (
                <Badge
                  key={m}
                  variant="backend"
                  className="border-purple-primary/20"
                >
                  {m}
                </Badge>
              ))}
            </div>
          </div>
        ) : null}

        <div>
          <div className="text-sm text-gray-400 font-semibold mb-2">
            Tecnologias
          </div>
          <div className="flex flex-wrap gap-2">
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
        </div>
      </div>
    </div>
  );
}

