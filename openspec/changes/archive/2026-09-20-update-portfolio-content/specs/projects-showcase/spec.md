## ADDED Requirements

### Requirement: Catálogo de projetos do ecossistema SCOS
O sistema SHALL exibir, nesta ordem, os projetos SawCunha Open System, SawCunhaOS Flow, SawCunhaOS Foundation, SawCunhaOS BOM e SCOS Workspace, cada um com nome, descrição, tecnologias e link para o repositório público no GitHub.

#### Scenario: Lista completa
- **WHEN** a seção "Projects" é renderizada
- **THEN** existem cinco cartões, na ordem definida, e cada link aponta para `https://github.com/SawCunhaOS/<repositório>` (a organização para o primeiro, `SawCunhaOS-Flow`, `SawCunhaOS-Foundation`, `sawcunha-open-system-bom` e `ScosWorkspace` para os demais)

### Requirement: Conteúdo do projeto Flow
O sistema SHALL descrever o SawCunhaOS Flow como motor de identidade, organização e governança de acesso para provedores de internet (ISP), em desenvolvimento, e listar as tecnologias Java 25, Spring Boot 4, PostgreSQL, Redis, Keycloak e gRPC.

#### Scenario: Cartão do Flow
- **WHEN** o cartão do Flow é renderizado
- **THEN** a descrição menciona identidade/organização/governança de acesso para ISP e os seis chips de tecnologia estão presentes

### Requirement: Conteúdo do projeto Workspace
O sistema SHALL descrever o SCOS Workspace como o workspace que reúne os repositórios do SCOS e as ferramentas de IA (Claude Code, BMAD Method e `scos-map`).

#### Scenario: Cartão do Workspace
- **WHEN** o cartão do Workspace é renderizado
- **THEN** a descrição cita Claude Code, BMAD e `scos-map` e os chips incluem "Claude Code" e "BMAD"

### Requirement: Descrições sem dados voláteis
As descrições dos projetos SHALL NOT conter contagens ou versões que mudam a cada commit (nº de skills, versões `-SNAPSHOT`, versão do BMAD).

#### Scenario: Revisão de conteúdo
- **WHEN** as descrições em `src/model/Project.ts` são revisadas
- **THEN** nenhuma contém "SNAPSHOT", número de skills nem número de versão do BMAD

### Requirement: Link de projeto acessível
O link de abertura do repositório que só contém ícone SHALL ter nome acessível que identifique o projeto e SHALL abrir em nova aba com `rel="noopener noreferrer"`; os chips de tecnologia SHALL NOT quebrar o rótulo em duas linhas.

#### Scenario: Nome acessível
- **WHEN** o link só-ícone do projeto "SawCunhaOS BOM" é lido por tecnologia assistiva
- **THEN** o nome anunciado é "Abrir SawCunhaOS BOM no GitHub" (ou equivalente que contenha o nome do projeto)

#### Scenario: Chip longo
- **WHEN** um chip como "Spring Boot 4" ou "Claude Code" é renderizado em um cartão de 18,75rem
- **THEN** o texto permanece em uma única linha
