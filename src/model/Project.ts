export interface Project {
  technologies: string[];
  name: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    technologies: ['Java 25', 'Spring Boot 4', 'Open Source'],
    name: 'SawCunha Open System',
    description:
      'Organização open source focada na criação de bibliotecas, frameworks e sistemas para resolver problemas reais. Reúne o BOM (versões), a Foundation (infraestrutura compartilhada) e o Flow (produto) em uma cadeia de dependência coesa e reutilizável.',
    url: 'https://github.com/SawCunhaOS'
  },
  {
    technologies: ['Java 25', 'Spring Boot 4', 'PostgreSQL', 'Redis', 'Keycloak', 'gRPC'],
    name: 'SawCunhaOS Flow',
    description:
      'Motor de identidade, organização e governança de acesso para provedores de internet (ISP), em desenvolvimento. Modela empresas, departamentos e cargos e tem como objetivo o acesso Zero Trust por jornada de trabalho e um Kill Switch de sessões, tudo via API e gRPC.',
    url: 'https://github.com/SawCunhaOS/SawCunhaOS-Flow'
  },
  {
    technologies: ['Java 25', 'Spring Boot 4', 'Maven'],
    name: 'SawCunhaOS Foundation',
    description:
      'Biblioteca fundacional Java com infraestrutura compartilhada para todos os projetos SCOS: auditoria, masking de PII (LGPD), tratamento de exceções (RFC 9457), idempotência, cache e utilitários.',
    url: 'https://github.com/SawCunhaOS/SawCunhaOS-Foundation'
  },
  {
    technologies: ['Java 25', 'Maven', 'Spring Boot 4'],
    name: 'SawCunhaOS BOM',
    description:
      'Bill of Materials (BOM) que padroniza as versões das dependências e as convenções de build (enforcer, compilador, análise) de todos os projetos SCOS. Não contém código, só governança de dependências. Publicado no Maven Central.',
    url: 'https://github.com/SawCunhaOS/sawcunha-open-system-bom'
  },
  {
    technologies: ['Claude Code', 'BMAD', 'Git'],
    name: 'SCOS Workspace',
    description:
      'Workspace que reúne os repositórios do SCOS lado a lado e centraliza as ferramentas de IA usadas neles: skills do Claude Code, BMAD Method e o scos-map, índice estrutural dos repositórios.',
    url: 'https://github.com/SawCunhaOS/ScosWorkspace'
  }
];
