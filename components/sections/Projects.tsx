'use client';

import { useState, useEffect } from 'react';
import { Star, GitFork, ExternalLink, Github } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  languages_url: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  languages: { [key: string]: number };
}

const techFilters = [
  'Todos',
  'Python',
  'Django', 
  'Flask',
  'FastAPI',
  'PostgreSQL',
  'Java',
  'Spring',
  'Docker',
];

const getTechFromLanguages = (languages: { [key: string]: number } = {}) => {
  const techs = [];
  Object.keys(languages).forEach(lang => {
    switch (lang.toLowerCase()) {
      case 'python':
        techs.push('Python');
        break;
      case 'java':
        techs.push('Java');
        break;
      case 'javascript':
      case 'typescript':
        techs.push('JavaScript');
        break;
      case 'html':
      case 'css':
        techs.push('Frontend');
        break;
      default:
        techs.push(lang);
    }
  });
  return techs;
};

export default function Projects() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('Todos');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>('');

  useEffect(() => {
    console.log('Projects component mounted, iniciando fetchRepositories...');
    fetchRepositories();
  }, []);

  useEffect(() => {
    if (selectedFilter === 'Todos') {
      setFilteredRepos(repositories);
    } else {
      const filtered = repositories.filter(repo => {
        const techs = getTechFromLanguages(repo.languages);
        const repoName = repo.name.toLowerCase();
        const repoDesc = (repo.description || '').toLowerCase();
        
        const filterLower = selectedFilter.toLowerCase();
        
        return (
          techs.some(tech => tech.toLowerCase().includes(filterLower)) ||
          repoName.includes(filterLower) ||
          repoDesc.includes(filterLower)
        );
      });
      setFilteredRepos(filtered);
    }
  }, [selectedFilter, repositories]);

  const fetchRepositories = async () => {
    try {
      console.log('Iniciando busca de repositórios...');
      setLoading(true);
      setError(null);
      setDebugInfo('Iniciando busca de repositórios...');
      
      // Adicionar timeout para evitar travamentos
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 segundos
      
      const response = await fetch('https://api.github.com/users/Jef-Oliver/repos?sort=updated&per_page=50', {
        signal: controller.signal,
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Jeferson-Portfolio-App'
        }
      });
      
      clearTimeout(timeoutId);
      
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      setDebugInfo(`Response status: ${response.status}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('GitHub API error response:', errorText);
        setDebugInfo(`Erro na API: ${response.status} - ${errorText}`);
        throw new Error(`GitHub API error: ${response.status} - ${errorText}`);
      }
      
      const repos = await response.json();
      console.log('Repositórios recebidos:', repos.length);
      console.log('Primeiro repositório:', repos[0]);
      setDebugInfo(`Repositórios recebidos: ${repos.length}`);
      
      if (!Array.isArray(repos)) {
        throw new Error('Resposta da API não é um array válido');
      }
      
      // Filter out forks and add languages
      const validRepos = repos.filter((repo: Repository) => !repo.fork);
      console.log('Repositórios válidos (não forks):', validRepos.length);
      setDebugInfo(`Repositórios válidos: ${validRepos.length}`);
      
      if (validRepos.length === 0) {
        setDebugInfo('⚠️ Nenhum repositório válido encontrado (todos são forks)');
        setRepositories([]);
        setFilteredRepos([]);
        return;
      }
      
      // Fetch languages for each repo
      const reposWithLanguages = await Promise.all(
        validRepos.map(async (repo: Repository) => {
          try {
            console.log(`Buscando linguagens para: ${repo.name}`);
            const langResponse = await fetch(repo.languages_url, {
              headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'Jeferson-Portfolio-App'
              }
            });
            const languages = langResponse.ok ? await langResponse.json() : {};
            console.log(`Linguagens para ${repo.name}:`, languages);
            return { ...repo, languages };
          } catch (error) {
            console.error(`Error fetching languages for ${repo.name}:`, error);
            return { ...repo, languages: {} };
          }
        })
      );

      console.log('Repositórios com linguagens:', reposWithLanguages.length);
      setDebugInfo(`Repositórios com linguagens: ${reposWithLanguages.length}`);

      // Sort by stars and update date
      const sortedRepos = reposWithLanguages.sort((a, b) => {
        const aScore = a.stargazers_count * 2 + new Date(a.updated_at).getTime() / 1000000000;
        const bScore = b.stargazers_count * 2 + new Date(b.updated_at).getTime() / 1000000000;
        return bScore - aScore;
      });

      console.log('Repositórios ordenados:', sortedRepos.length);
      console.log('Primeiro repositório ordenado:', sortedRepos[0]);
      setDebugInfo(`Repositórios ordenados: ${sortedRepos.length}`);

      setRepositories(sortedRepos);
      setFilteredRepos(sortedRepos);
      setDebugInfo(`✅ Carregamento concluído com sucesso! ${sortedRepos.length} projetos carregados.`);
    } catch (error) {
      console.error('Error fetching repositories:', error);
      let errorMessage = 'Erro desconhecido';
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          errorMessage = 'Timeout: A requisição demorou muito para responder';
        } else {
          errorMessage = error.message;
        }
      }
      
      setError(`Erro ao carregar repositórios do GitHub: ${errorMessage}`);
      setDebugInfo(`❌ Erro: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const featuredProjects = filteredRepos.slice(0, 3);
  const otherProjects = filteredRepos.slice(3);

  if (loading) {
    return (
      <section id="projetos" className="section-padding bg-gray-900/50">
        <div className="container">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-primary mx-auto"></div>
            <p className="text-light mt-4">Carregando projetos...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projetos" className="section-padding bg-gray-900/50">
        <div className="container">
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-red-400 text-xl font-semibold mb-3">Erro ao Carregar Projetos</h3>
                <p className="text-red-300 mb-4">{error}</p>
                <button
                  onClick={fetchRepositories}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Tentar Novamente
                </button>
              </div>
              <p className="text-gray-400 text-sm">
                Se o problema persistir, verifique sua conexão com a internet ou tente novamente mais tarde.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projetos" className="section-padding bg-gray-900/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-light mb-4">Projetos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-primary to-purple-light mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Seleção de projetos que demonstram minhas habilidades em desenvolvimento backend e soluções completas
          </p>
          
          {/* Debug Info */}
          {debugInfo && (
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg max-w-2xl mx-auto">
              <p className="text-blue-300 text-sm font-mono">{debugInfo}</p>
            </div>
          )}
        </div>

        {/* Technology Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {techFilters.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedFilter(tech)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-dark ${
                selectedFilter === tech
                  ? 'bg-purple-primary text-light shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-light'
              }`}
              aria-label={`Filtrar projetos por ${tech}`}
              aria-pressed={selectedFilter === tech}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="heading-sm text-light mb-8 text-center">Projetos em Destaque</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((repo) => (
                <ProjectCard key={repo.id} repo={repo} featured />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="heading-sm text-light mb-8 text-center">Outros Projetos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((repo) => (
                <ProjectCard key={repo.id} repo={repo} />
              ))}
            </div>
          </div>
        )}

        {filteredRepos.length === 0 && !loading && !error && (
          <div className="text-center text-gray-400 py-12">
            <div className="max-w-md mx-auto">
              <div className="bg-gray-800/50 rounded-xl p-6 mb-4">
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Nenhum Projeto Encontrado</h3>
                <p className="text-sm">Não foi possível encontrar projetos para o filtro selecionado.</p>
              </div>
              <button
                onClick={fetchRepositories}
                className="bg-purple-primary hover:bg-purple-light text-white px-6 py-2 rounded-lg transition-colors duration-300"
              >
                Recarregar Projetos
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ repo, featured = false }: { repo: Repository; featured?: boolean }) {
  const techs = getTechFromLanguages(repo.languages);
  
  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 card-hover ${
      featured ? 'lg:col-span-1' : ''
    }`}>
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-xl font-semibold text-light group-hover:text-purple-light transition-colors">
          {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </h4>
        {featured && (
          <span className="bg-purple-primary text-light text-xs px-2 py-1 rounded-full">
            Destaque
          </span>
        )}
      </div>
      
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {repo.description || 'Projeto em desenvolvimento'}
      </p>
      
      {techs.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {techs.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-purple-primary/20 text-purple-light px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
          {techs.length > 4 && (
            <span className="text-xs text-gray-400">
              +{techs.length - 4}
            </span>
          )}
        </div>
      )}
      
      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="w-4 h-4" />
            {repo.forks_count}
          </span>
        </div>
        <span>
          {new Date(repo.updated_at).toLocaleDateString('pt-BR')}
        </span>
      </div>
      
      <div className="flex gap-3">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-purple-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-gray-800 rounded-lg px-3 py-2"
          aria-label={`Ver código do projeto ${repo.name} no GitHub`}
        >
          <Github className="w-4 h-4" />
          Código
        </a>
        
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-gray-800 rounded-lg px-3 py-2"
            aria-label={`Ver demo do projeto ${repo.name}`}
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        )}
      </div>
    </div>
  );
}