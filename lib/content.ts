export const identity = {
  name: "Lucas Guerra",
  title: "Software Engineering & AI",
  location: "São Paulo, SP",
  heroHeadline: "Lucas Guerra",
  subtitle:
    "Desenvolvo e integro soluções de Inteligência Artificial em produtos corporativos e automação de negócios — de microserviços e APIs REST a agentes de IA em aplicações web e mobile.",
  cvFile: "/lucas-guerra-cv.pdf",
};

export const links = {
  email: "lucasrochag9@gmail.com",
  phone: "+55 (11) 97743-2902",
  phoneHref: "tel:+5511977432902",
  linkedin: "https://www.linkedin.com/in/lcsrg",
  github: "https://github.com/lcs-rg",
};

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export const about = {
  heading: "Sobre",
  lead:
    "Transformo modelos de IA emergentes em ferramentas funcionais, escaláveis e focadas no negócio.",
  paragraph:
    "Sou estudante de Engenharia de Software com experiência prática no desenvolvimento e integração de soluções de Inteligência Artificial para produtos e automação de negócios. Atuo com microserviços, APIs REST e agentes de IA integrados a aplicações web e mobile (Java, Spring Boot, Python, FastAPI e LLMs), com forte ênfase em experiência do usuário e impacto mensurável.",
  facts: [
    { label: "Função", value: "Software Engineering & AI" },
    { label: "Base", value: "São Paulo, SP" },
    { label: "Formação", value: "Engenharia de Software · FIAP" },
    { label: "Idiomas", value: "EN B2 · ES B1 · Mandarin A1" },
  ],
};

export const stackGroups = [
  {
    title: "IA & Automação",
    description: "Agentes, integração de LLMs e visão computacional em produção.",
    items: [
      "LLM Integration",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "Semantic Embeddings",
      "Computer Vision",
    ],
  },
  {
    title: "Linguagens & Frameworks",
    description: "Backend tipado, APIs e interfaces web e mobile.",
    items: ["Java", "Spring Boot", "Python", "FastAPI", "Angular", "TypeScript", "React Native"],
  },
  {
    title: "Dados & Infraestrutura",
    description: "Bancos relacionais, containers e nuvem com entrega contínua.",
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "GCP",
      "AWS",
      "Terraform",
      "Git/GitHub",
      "GitHub Actions",
    ],
  },
  {
    title: "Conceitos & Metodologias",
    description: "Arquitetura, qualidade e métodos de trabalho.",
    items: [
      "REST APIs",
      "Microservices",
      "Arquitetura desacoplada",
      "Clean Architecture",
      "DDD",
      "CI/CD",
      "Scrum/Kanban",
    ],
  },
];

export const experience = [
  {
    company: "MC1",
    role: "Software Engineering & AI Intern",
    period: "Set 2026 — atual",
    summary:
      "Integro inteligência artificial ao núcleo de produtos da empresa, do modelo em nuvem ao aplicativo que a equipe de campo usa todos os dias.",
    highlights: [
      "Desenvolvi e integrei um microserviço de chatbot de IA em Python (FastAPI/LLM) para o aplicativo mobile Wincorce, assistente virtual em tempo real para equipes de campo.",
      "Sustentei e evoluí o produto de Computer Vision e Reconhecimento de Imagem (Retail Execution), com apoio analítico e operacional a representantes comerciais e times de trade marketing na auditoria de gôndola.",
      "Garanti estabilidade, integração suave de dados e baixa latência entre serviços de IA, arquitetura de backend e infraestrutura em nuvem (GCP), entregando ferramentas que simplificam o fluxo diário de milhares de usuários.",
    ],
    tags: ["Python", "FastAPI", "LLM", "Computer Vision", "GCP", "Microservices"],
    metrics: [
      { value: "Milhares", label: "de usuários atendidos diariamente" },
      { value: "Tempo real", label: "assistente para equipes de campo" },
    ],
  },
  {
    company: "Medsafe",
    role: "Full Stack Software Engineering Intern",
    period: "Mar 2026 — Ago 2026",
    summary:
      "Evoluí plataformas de saúde web e mobile com alta confiabilidade, incluindo um assistente de IA para verificação de dosagem de medicamentos.",
    highlights: [
      "Modelei e integrei um assistente de IA em Python, com templates de prompt e APIs REST consumidas por aplicativo React Native, ajudando equipes de enfermagem a verificar dosagens com rapidez e precisão em ambientes críticos de saúde.",
      "Contribuí para a evolução de aplicações de saúde web e mobile (Java, Spring Boot, Angular, React Native, MySQL) que operam em mais de 1.700 unidades em 220+ cidades.",
      "Refatorei endpoints de backend e interfaces frontend, implementando fluxos de apoio à decisão clínica com alta confiabilidade e melhorias contínuas de usabilidade.",
    ],
    tags: ["Python", "LLM", "React Native", "Java", "Spring Boot", "Angular", "MySQL"],
    metrics: [
      { value: "1.700+", label: "unidades operando a plataforma" },
      { value: "220+", label: "cidades atendidas" },
      { value: "~65.000", label: "consultas mensais" },
    ],
  },
];

export const projects = {
  heading: "Projetos",
  note:
    "Iniciativas próprias em desenvolvimento no momento. Cada card será atualizado à medida que evoluírem.",
  items: [
    {
      tag: "Full Stack + IA",
      title: "Vaga+",
      description: "Plataforma de vagas com recomendação por IA e busca inteligente.",
      url: "https://vagamais.vercel.app/",
    },
    {
      tag: "Full Stack",
      title: "Studio Fabiana Kence",
      description: "Sistema de agendamento para estúdio de beleza com painel administrativo.",
      url: "https://studio-fabiana-kence-zd23.vercel.app/login",
    },
    {
      tag: "Full Stack",
      title: "Vital Academia",
      description: "Site institucional para academia com aulas e planos.",
      url: "https://vital-ativa-academia.vercel.app/",
    },
  ],
};

export const education = {
  heading: "Educação",
  entries: [
    {
      school: "FIAP — Higher Education Institute",
      degree: "Bacharelado em Engenharia de Software",
      period: "Conclusão prevista: dez 2028",
      detail: null,
    },
    {
      school: "iCEV — Higher Education Institute",
      degree: "Bacharelado em Engenharia de Software",
      period: "Transferido",
      detail: "GPA 8,7/10,0",
    },
  ],
  languages: [
    { language: "Inglês", level: "B2 — Intermediário superior" },
    { language: "Espanhol", level: "B1 — Intermediário" },
    { language: "Mandarim", level: "A1 — Básico" },
  ],
};

export const contact = {
  heading: "Contato",
  intro: "Vamos conversar sobre engenharia de software e inteligência artificial.",
};
