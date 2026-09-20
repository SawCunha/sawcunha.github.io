## Context

O portfólio é uma SPA estática (React 19 + MUI 9 + styled-components, Vite, deploy em GitHub Pages). Todo o conteúdo mora em `src/model/*.ts` como dados tipados; as páginas em `src/pages/*` só renderizam. Estado atual relevante:

- `Experience` tem só `description` e `current?` — sem empresa, cargo ou período.
- `Skill` tem `{icon, name, rating}`; `rating` nunca é exibido. O grid é plano (12 itens) e o ícone usa `alt="Skill: <nome>"` ao lado do nome visível (leitura duplicada por leitor de tela). `public/icons/git.svg` existe mas não é usado.
- Os links de redes sociais estão hard-coded em `components/footer/Footer.tsx`; `IconSocialMedia` é um `<a target="_blank">` só com ícone, **sem nome acessível**, sem `rel` e com alvo de ~38px.
- `Project` renderiza um segundo link só com `OpenInNewIcon`, também sem nome acessível.
- Tema: fundo `#00001c`, texto `#80dbd9` / `#D7E5EC`, fonte Montserrat, chips em gradiente `#00f5a0 → #00d9f5` com texto `#1f2626`. Definido na change `portfolio-modernization`; **não muda aqui**.
- Não há testes hoje (`find src -name '*.test.*'` vazio), embora `vitest` + `jsdom` + Testing Library estejam instalados.

Fonte do conteúdo novo: repo `~/Projetos/SCOS` (READMEs de Flow/Foundation/BOM/Workspace, `AGENTS.md`, `_bmad/_config/manifest.yaml`) e dados informados pelo autor (empresas e períodos).

A skill `ui-ux-pro-max` foi consultada. Ela sugeriu um design system genérico (flat, slate + dourado, Space Mono); descartado por contrariar a paleta/tipografia já decididas. Foram aproveitadas só as regras aplicáveis: nome acessível em controles só com ícone, ícone decorativo com `aria-hidden`/`alt=""`, chip/label sem quebra de linha, foco visível, contraste ≥ 4.5:1 (texto) e ≥ 3:1 (ícone).

## Goals / Non-Goals

**Goals:**
- Experiências com empresa, cargo (opcional) e período, reordenadas (atuais primeiro, depois cronológico reverso).
- Projetos e skills refletindo o que o SCOS realmente é/usa, incluindo Claude Code e BMAD.
- Links de redes sociais no About, com fonte de dados única compartilhada com o rodapé.
- Corrigir, de passagem e sem escopo extra, os controles só-ícone que os novos elementos reutilizam (social e link de projeto).

**Non-Goals:**
- Trocar paleta, fonte ou layout geral; exibir `rating` como estrelas; novas seções ou rotas; i18n; CMS/JSON externo.
- Adicionar dependências (nem `simple-icons` como pacote — os SVGs são copiados uma vez).
- Testes visuais/E2E.

## Decisions

**1. `Experience` ganha `company`, `role?` e `period` (string já formatada).**
`period: 'Jun/2021 – atual'`. Alternativa descartada: `{start: Date, end?: Date}` + formatador — é cálculo e i18n que ninguém pediu, e o texto é exibido literalmente. `current` continua sendo a flag explícita do selo "Atual" (não derivada de `end`).

**2. Mapeamento experiência → empresa (dado do autor + inferência).**
Matera ← "Financeiro/Bancos" (informado como atual, sênior). SawCunha Open System ← bloco SCOS (período: primeiro commit do BOM, 2026‑02‑13). Bytes ← "ERP Telecom" (SAP B1, ConnectMaster, RDStation, Python; fev/2020–jun/2021) e Vero Internet ← "Android + sistemas internos" (Java EE, JBoss, PHP, call center; out/2017–jan/2020). Foi inferido por faixa de datas e por Vero ser um provedor de internet, e **confirmado pelo autor**.
Ordem: atuais primeiro (Matera, SCOS), depois reverso-cronológico (Bytes, Vero).

**3. Layout da experiência: cabeçalho antes da descrição.**
Linha 1: `<h3>` empresa (via `SubTitle component="h3"`) + selo "Atual" quando aplicável, com `flex-wrap`. Linha 2: `cargo · período` em `Text` com `color="textSecondary"` (`#D7E5EC`, contraste alto). Sem cargo → só o período (nenhum elemento vazio). Reaproveita `Divider`, `SubTitle`, `Text`, `CurrentBadge`; nenhum componente novo.

**4. Projetos = só dados.**
`Project` mantém o formato. Cinco itens: SawCunha Open System, SawCunhaOS Flow, SawCunhaOS Foundation, SawCunhaOS BOM, SCOS Workspace (`ScosWorkspace`). Os quatro repos foram verificados como públicos (API pública do GitHub → 200). Descrições evitam números voláteis (nº de skills, versão `-SNAPSHOT`, versão do BMAD) que envelheceriam; afirmações vêm dos READMEs (ex.: Flow "em desenvolvimento", Kill Switch descrito como objetivo de projeto). Única mudança de componente: o link só-ícone recebe `aria-label` e `rel="noopener noreferrer"`.

**5. Skills agrupadas por categoria, ordem definida no modelo.**
`Skill` ganha `category: SkillCategory` (união de strings) e `rating` vira opcional; `skillCategories` (array) define a ordem de exibição. `Skills.tsx` faz `skillCategories.map(c => skills.filter(s => s.category === c))` com um `SubTitle component="h3"` por grupo. Alternativa descartada: lista plana com 24 itens (perde escaneabilidade). Categorias: *Back-end e linguagens* (Java, Python, Spring, Spring Boot, Maven, gRPC, OpenAPI), *Front-end e mobile* (React, Redux, TypeScript, Android), *Dados e infraestrutura* (PostgreSQL, Redis, Liquibase, Keycloak, Docker, Git), *Qualidade e arquitetura* (JUnit, Jest, Testcontainers, Clean Code, DDD), *IA e processo* (Claude Code, BMAD). O ícone passa a ser decorativo (`altAvatar=""`), pois o nome está visível ao lado.

**6. Ícones novos (11 SVGs em `public/icons/`).**
`claudeCode`, `maven`, `postgresql`, `redis`, `keycloak`, `liquibase`, `grpc`, `testcontainers`, `openapi` vêm do Simple Icons (CC0) copiados uma vez com `curl` (sem dependência). `bmad` e `ddd` não existem lá: monogramas SVG próprios (formas simples, sem `<text>` dependente de fonte). Regra de cor: cor de marca **se** o contraste do ícone contra `#00001c` for ≥ 3:1; senão, `#D7E5EC`. Nome de arquivo em camelCase, como os existentes.

**7. Redes sociais: `src/model/SocialLink.ts` + componente `SocialLinks`.**
`socialLinks: {name, url, Icon}[]` (GitHub, LinkedIn, Instagram — URLs atuais do rodapé). `components/socialLinks/SocialLinks.tsx` renderiza um `IconSocialMedia` por item e devolve um fragmento; o contêiner/layout é de quem usa (Footer mantém `GroupIconSocialMedia`; About ganha um `Box` flex). `IconSocialMedia` recebe `label` → `aria-label`, `rel="noopener noreferrer"`, ícone com `aria-hidden` e área mínima 44×44px. Alternativa descartada: duplicar os três links no About (duas fontes de verdade). Sem `<nav>` por componente: dois landmarks com o mesmo rótulo na mesma página atrapalham leitor de tela.

**8. Foco e movimento.**
Não há `outline: none` em `src/`, então o anel de foco padrão do navegador permanece; será verificado por teclado. Nada anima nesta change, logo `prefers-reduced-motion` não se aplica.

**9. Testes: um arquivo Vitest de dados/renderização.**
Como o repo não tem testes, o mínimo que falha se o conteúdo quebrar: um teste que (a) todo `skill.icon` aponta para arquivo existente em `public/`, (b) toda skill tem categoria listada em `skillCategories`, (c) toda experiência tem `company` e `period`, (d) About renderiza links com nome acessível. Sem snapshot, sem suíte por componente.

## Risks / Trade-offs

- [Atribuir descrição à empresa errada em página pública] → mapeamento (Decisão 2) confirmado pelo autor; risco encerrado.
- [Grafia "Byytes" (resposta original) vs "Bytes" (proposal editado)] → grafia correta confirmada pelo autor: "Bytes"; risco encerrado.
- [Período do SCOS derivado do 1º commit, não declarado] → marcado como pendência; fácil de ajustar em `Experience.ts`.
- [Marcas de terceiros (Claude, Redis, Keycloak…) no site] → uso nominativo para indicar tecnologia usada; SVGs do Simple Icons (CC0) mantêm a forma oficial; sem sugerir afiliação.
- [Ícone escuro invisível no fundo `#00001c`] → regra de contraste ≥ 3:1 na Decisão 6, checada no visual do grid.
- [24 skills deixam a página mais longa] → agrupamento por categoria e cards já compactos; nenhuma imagem grande nova (SVGs de ~1 KB, exceto os já existentes).
- [Alterar `IconSocialMedia` muda também o Footer] → intencional (mesmo componente, mesma correção); alvo de 44px aumenta ligeiramente a altura do rodapé.
- [`alt=""` no Avatar do MUI mostra o ícone genérico de pessoa se a imagem falhar] → aceitável; os SVGs são locais e versionados.
