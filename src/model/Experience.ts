interface AllExperiences {
  title: string;
  experiences: Experience[];
}

interface Experience {
  description: string;
  current?: boolean;
}

export const allExperiences: AllExperiences = {
  title: 'My experiences',
  experiences: [
    {
      current: true,
      description: `Atuo como desenvolvedor full stack no desenvolvimento e manutenção de funcionalidades de sistema do setor Financeiro/Bancos para customização de fluxos para um determinado cliente.
                    O qual atuo com as tecnologias: Java nas versões 8 e 17, Spring nas versões 2.7.X e 3.X.X, Oracle PL/SQL, ReactJs`
    },
    {
      description: `Atuei também na manutenção de sistemas ERP com a criação e correção de funcionalidade e customização para cliente com foco em soluções voltadas para empresas de Telecomunicações. 
                    Participei do levantamento de requisitos, modelagem de banco de dados e desenvolvimento de integrações com plataformas como SAP B1, ConnectMaster, RDStation, API CEP e Google Route, além de configurar scripts e rotinas em Python.`
    },
    {
      description: `Contribuí para a criação e melhoria de aplicativos Android voltados para clientes e técnicos, integrados aos sistemas ERP, otimizando processos e facilitando operações no campo.
                    No desenvolvimento de sistemas internos, atuei na manutenção e aprimoramento de soluções para controle de estoque, operações e atendimento (Call Center), incluindo integrações com sistemas como Digicade e envio de SMS,
                    além de gerar relatórios personalizados para várias áreas da empresa.
                    Minha experiência abrange o uso de tecnologias como REST API, Java EE, JBoss, Git, Java (Android), AngularJS, PHP, CodeIgniter, SQL e Python.`
    },
    {
      current: true,
      description: `Em paralelo à atuação profissional, desenvolvo a SawCunha Open System (SCOS) — organização open source focada na criação de bibliotecas e frameworks para resolver problemas reais.
                    Os projetos incluem o SawCunhaOS Foundation, com infraestrutura compartilhada para auditoria, caching e tratamento de exceções, e o SawCunhaOS BOM, para gerenciamento centralizado de dependências publicado no Maven Central.
                    Nesse contexto aprofundo estudos em Spring Boot 4.x, Spring Framework 7.x, Spring Cloud 2025, Java 25, arquitetura modular e boas práticas de design de frameworks — aplicando na prática os conceitos explorados no dia a dia profissional.`
    }
  ]
};
