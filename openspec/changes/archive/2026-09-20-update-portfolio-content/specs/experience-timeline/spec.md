## ADDED Requirements

### Requirement: Cada experiência exibe empresa e período
O sistema SHALL exibir, para cada experiência da seção "My experiences", o nome da empresa e o período de atuação antes da descrição.

#### Scenario: Experiência com cargo informado
- **WHEN** a experiência da Matera é renderizada
- **THEN** a página mostra "Matera", "Analista de desenvolvimento sênior" e "Jun/2021 – atual" antes do texto descritivo

#### Scenario: Experiência sem cargo informado
- **WHEN** a experiência da SawCunha Open System é renderizada (sem cargo no modelo)
- **THEN** a página mostra "SawCunha Open System" e "Fev/2026 – atual" e nenhum elemento vazio ou separador solto é renderizado no lugar do cargo

### Requirement: Conjunto de experiências e períodos
O sistema SHALL listar exatamente as experiências abaixo, com estes dados de empresa, cargo e período.

| Empresa | Cargo | Período | Atual |
|---|---|---|---|
| Matera | Analista de desenvolvimento sênior | Jun/2021 – atual | sim |
| SawCunha Open System | — | Fev/2026 – atual | sim |
| Bytes | Analista de Sistema Pleno III | Fev/2020 – Jun/2021 | não |
| Vero Internet | Assistente em Desenvolvimento de Sistemas | Out/2017 – Jan/2020 | não |

#### Scenario: Descrições preservadas sob a empresa correta
- **WHEN** a seção é renderizada
- **THEN** a descrição de Financeiro/Bancos aparece sob Matera, a de ERP/Telecom sob Bytes, a de Android e sistemas internos sob Vero Internet e a de SCOS sob SawCunha Open System

### Requirement: Ordem e selo de experiência atual
O sistema SHALL listar as experiências atuais primeiro e as encerradas depois em ordem cronológica reversa, mantendo o selo "Atual" e o divisor destacado apenas nas experiências com `current`.

#### Scenario: Ordem de exibição
- **WHEN** a seção é renderizada
- **THEN** a ordem é Matera, SawCunha Open System, Bytes, Vero Internet

#### Scenario: Selo Atual
- **WHEN** uma experiência tem `current` verdadeiro
- **THEN** o selo "Atual" é exibido ao lado do nome da empresa; experiências encerradas não exibem o selo

### Requirement: Estrutura semântica e responsividade do cabeçalho
O nome da empresa SHALL ser um título de nível 3 e o cabeçalho da experiência (empresa, selo, cargo, período) SHALL quebrar linha sem causar rolagem horizontal em telas de 375px.

#### Scenario: Navegação por títulos
- **WHEN** um leitor de tela lista os títulos da página
- **THEN** cada empresa aparece como título nível 3 dentro da seção "My experiences"

#### Scenario: Tela estreita
- **WHEN** a viewport tem 375px de largura
- **THEN** empresa, selo, cargo e período são exibidos sem cortar texto e a página não tem rolagem horizontal
