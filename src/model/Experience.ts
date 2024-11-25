
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
      description: `Atuei como desenvolvedor full stack no desenvolvimento e manutenção de sistemas ERP, com foco em soluções voltadas para empresas de telecomunicações. 
      Participei do levantamento de requisitos, modelagem de banco de dados e desenvolvimento de integrações com plataformas como SAP B1, ConnectMaster, RDStation, API CEP e Google Route, além de configurar scripts e rotinas em Python.
                    Contribuí para a criação e melhoria de aplicativos Android voltados para clientes e técnicos, integrados aos sistemas ERP, otimizando processos e facilitando operações no campo. 
                    Também participei da implantação do sistema ERP e do SAP em diversas unidades da empresa, bem como da fusão da City10 Telecom com outras sete empresas para formar a Vero Internet.
                    No desenvolvimento de sistemas internos, atuei na manutenção e aprimoramento de soluções para controle de estoque, operações e atendimento (Call Center), incluindo integrações com sistemas como Digicade e envio de SMS, 
                    além de gerar relatórios personalizados para várias áreas da empresa.
                    Minha experiência abrange o uso de tecnologias como REST API, Java EE, JBoss, Git, Java (Android), AngularJS, PHP, CodeIgniter, SQL e Python.`
    }
  ]
};
