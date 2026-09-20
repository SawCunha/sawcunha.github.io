## 1. Confirmar dados factuais (bloqueia o fechamento, não a implementação)

- [x] 1.1 Confirmar com o autor o mapeamento descrição → empresa: ERP/Telecom = Bytes e Android/sistemas internos = Vero Internet (design, Decisão 2) — confirmado pelo autor
- [x] 1.2 Confirmar a grafia da empresa ("Byytes" na resposta original × "Bytes" no proposal) e ajustar `Experience.ts` e o spec `experience-timeline` se necessário — confirmado pelo autor: "Bytes"; specs e design já usam essa grafia
- [ ] 1.3 Confirmar o período do SCOS (Fev/2026, derivado do 1º commit do BOM) e se há cargo para o SCOS — cargo da Vero Internet confirmado pelo autor: "Assistente em Desenvolvimento de Sistemas"; período e cargo do SCOS ainda pendentes

## 2. Ícones das skills (`public/icons/`)

- [x] 2.1 Baixar do Simple Icons (`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/<slug>.svg`) os slugs `claude`, `apachemaven`, `postgresql`, `redis`, `keycloak`, `liquibase`, `grpc`, `testcontainers`, `openapiinitiative` e salvar como `claudeCode.svg`, `maven.svg`, `postgresql.svg`, `redis.svg`, `keycloak.svg`, `liquibase.svg`, `grpc.svg`, `testcontainers.svg`, `openapi.svg`; se algum slug não existir, usar monograma como em 2.3 — `grpc` e `testcontainers` não existem no Simple Icons (404): viraram monogramas próprios (`grpc.svg` = setas ⇄, `testcontainers.svg` = cubo)
- [x] 2.2 Adicionar `fill` a cada SVG (o Simple Icons vem sem cor): cor de marca se o contraste contra `#00001c` for ≥ 3:1, senão `#D7E5EC`; conferir com um cálculo de luminância relativa (script descartável no scratchpad, não versionado)
- [x] 2.3 Criar `bmad.svg` (monograma "B" em quadrado arredondado) e `ddd.svg` (três círculos sobrepostos = bounded contexts), formas simples, sem `<text>`, viewBox 24×24, cores `#80dbd9`/`#D7E5EC`
- [x] 2.4 Abrir cada SVG novo no navegador sobre fundo `#00001c` e conferir que todos ficam legíveis e com o mesmo peso visual dos existentes

## 3. Modelos de dados (`src/model/`)

- [x] 3.1 `Experience.ts`: adicionar `company: string`, `role?: string`, `period: string` ao tipo; reescrever as 4 entradas na ordem Matera, SawCunha Open System, Bytes, Vero Internet (spec `experience-timeline`), mantendo os textos atuais de descrição sob a empresa correspondente
- [x] 3.2 `Skill.ts`: exportar `type SkillCategory` e `skillCategories` (ordem do spec `skills-catalog`), adicionar `category` obrigatório, tornar `rating` opcional, atribuir categoria às 12 skills existentes, adicionar `Git` (ícone já existe) e as 11 novas (Claude Code, BMAD, Maven, gRPC, OpenAPI, PostgreSQL, Redis, Liquibase, Keycloak, Testcontainers, DDD) sem `rating`
- [x] 3.3 `Project.ts`: reescrever a lista com os 5 projetos do spec `projects-showcase` (org, Flow, Foundation, BOM, Workspace); descrições baseadas nos READMEs do SCOS, sem números de skills/versões; chips do Flow: Java 25, Spring Boot 4, PostgreSQL, Redis, Keycloak, gRPC; chips do Workspace incluem Claude Code e BMAD
- [x] 3.4 Criar `SocialLink.ts` com `socialLinks: {name, url, Icon}[]` (GitHub, LinkedIn, Instagram) usando as URLs hoje hard-coded em `Footer.tsx`

## 4. Experiences

- [x] 4.1 `Experiences.tsx`: renderizar, acima do texto, `SubTitle component="h3"` com a empresa + `CurrentBadge` (quando `current`), e uma linha `Text color="textSecondary"` com `role · period` (só `period` se não houver `role`; nenhum elemento vazio)
- [x] 4.2 `Experiences.style.ts`: cabeçalho em flex com `flex-wrap: wrap` e `gap`; mover o `margin-bottom` do badge para o novo cabeçalho; conferir 375px sem rolagem horizontal

## 5. Skills

- [x] 5.1 `Skills.tsx`: para cada `skillCategories`, renderizar `SubTitle component="h3"` + `GridSkills` com `skills.filter(category)`; não renderizar categoria vazia
- [x] 5.2 `Skills.style.tsx`: ajustar o `Container`/`GridSkills` para empilhar os grupos (título alinhado à esquerda, grid centralizado como hoje) sem alterar largura de 85%
- [x] 5.3 `components/skill/Skill.tsx`: passar `altAvatar=""` (ícone decorativo, nome visível ao lado)

## 6. Redes sociais

- [x] 6.1 `components/icon/socicalMedia/IconSocialMedia.tsx`: nova prop `label` → `aria-label`; `rel="noopener noreferrer"`; ícone com `aria-hidden`; em `IconSocialMedia.style.ts` garantir `min-width`/`min-height` de 44px
- [x] 6.2 Criar `components/socialLinks/SocialLinks.tsx` + `index.tsx` (mesmo padrão dos outros componentes): mapeia `socialLinks` para `IconSocialMedia` e devolve um fragmento
- [x] 6.3 `Footer.tsx`: trocar os três `IconSocialMedia` fixos por `<SocialLinks />` dentro de `GroupIconSocialMedia`; remover imports de ícones que ficarem sem uso
- [x] 6.4 `About.tsx` / `About.style.tsx`: renderizar `<SocialLinks />` abaixo do `GrouText`, dentro de um `Box` flex alinhado à esquerda com `flex-wrap`

## 7. Link de projeto acessível

- [x] 7.1 `components/project/Project.tsx`: `aria-label={`Abrir ${nameProject} no GitHub`}` e `rel="noopener noreferrer"` no link só-ícone; `rel` também no link do título; `OpenInNewIcon` com `aria-hidden`
- [x] 7.2 `components/project/Project.style.tsx`: `white-space: nowrap` no `Chip` (spec: chip não quebra em duas linhas) e conferir que a linha de chips continua quebrando entre chips, não dentro deles

## 8. Teste e verificação

- [x] 8.1 Verificar em `vite.config.*`/`package.json` que o Vitest roda em `jsdom` com Testing Library configurado; ajustar só se faltar
- [x] 8.2 Criar `src/model/content.test.ts` (um arquivo): (a) todo `skill.icon` existe em `public/`; (b) toda `skill.category` está em `skillCategories`; (c) toda experiência tem `company` e `period`; (d) nenhuma descrição de projeto contém "SNAPSHOT"
- [x] 8.3 Criar `src/pages/about/About.test.tsx`: renderiza `About` e verifica 3 links com nomes acessíveis "GitHub", "LinkedIn", "Instagram", `target="_blank"` e `rel` com `noopener`
- [x] 8.4 Rodar `yarn lint`, `yarn test` e `yarn build`; corrigir o que aparecer
- [x] 8.5 `yarn start` e conferir visualmente em 375, 768, 1024 e 1440px: cabeçalho das experiências quebra sem cortar, grid de skills agrupado, cartões de projeto sem chip quebrado, links sociais no About e no rodapé
- [x] 8.6 Navegar só por teclado (Tab): links sociais do About e do rodapé e links de projeto mostram anel de foco visível, na ordem visual
- [x] 8.7 Conferir contraste do texto novo (`#D7E5EC` e `#80dbd9` sobre `#00001c`) e dos ícones novos (≥ 3:1)

## 9. Documentação

- [x] 9.1 `README.md`: atualizar a lista "Seções" (About com redes sociais; Experiences com empresa/período; Skills por categoria)
