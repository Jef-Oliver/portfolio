export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  team: string;
  technologies: string[];
  linkedinUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  images?: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "site-grupo-artpalco",
    title: "Site do Grupo Artpalco",
    category: "Website Institucional",
    description: "Website institucional moderno, com foco em performance, SEO e experiência do usuário.",
    year: "2025",
    team: "Equipe",
    technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7376267861905997824/",
    featured: true,
    images: [
      "/projects-images/im1.png"
    ]
  },
  {
    id: "sistema-alugueis",
    title: "Sistema de Controle de Aluguéis",
    category: "Gestão Imobiliária",
    description: "Sistema completo para gestão de aluguéis imobiliários com controle de contratos, pagamentos, manutenções e relatórios financeiros automatizados.",
    year: "2024",
    team: "Individual",
    technologies: ["Python", "Django", "PostgreSQL", "APIs REST"],
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7359332775478411266/",
    featured: true,
    images: [
      "/projects-images/aluguel.png"
    ]
  },
  {
    id: "sistema-ponto",
    title: "Sistema de Ponto",
    category: "Controle de Acesso",
    description: "Sistema de controle de ponto com reconhecimento facial, automação de processos e integração com sistemas de RH.",
    year: "2024",
    team: "Equipe",
    technologies: ["Python", "OpenCV", "IA/ML", "Automação"],
    linkedinUrl: "https://www.linkedin.com/in/jeefisantos/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAACc5gSoBmGoDQ8V0NvIXh_ekT6s3KOtELWc",
    featured: true,
    images: [
      "/projects-images/ponto1.png",
      "/projects-images/ponto2.png",
      "/projects-images/ponto3.png",
      "/projects-images/ponto4.png"
    ]
  },
  {
    id: "palestra-reconhecimento-facial",
    title: "Palestra: Reconhecimento Facial em Python e OpenCV",
    category: "Educação & IA",
    description: "Palestra técnica sobre implementação de sistemas de reconhecimento facial utilizando Python e OpenCV para controle de acesso e automação.",
    year: "2024",
    team: "Individual",
    technologies: ["Python", "OpenCV", "IA/ML", "Computer Vision"],
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7133957650156765184/",
    featured: true,
    images: [
      "/projects-images/facial.png"
    ]
  },
  {
    id: "posse-digital-efetivos",
    title: "Posse Digital - Efetivos",
    category: "Gestão de Recursos Humanos",
    description: "Sistema digital para gestão de posse de funcionários efetivos com automação de processos burocráticos e controle de documentação.",
    year: "2024",
    team: "Equipe",
    technologies: ["Python", "Django", "PostgreSQL", "Automação", "APIs"],
    linkedinUrl: "https://www.linkedin.com/in/jeefisantos/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAACc5gSoBmGoDQ8V0NvIXh_ekT6s3KOtELWc",
    featured: true,
    images: [
      "/projects-images/posse1.png",
      "/projects-images/posse2.png",
      "/projects-images/posse3.png"
    ]
  },
  {
    id: "automacao-corporativa",
    title: "Automação Corporativa",
    category: "Processos & Dashboards",
    description: "Sistema automatizado para processos corporativos com APIs REST, integração com bancos de dados e dashboards em tempo real.",
    year: "2024",
    team: "Equipe",
    technologies: ["Python", "Django", "PostgreSQL", "Dashboards"],
    featured: false,
    images: []
  },
  {
    id: "gestao-financeira",
    title: "Sistema de Gestão Financeira",
    category: "Controle & Relatórios",
    description: "Sistema de gestão financeira empresarial com controle de receitas, despesas, fluxo de caixa e relatórios automatizados.",
    year: "2024",
    team: "Individual",
    technologies: ["Python", "Flask", "SQLite", "APIs"],
    featured: false,
    images: []
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    category: "Vendas Online",
    description: "Plataforma de e-commerce completa com gestão de produtos, carrinho de compras, pagamentos e painel administrativo.",
    year: "2023",
    team: "Individual",
    technologies: ["Python", "Django", "PostgreSQL", "Stripe"],
    featured: false,
    images: []
  },
  {
    id: "gestao-estoque",
    title: "Sistema de Gestão de Estoque",
    category: "Controle & Rastreamento",
    description: "Sistema de gestão de estoque com controle de entrada/saída, alertas de reposição e relatórios de movimentação.",
    year: "2023",
    team: "Equipe",
    technologies: ["Python", "FastAPI", "MongoDB", "Redis"],
    featured: false,
    images: []
  }
];

// Função para obter projetos em destaque
export const getFeaturedProjects = () => projects.filter(project => project.featured);

// Função para obter todos os projetos
export const getAllProjects = () => projects;

// Função para obter projeto por ID
export const getProjectById = (id: string) => projects.find(project => project.id === id);
