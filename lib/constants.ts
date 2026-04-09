import type { LucideIcon } from 'lucide-react';

export type Specialty = {
  title: string;
  description: string;
  example: string;
  icon: LucideIcon;
};

export type ProjectLinks = {
  github?: string;
  demo?: string;
  article?: string;
};

export type ProjectShowcase = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  links: ProjectLinks;
  image?: string;
};

export type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  metrics?: string[];
};

export type LearningItem = {
  title: string;
  description: string;
};

export const CONTACT = {
  email: 'jeferson.greenish@gmail.com',
  github: 'https://github.com/Jef-Oliver',
  linkedin: 'https://www.linkedin.com/in/jef-oliver/',
  linkedinProjects:
    'https://www.linkedin.com/in/jeefisantos/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAACc5gSoBmGoDQ8V0NvIXh_ekT6s3KOtELWc',
  resumePath: '/CV-JEFERSON-DE-OLIVEIRA-SANTOS.pdf',
} as const;

import {
  Building2,
  Gauge,
  RefreshCcw,
  Sparkles,
  Brain,
  Network,
  Boxes,
} from 'lucide-react';

export const SPECIALTIES: Specialty[] = [
  {
    title: 'Arquitetura de Sistemas',
    description:
      'Design de APIs robustas, microserviços e padrões escaláveis com foco em manutenibilidade.',
    example: 'APIs REST bem definidas + contratos claros + observabilidade.',
    icon: Building2,
  },
  {
    title: 'Otimização de Performance',
    description:
      'Queries SQL otimizadas, cache com Redis e ajustes de arquitetura para reduzir latência.',
    example: 'Redução de ~60% na latência em endpoints críticos.',
    icon: Gauge,
  },
  {
    title: 'Modernização de Legados',
    description:
      'Migração estratégica e progressiva de sistemas antigos para stacks modernas, sem parar o negócio.',
    example: 'ASP Clássico → Django/FastAPI com rollout incremental.',
    icon: RefreshCcw,
  },
];

export const PROJECTS: ProjectShowcase[] = [
  {
    id: 'kanban-equipe-produtividade',
    title: 'Kanban da equipe: produtividade e transparência',
    problem:
      'Necessidade de criar uma gestão viva do fluxo de trabalho, com clareza em tempo real sobre responsabilidade, status e comunicação entre equipes.',
    solution:
      'Desenvolvimento de uma plataforma com dashboard em tempo real (quem está online e status dos projetos), quadro Kanban dinâmico, regras de acesso por responsabilidade, notificações automatizadas por e-mail/alertas internos e perfis personalizáveis com temas e avatares.',
    result:
      'Sistema focado em produtividade e transparência, reduzindo ruído de comunicação, eliminando reuniões desnecessárias e trazendo clareza contínua sobre quem está fazendo o quê.',
    technologies: [
      'Python',
      'Django',
      'PostgreSQL',
      'Kanban',
      'Dashboard em Tempo Real',
      'Notificações por E-mail',
      'Controle de Acesso',
    ],
    links: {
      article:
        'https://www.linkedin.com/feed/update/urn:li:activity:7439372304427507712/',
    },
  },
  {
    id: 'modernizacao-ponto-digital-facial',
    title: 'Modernização do sistema de ponto digital e facial',
    problem:
      'Necessidade de modernizar um sistema crítico, exigindo cálculos à prova de falhas, maior segurança de dados e total fluidez operacional.',
    solution:
      'Revitalização arquitetural com forte foco em engenharia backend, convertendo regras legais complexas de RH e jornadas dinâmicas em cálculos automatizados. Inserção de fluxo biométrico (facial multiângulo e digital) diretamente pelo navegador web.',
    result:
      'Software de extrema robustez, experiência de marcação imediata pelos usuários, eliminação de gargalos do RH e rigoroso alinhamento à governança de TI e compliance (LGPD).',
    technologies: [
      'Python',
      'Django',
      'PostgreSQL',
      'APIs REST',
      'Docker',
      'Celery',
      'Biometria Web (Facial/Digital)',
    ],
    links: {
      article:
        'https://www.linkedin.com/feed/update/urn:li:activity:7448027457657393152/',
    },
  },
  {
    id: 'webponto-modernizacao',
    title: 'Sustentação do sistema legado de registro de ponto dos servidores',
    problem: 'Sistema legado em ASP Clássico com 15+ anos.',
    solution: 'Migração progressiva para Django com APIs RESTful.',
    result: '95% menos erros; 70% menos tempo de deploy.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Docker', 'GCP'],
    links: {},
  },
  {
    id: 'reconhecimento-facial',
    title: 'Sistema de Reconhecimento Facial',
    problem: 'Registro de ponto manual e propenso a erros.',
    solution: 'Implementação end-to-end com Python/Django e OpenCV.',
    result: 'Alta precisão; automação completa do fluxo de ponto.',
    technologies: ['Python', 'Django', 'OpenCV', 'PostgreSQL'],
    links: {},
  },
  {
    id: 'dashboards-gestao',
    title: 'Sistema de Gestão com Dashboards Interativos',
    problem: 'Relatórios manuais, lentos e sujeitos a erro.',
    solution: 'Dashboards com dados em tempo real e automações de rotinas.',
    result: 'Automação de ~80% dos relatórios.',
    technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Recharts'],
    links: {},
  },
  {
    id: 'db-optimization',
    title: 'Otimização de Banco de Dados',
    problem: 'Queries lentas impactando UX e produtividade.',
    solution: 'Índices estratégicos, tuning e cache com Redis.',
    result: 'Redução de ~60% na latência.',
    technologies: ['PostgreSQL', 'Redis', 'Python'],
    links: {},
  },
];

export const SKILLS_BY_CATEGORY = {
  backend: {
    title: 'Backend (Especialidade)',
    icon: Boxes,
    skills: [
      'Python (Django, FastAPI, Flask)',
      'Java (Spring Boot)',
      'APIs REST (arquitetura e versionamento)',
      'Celery (jobs assíncronos e filas)',
      'ASP Clássico (Legado)',
    ],
  },
  database: {
    title: 'Banco de Dados (Especialidade)',
    icon: Network,
    skills: [
      'PostgreSQL (JSONB, window functions, query optimization)',
      'MySQL, SQL Server',
      'Redis (cache, sessions)',
      'MongoDB',
      'Modelagem orientada a auditoria e compliance',
    ],
  },
  cloud: {
    title: 'Cloud & DevOps',
    icon: Building2,
    skills: [
      'Google Cloud Platform (App Engine, Cloud SQL, Cloud Storage)',
      'Docker, Docker Compose',
      'CI/CD (GitHub Actions, GitLab CI)',
      'Nginx, Apache',
    ],
  },
  ai: {
    title: 'IA & Automação',
    icon: Brain,
    skills: [
      'Reconhecimento Facial (OpenCV)',
      'Machine Learning (scikit-learn)',
      'Automação de Processos (RPA)',
      'Automação assistida por IA para desenvolvimento',
      'Web Scraping',
    ],
  },
  frontend: {
    title: 'Frontend & Integrações (Capacidade)',
    icon: Sparkles,
    skills: [
      'React, TypeScript, JavaScript (Vanilla), AJAX',
      'Next.js, Tailwind CSS, HTML5, CSS3',
      'Integrações web com biometria (facial/digital)',
      'UI/UX orientada a produtividade',
      'LGPD e segurança de dados sensíveis',
    ],
  },
} as const;

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Governo do Estado do Tocantins',
    period: 'Jun 2023 - Presente',
    position: 'Analista de Sistemas | Desenvolvedor Backend Python',
    responsibilities: [
      'Liderança técnica na modernização do Webponto',
      'Arquitetura de sistema de reconhecimento facial',
      'Implementação de pipeline CI/CD com Docker e GCP',
      'Definição de padrões de API, logging e observabilidade para serviços críticos',
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'Docker', 'GCP', 'React'],
    metrics: ['95% redução em erros', '60% melhoria em performance', '99.5% uptime em sistemas críticos'],
  },
];

export const LEARNING: LearningItem[] = [
  {
    title: 'Algoritmos de Matching e Sistemas de Recomendação',
    description: 'Sistemas de recomendação e matching por regras/dados para melhorar conversão e experiência. Buscando sempre alcançar maior precisão; app publicado na Play Store.',
  },
  {
    title: 'Inteligência Artificial e Automação de Processos',
    description: 'Explorando IA e automação para reduzir burocracia e acelerar fluxos.',
  },
  {
    title: 'Arquitetura de Microserviços',
    description: 'Padrões de comunicação, versionamento e resiliência em serviços.',
  },
  {
    title: 'Sistemas Distribuídos e Escalabilidade',
    description: 'Observabilidade, consistência e estratégias para crescer com segurança.',
  },
];

