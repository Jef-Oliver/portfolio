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
];

const getTechFromLanguages = (languages: { [key: string]: number } = {}) => {
  const techs: string[] = [];
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
      
      // Repositórios a destacar (ordem fixa)
      const desiredRepoNames = [
        'portfolio',
        'Jogo-RPG-Python',
        'simplePicpay',
        'reconhecimento-facial',
        'Calculo-de-Descontos',
        'ProjetoECommerce'
      ];
      
      // Adicionar timeout para evitar travamentos
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 segundos
      
      const response = await fetch('https://api.github.com/users/Jef-Oliver/repos?sort=updated&per_page=100', {
        signal: controller.signal,
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Jeferson-Portfolio-App'
        }
      });
      
      clearTimeout(timeoutId);
      
      console.log('Response status:', response.status);
      setDebugInfo(`Response status: ${response.status}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('GitHub API error response:', errorText);
        setDebugInfo(`Erro na API: ${response.status} - ${errorText}`);
        throw new Error(`GitHub API error: ${response.status} - ${errorText}`);
      }
      
      const repos = await response.json();
      console.log('Repositórios recebidos:', Array.isArray(repos) ? repos.length : 'n/a');
      setDebugInfo(`Repositórios recebidos: ${Array.isArray(repos) ? repos.length : 0}`);
      
      if (!Array.isArray(repos)) {
        throw new Error('Resposta da API não é um array válido');
      }
      
      // Filtra não-forks
      const validRepos = repos.filter((repo: Repository) => !repo.fork);
      
      // Seleciona apenas os desejados e mantém ordem fixa
      const selectedFromList: (Repository | null)[] = desiredRepoNames.map(name => (
        validRepos.find((r: Repository) => r.name.toLowerCase() === name.toLowerCase()) || null
      ));
      
      // Para os que não vieram na lista, busca individualmente
      const missingNames = desiredRepoNames.filter((_, idx) => selectedFromList[idx] === null);
      const fetchedMissing: Repository[] = await Promise.all(missingNames.map(async (name) => {
        try {
          const repoRes = await fetch(`https://api.github.com/repos/Jef-Oliver/${name}`, {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
              'User-Agent': 'Jeferson-Portfolio-App'
            }
          });
          if (!repoRes.ok) {
            console.warn(`Não foi possível buscar repo individual: ${name}`, repoRes.status);
            return null as unknown as Repository;
          }
          return await repoRes.json();
        } catch (e) {
          console.warn(`Erro ao buscar repo individual: ${name}`, e);
          return null as unknown as Repository;
        }
      }));
      
      // Reconstrói a lista final na ordem desejada
      const nameToFetched: Record<string, Repository | null> = {};
      missingNames.forEach((n, i) => { nameToFetched[n] = fetchedMissing[i] ?? null; });
      const selectedOrdered: Repository[] = desiredRepoNames.map((name, idx) => {
        const fromList = selectedFromList[idx];
        if (fromList) return fromList as Repository;
        const fetched = nameToFetched[name];
        return fetched as Repository;
      }).filter(Boolean) as Repository[];
      
      // Busca linguagens para cada selecionado
      const selectedWithLanguages = await Promise.all(
        selectedOrdered.map(async (repo: Repository) => {
          try {
            const langResponse = await fetch(repo.languages_url, {
              headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'Jeferson-Portfolio-App'
              }
            });
            const languages = langResponse.ok ? await langResponse.json() : {};
            return { ...repo, languages };
          } catch (error) {
            console.error(`Error fetching languages for ${repo.name}:`, error);
            return { ...repo, languages: {} };
          }
        })
      );

      // Mantém a ordem desejada, sem reordenar por estrelas/data
      setRepositories(selectedWithLanguages);
      setFilteredRepos(selectedWithLanguages);
      setDebugInfo(`✅ Carregamento concluído com sucesso! ${selectedWithLanguages.length} projetos destacados.`);
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
          <h2 className="heading-lg text-light mb-4">Projetos em Destaque</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-primary to-purple-light mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Seleção de projetos que demonstram minhas habilidades em desenvolvimento backend e soluções completas
          </p>
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

        {/* All GitHub Projects */}
        {filteredRepos.length > 0 && (
          <div className="mb-16">
            <h3 className="heading-sm text-light mb-8 text-center">Destaque do GitHub</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRepos.map((repo) => (
                <ProjectCard key={repo.id} repo={repo} featured />
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
        {repo.description || 'Projeto concluído'}
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