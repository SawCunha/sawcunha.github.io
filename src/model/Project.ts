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
      'Organização open source focada na criação de bibliotecas, frameworks e sistemas para resolver problemas reais. Reúne projetos como Foundation (infraestrutura compartilhada) e BOM (gerenciamento de dependências) para construir uma plataforma coesa e reutilizável.',
    url: 'https://github.com/SawCunhaOS'
  },
  {
    technologies: ['Java 25', 'Maven', 'Spring Boot 4'],
    name: 'SawCunhaOS BOM',
    description:
      'Bill of Materials (BOM) para gerenciamento centralizado de dependências nos projetos SCOS. Garante consistência de versões entre todos os módulos da plataforma. Publicado no Maven Central.',
    url: 'https://github.com/SawCunhaOS/sawcunha-open-system-bom'
  },
  {
    technologies: ['Java 25', 'Spring Boot 4', 'Shell'],
    name: 'SawCunhaOS Foundation',
    description:
      'Framework de fundação com infraestrutura compartilhada, utilitários de integração, auditoria, tratamento de exceções, caching e componentes transversais para todos os projetos SCOS.',
    url: 'https://github.com/SawCunhaOS/SawCunhaOS-Foundation'
  }
];
