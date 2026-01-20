import { Badge } from '@/components/ui/badge';
import { SKILLS_BY_CATEGORY } from '@/lib/constants';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-dark">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-light mb-4">Skills & Tecnologias</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-primary to-purple-light mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Organização por categorias para deixar claro meu foco em backend — com
            capacidade full-stack quando necessário.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(
            Object.entries(SKILLS_BY_CATEGORY) as Array<
              [
                keyof typeof SKILLS_BY_CATEGORY,
                (typeof SKILLS_BY_CATEGORY)[keyof typeof SKILLS_BY_CATEGORY],
              ]
            >
          ).map(([key, category]) => {
            const Icon = category.icon;
            const variant =
              key === 'backend'
                ? 'backend'
                : key === 'database'
                  ? 'database'
                  : key === 'cloud'
                    ? 'cloud'
                    : key === 'frontend'
                      ? 'frontend'
                      : key === 'ai'
                        ? 'ai'
                        : 'default';

            return (
              <div
                key={category.title}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-purple-primary/15 border border-purple-primary/20 text-purple-light">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-light">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={variant}
                      className="border-gray-700/40"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}