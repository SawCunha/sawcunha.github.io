export interface Project {
  technologies: string[];
  name: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    technologies: ['Java', 'Spring Boot', 'Redis', 'Couchbase'],
    name: 'Jdempotent',
    description: `Projeto com foco para obter Idempotência nas APIs e nas integrações com Mensageria.
      Com funcionamento para projetos springs atendendo hoje 2 banco de dados no SQL sendo: Redis e Couchbase.`,
    url: 'https://github.com/SawCunha/Jdempotent'
  },
  {
    technologies: ['Java', 'Android', 'Node', 'JavaScript', 'Express'],
    name: 'Projeto SINE',
    description: `Projeto criado na faculdade, para criação de Aplicativo para exibição de vagas de emprego do Brasil. 
      Onde foi criado API para acesso às informações do Site Nacional de Empregos (SINE) e o Aplicativo Android para consumir a API.`,
    url: 'https://github.com/SawCunha/Projeto_SINE'
  },
  {
    technologies: ['React', 'MUI'],
    name: 'Portfolio SawCunha',
    description: 'Projeto da criação do Portfolio em React e MUI.',
    url: 'https://github.com/SawCunha/developer_portfolio'
  },
  {
    technologies: ['Java', 'String Boot', 'Feing'],
    name: 'Trabalha Brasil API',
    description:
      'Esté projeto tem como intuito de utilizar a API do Trabalha Brasil a partir do framework "Feign".',
    url: 'https://github.com/SawCunha/TrabalhaBrasilAPI'
  }
];
