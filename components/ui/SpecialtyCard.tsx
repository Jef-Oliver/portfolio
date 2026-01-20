import type React from 'react';

type SpecialtyCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  example: string;
};

export default function SpecialtyCard({
  icon,
  title,
  description,
  example,
}: SpecialtyCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 card-hover">
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-xl bg-purple-primary/15 border border-purple-primary/20 p-3 text-purple-light">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-light mb-2">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            {description}
          </p>
          <p className="text-gray-400 text-sm">
            <span className="text-purple-light font-semibold">Exemplo:</span>{' '}
            {example}
          </p>
        </div>
      </div>
    </div>
  );
}

