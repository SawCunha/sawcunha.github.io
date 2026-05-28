
interface AllExperiences {
  title: string;
  experiences: Experience[];
}

interface Experience {
  description: string;
}

export const allExperiences: AllExperiences = {
  title: 'My experiences',
  experiences: [
    {
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
    }
  ]
};
