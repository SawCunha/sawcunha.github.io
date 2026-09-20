# skills-catalog Specification

## Purpose
TBD - created by archiving change update-portfolio-content. Update Purpose after archive.

## Requirements

### Requirement: Claude Code e BMAD nas skills
O sistema SHALL listar "Claude Code" e "BMAD" na seção "Skills", na categoria "IA e processo", cada um com ícone local.

#### Scenario: Categoria de IA
- **WHEN** a seção "Skills" é renderizada
- **THEN** o grupo "IA e processo" contém exatamente "Claude Code" e "BMAD"

### Requirement: Stack do SCOS refletida nas skills
O sistema SHALL incluir, além das skills existentes, Maven, gRPC, OpenAPI, PostgreSQL, Redis, Liquibase, Keycloak, Git, Testcontainers e DDD.

#### Scenario: Skills novas presentes
- **WHEN** a seção "Skills" é renderizada
- **THEN** cada um dos itens acima aparece uma única vez, e as 12 skills anteriores (Java, Spring Boot, Spring, Android, Docker, Jest, React, Redux, TypeScript, Clean Code, JUnit, Python) continuam presentes

### Requirement: Agrupamento por categoria
O sistema SHALL agrupar as skills em categorias exibidas na ordem: "Back-end e linguagens", "Front-end e mobile", "Dados e infraestrutura", "Qualidade e arquitetura", "IA e processo". Toda skill SHALL pertencer a exatamente uma categoria e cada categoria SHALL ter um título de nível 3.

#### Scenario: Ordem e títulos
- **WHEN** a seção é renderizada
- **THEN** existem cinco títulos nível 3 na ordem definida e nenhuma categoria vazia é exibida

#### Scenario: Skill sem categoria válida
- **WHEN** uma skill declara uma categoria que não está em `skillCategories`
- **THEN** o teste de dados falha (e o TypeScript rejeita a atribuição)

### Requirement: Ícones locais, existentes e legíveis
Todo `skill.icon` SHALL apontar para um arquivo existente em `public/icons/`. Cada ícone SHALL ter contraste mínimo de 3:1 contra o fundo `#00001c` e SHALL ser tratado como decorativo (texto alternativo vazio), pois o nome da skill está visível ao lado.

#### Scenario: Arquivo existe
- **WHEN** o teste de dados percorre todas as skills
- **THEN** todos os caminhos de ícone resolvem para arquivos existentes

#### Scenario: Ícone escuro
- **WHEN** a cor de marca de um ícone tem contraste inferior a 3:1 contra `#00001c`
- **THEN** o SVG usa `#D7E5EC` como preenchimento

#### Scenario: Leitor de tela
- **WHEN** um leitor de tela percorre o card da skill "Java"
- **THEN** anuncia "Java" uma única vez (sem "Skill: Java" adicional vindo do ícone)

### Requirement: Rating opcional e não exibido
O campo `rating` SHALL ser opcional no modelo `Skill` e SHALL NOT ser exibido na interface; skills novas SHALL NOT receber `rating`.

#### Scenario: Skill sem rating
- **WHEN** "Claude Code" é declarada sem `rating`
- **THEN** o projeto compila e o card é renderizado normalmente
