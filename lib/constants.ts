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
  whatsapp: '5563992678596',
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
    title: 'Construção de Sistemas Sólidos',
    description:
      'Criação de sistemas organizados e fáceis de manter, focando em código limpo e estruturas que aguentam o crescimento do projeto sem dor de cabeça.',
    example: 'APIs que funcionam sem erro, fáceis de integrar e prontas para evoluir conforme o negócio cresce.',
    icon: Building2,
  },
  {
    title: 'Sistemas Rápidos e Estáveis',
    description:
      'Ajustes no banco de dados e no código para deixar tudo mais veloz, garantindo que o sistema não trave mesmo quando muita gente estiver usando.',
    example: 'Consegui deixar as telas e o processamento de dados 60% mais rápidos em sistemas de grande escala.',
    icon: Gauge,
  },
  {
    title: 'Renovação de Sistemas Antigos',
    description:
      'Troca de tecnologias antigas por ferramentas modernas de forma segura, garantindo que a empresa continue rodando enquanto o software é atualizado.',
    example: 'Levei sistemas de 15 anos em ASP Clássico para o Django, trazendo mais segurança e facilidade para criar novas funções.',
    icon: RefreshCcw,
  },
  {
    title: 'Conexão com o Mundo Real',
    description:
      'Coloco o navegador para conversar com equipamentos físicos, como leitores de digitais e câmeras para reconhecimento facial, tudo de forma simples e segura.',
    example: 'Reconhecimento facial e leitura de digital funcionando direto no Chrome, com foco total na privacidade dos dados.',
    icon: Gauge,
  },
  {
    title: 'Automação de Processos Difíceis',
    description:
      'Transformo leis, cálculos de folha e regras de RH complicadas em processos automáticos que rodam sozinhos, eliminando o erro humano.',
    example: 'Cálculos pesados de ponto e RH que antes eram manuais agora rodam em segundos em segundo plano, sem travar o sistema.',
    icon: RefreshCcw,
  },
  {
    title: 'Sistemas Sempre Online',
    description:
      'Organizo o ambiente onde o software mora (na nuvem) para que ele nunca caia e seja fácil de atualizar, usando tecnologias como Docker e Google Cloud.',
    example: 'Configuração de servidores que se recuperam sozinhos e bancos de dados seguros e sempre disponíveis.',
    icon: Network,
  },
];

export const PROJECTS: ProjectShowcase[] = [
  {
    id: 'kanban-equipe-produtividade',
    title: 'Gerenciamento de Equipe e Produtividade',
    problem:
      'A equipe precisava de um jeito fácil de ver o que cada um estava fazendo, sem precisar de reuniões longas ou trocas constantes de mensagens.',
    solution:
      'Criei uma plataforma com quadros Kanban e um painel que mostra em tempo real quem está online e o status de cada tarefa, com alertas automáticos.',
    result:
      'Reduzimos muito a necessidade de reuniões de status e as dúvidas sobre quem é o responsável por cada parte do projeto.',
    technologies: [
      'Python',
      'Django',
      'PostgreSQL',
      'Kanban',
      'Dashboard em Tempo Real',
      'Notificações por E-mail',
    ],
    links: {
      article:
        'https://www.linkedin.com/feed/update/urn:li:activity:7439372304427507712/',
    },
  },
  {
    id: 'modernizacao-ponto-digital-facial',
    title: 'Modernização do Ponto Digital e Facial',
    problem:
      'O sistema antigo era lento e os cálculos de RH eram muito complexos para serem feitos manualmente ou em sistemas limitados.',
    solution:
      'Reconstruí o sistema focando em automatizar as regras de RH e integrei reconhecimento facial multiângulo direto no navegador.',
    result:
      'O sistema ficou extremamente rápido, seguro e totalmente dentro das leis de proteção de dados (LGPD), facilitando a vida do RH.',
    technologies: [
      'Python',
      'Django',
      'PostgreSQL',
      'APIs REST',
      'Docker',
      'Celery',
      'Biometria Web',
    ],
    links: {
      article:
        'https://www.linkedin.com/feed/update/urn:li:activity:7448027457657393152/',
    },
    image: '/projects-images/ponto-facial.png',
  },
  {
    id: 'webponto-modernizacao',
    title: 'Sustentação e Evolução de Sistema Legado',
    problem: 'O sistema usado há mais de 15 anos já não aguentava o volume de dados e era muito difícil de atualizar.',
    solution: 'Fiz uma migração planejada para Django, criando APIs modernas que permitem o sistema crescer sem quebrar o que já funciona.',
    result: 'Reduzimos os erros em 95% e agora conseguimos entregar novas funcionalidades muito mais rápido.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Docker', 'GCP'],
    links: {},
  },
  {
    id: 'reconhecimento-facial',
    title: 'Sistema de Reconhecimento Facial Próprio',
    problem: 'O registro de ponto dependia de equipamentos caros e era difícil de integrar com o software de gestão.',
    solution: 'Implementei uma solução que usa a câmera do computador para identificar o rosto do funcionário com alta precisão.',
    result: 'Automação completa do registro de ponto, sem necessidade de hardware extra e com custo quase zero.',
    technologies: ['Python', 'Django', 'OpenCV', 'PostgreSQL'],
    links: {},
    image: '/projects-images/facial.png',
  },
  {
    id: 'dashboards-gestao',
    title: 'Dashboards Inteligentes para Gestão',
    problem: 'A gestão perdia horas criando relatórios manuais que muitas vezes chegavam com dados desatualizados.',
    solution: 'Desenvolvi painéis interativos que buscam os dados direto do banco e mostram tudo em tempo real com gráficos claros.',
    result: 'Automatizamos 80% dos relatórios, dando muito mais agilidade para a tomada de decisão da equipe.',
    technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Recharts'],
    links: {},
  },
  {
    id: 'db-optimization',
    title: 'Otimização e Performance de Banco de Dados',
    problem: 'O sistema estava ficando lento com o aumento de usuários, prejudicando o uso no dia a dia.',
    solution: 'Refiz as consultas mais pesadas e instalei um sistema de cache inteligente para os dados mais acessados.',
    result: 'Conseguimos reduzir o tempo de espera das telas em 60%, deixando o sistema leve e rápido de novo.',
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
      'Angular 19',
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
      'Engenharia de Prompts (Otimização e Debug)',
      'Criação de Agentes Inteligentes e Uso de MCPs',
      'Reconhecimento Facial (OpenCV)',
      'Machine Learning (scikit-learn)',
      'Automação de Processos (RPA)',
      'Web Scraping',
    ],
  },
  frontend: {
    title: 'Frontend & Integrações (Capacidade)',
    icon: Sparkles,
    skills: [
      'React, Angular 19, TypeScript, JavaScript',
      'Next.js, Tailwind CSS, Bootstrap, HTML5, CSS3',
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
    technologies: ['Python', 'Django', 'Angular', 'Java Spring Boot', 'PostgreSQL', 'Docker', 'GCP'],
    metrics: ['95% redução em erros', '60% melhoria em performance', '99.5% uptime em sistemas críticos'],
  },
];

export const LEARNING: LearningItem[] = [
  {
    title: 'Engenharia de IA e LLMs',
    description: 'Mergulhando de cabeça em como as IAs realmente funcionam. Estou estudando LLMs, embeddings e toda a engenharia por trás para criar ferramentas que não só respondem, mas resolvem problemas reais com confiança.',
  },
  {
    title: 'Sistemas de Recomendação e Matching',
    description: 'Aprimorando algoritmos que conectam os dados certos às pessoas certas. Já tenho um app na Play Store rodando com essas lógicas, e agora o foco é levar essa precisão para um novo nível.',
  },
  {
    title: 'Arquitetura de Microserviços e Escala',
    description: 'Estudando como desenhar sistemas que aguentam o tranco. O objetivo é construir serviços que se comunicam bem, são fáceis de atualizar e nunca deixam o usuário na mão, não importa o volume de acessos.',
  },
];

