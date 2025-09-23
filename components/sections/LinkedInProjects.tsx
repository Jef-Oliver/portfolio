import { ExternalLink, Linkedin, Briefcase, Calendar, Users, Database, Code, Zap } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import ProjectImageGallery from "@/components/ui/ProjectImageGallery";

export default function LinkedInProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="linkedin-projects" className="section-padding bg-dark">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-light mb-4">Projetos em Destaque</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-primary to-purple-light mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Portfólio completo de projetos profissionais com detalhes técnicos e resultados alcançados.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Project Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300">
                {/* Project Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-light">{project.title}</h3>
                    <p className="text-sm text-gray-400">{project.category}</p>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {project.team}
                  </span>
                </div>

                {/* Project Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs text-gray-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Project Images or LinkedIn Link */}
                {project.images && project.images.length > 0 ? (
                  <div className="mb-4">
                    <ProjectImageGallery 
                      images={project.images} 
                      projectTitle={project.title}
                      aspectClassName="aspect-[4/3]"
                    />
                  </div>
                ) : project.linkedinUrl ? (
                  <div className="mb-4">
                    <a
                      href={project.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      Ver no LinkedIn
                    </a>
                  </div>
                ) : null}

                {/* Project Actions */}
                <div className="flex gap-3">
                  {project.linkedinUrl && (
                    <a
                      href={project.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition-colors duration-300"
                    >
                      <Code className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* LinkedIn Projects Link */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Linkedin className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-semibold text-light">Portfólio Completo</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Acesse meu perfil completo no LinkedIn para ver todos os projetos, 
                experiências profissionais e conquistas detalhadas.
              </p>
              <a
                href="https://www.linkedin.com/in/jeefisantos/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAACc5gSoBmGoDQ8V0NvIXh_ekT6s3KOtELWc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <Linkedin className="w-5 h-5" />
                Ver Todos os Projetos
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-light font-semibold mb-2">Projetos Diversificados</h4>
                <p className="text-gray-400 text-sm">
                  Experiência em diferentes tecnologias e domínios de negócio
                </p>
              </div>
              
              <div className="p-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-light font-semibold mb-2">Trabalho em Equipe</h4>
                <p className="text-gray-400 text-sm">
                  Colaboração com desenvolvedores, designers e stakeholders
                </p>
              </div>
              
              <div className="p-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-light font-semibold mb-2">Resultados Comprovados</h4>
                <p className="text-gray-400 text-sm">
                  Projetos entregues com sucesso e métricas de impacto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
