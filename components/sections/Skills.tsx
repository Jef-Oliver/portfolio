import { 
  Code2, 
  Database, 
  Server, 
  Boxes, 
  GitBranch, 
  Zap,
  Brain,
  Settings
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Linguagens & Frameworks',
    icon: Code2,
    skills: ['Python', 'Django', 'Flask', 'FastAPI', 'Java', 'Spring Boot', 'ASP Clássico'],
    color: 'from-purple-primary to-purple-light'
  },
  {
    title: 'Bancos de Dados',
    icon: Database,
    skills: ['PostgreSQL', 'SQL Server', 'MySQL', 'Redis', 'MongoDB'],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'DevOps & Infra',
    icon: Server,
    skills: ['Docker', 'CI/CD', 'Git', 'Linux', 'AWS', 'Heroku'],
    color: 'from-green-500 to-emerald-400'
  },
  {
    title: 'Arquitetura & APIs',
    icon: Boxes,
    skills: ['REST APIs', 'Microservices', 'Clean Architecture', 'Design Patterns', 'TDD'],
    color: 'from-orange-500 to-yellow-400'
  },
  {
    title: 'Ferramentas & Métodos',
    icon: GitBranch,
    skills: ['Git/GitHub', 'Scrum/Agile', 'Code Review', 'Refactoring', 'Legacy Systems'],
    color: 'from-pink-500 to-rose-400'
  },
  {
    title: 'IA & Automação',
    icon: Brain,
    skills: ['Machine Learning', 'Computer Vision', 'Process Automation', 'Data Analysis', 'Python AI/ML'],
    color: 'from-violet-500 to-purple-400'
  }
];

const highlights = [
  {
    icon: Zap,
    title: 'Redução de burocracia',
    description: 'Sistemas automatizados que eliminam tarefas manuais repetitivas'
  },
  {
    icon: Settings,
    title: 'Dashboards automáticos',
    description: 'Relatórios inteligentes com visualizações em tempo real'
  },
  {
    icon: Brain,
    title: 'Reconhecimento facial',
    description: 'IA aplicada para controle de ponto e identificação de usuários'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-dark">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-light mb-4">Skills & Tecnologias</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-primary to-purple-light mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experiência sólida em tecnologias backend e ferramentas modernas para desenvolvimento de software
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-light mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full hover:bg-purple-primary/20 hover:text-purple-light transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights Section */}
        <div className="bg-gradient-to-r from-purple-primary/10 to-purple-light/10 rounded-2xl p-8">
          <h3 className="heading-sm text-light mb-8 text-center">Resultados & Impactos</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="inline-flex p-4 bg-purple-primary rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-light mb-2">
                    {highlight.title}
                  </h4>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}