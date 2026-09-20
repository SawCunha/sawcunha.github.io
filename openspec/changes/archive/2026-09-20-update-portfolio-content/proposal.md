## Why

O conteúdo do portfólio ficou defasado em relação ao trabalho real: as experiências não dizem onde nem quando atuei, os projetos listam só a organização SCOS, o BOM e a Foundation (falta o produto `Flow` e o workspace de ferramentas de IA), e as skills não refletem a stack construída no SCOS (PostgreSQL, Redis, Keycloak, Liquibase, gRPC, Testcontainers...) nem o uso de Claude Code e BMAD. O About também não leva o visitante às redes sociais — só o rodapé leva.

## What Changes

- **Experiences**: cada experiência passa a exibir **empresa**, **cargo** (quando informado) e **período**. Empresas/períodos informados pelo autor: Matera (jun/2021 – atual, Analista de desenvolvimento sênior), Bytes (fev/2020 – jun/2021, Analista de Sistema Pleno III), Vero Internet (out/2017 – jan/2020, Assistente em Desenvolvimento de Sistemas) e SawCunha Open System (fev/2026 – atual, projeto próprio).
- **Projects**: atualizar a lista com base no repo `SCOS` — descrições e tecnologias revisadas de BOM e Foundation (que hoje têm módulos privacy/web/audit/jdempotent/archtest), incluir **SawCunhaOS Flow** (motor de identidade/organização/governança de acesso para ISP) e **SCOS Workspace** (skills do Claude Code, BMAD e `scos-map`).
- **Skills**: adicionar **Claude Code** e **BMAD**; incluir as tecnologias reais do SCOS (Maven, PostgreSQL, Redis, Keycloak, Liquibase, gRPC, Testcontainers, OpenAPI, Git, DDD); agrupar por categoria para o grid continuar legível com ~25 itens; `rating` deixa de ser obrigatório (não é exibido na UI e não faz sentido inventar autoavaliação para os itens novos).
- **About**: adicionar os links de redes sociais (GitHub, LinkedIn, Instagram) abaixo do texto, com nome acessível e alvo de toque ≥ 44px. Os links passam a vir de uma única fonte de dados, compartilhada com o rodapé (que continua exibindo-os).
- **UI/UX** (guia da skill `ui-ux-pro-max`): manter a paleta e a tipografia atuais; aplicar só o que os novos elementos exigem — `aria-label` em links só com ícone, ícones decorativos com `aria-hidden`, chips sem quebra de linha, foco visível e contraste ≥ 4.5:1.

Fora de escopo: trocar paleta/fonte, exibir `rating` como estrelas, novas seções, testes de regressão visual.

## Capabilities

### New Capabilities

- `experience-timeline`: experiências com empresa, cargo opcional e período, mantendo o selo "Atual" para as vigentes.
- `projects-showcase`: catálogo de projetos alinhado ao ecossistema SCOS (organização, BOM, Foundation, Flow, Workspace).
- `skills-catalog`: skills agrupadas por categoria, incluindo Claude Code, BMAD e a stack do SCOS, com ícones locais.
- `about-social-links`: links de redes sociais na seção About, com fonte de dados única compartilhada com o rodapé.

### Modified Capabilities

<!-- Nenhuma: openspec/specs/ está vazio; os specs de portfolio-modernization ainda não foram arquivados. -->

## Impact

- **Dados**: `src/model/Experience.ts`, `Project.ts`, `Skill.ts`, novo `src/model/SocialLink.ts`.
- **UI**: `pages/experiences`, `pages/skills`, `pages/about`; `components/footer` (passa a consumir o modelo de links); `components/icon/socicalMedia` (nome acessível, `rel`, alvo 44px); `components/project` (nome acessível no link só-ícone); `components/skill` (ícone decorativo); novo `components/socialLinks`.
- **Assets**: 11 novos SVGs em `public/icons/` — 9 do Simple Icons (CC0) e 2 monogramas próprios (BMAD, DDD).
- **Testes**: primeiro arquivo Vitest do repo (consistência dos dados de skills/experiências e links do About).
- **Dependências**: nenhuma nova. **Sem breaking change** de API; `Skill.rating` passa de obrigatório para opcional.
- **Pendências de confirmação**: (1) qual empresa corresponde a "ERP Telecom" e qual a "Android/sistemas internos" — assumido Bytes e Vero Internet respectivamente; (2) grafia da empresa: "Byytes" na resposta original, "Bytes" no proposal atual; (3) período do SCOS derivado do primeiro commit (fev/2026); (4) cargo do SCOS não informado (o da Vero Internet foi informado: Assistente em Desenvolvimento de Sistemas).
