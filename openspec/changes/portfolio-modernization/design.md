## Context

Portfolio React/TypeScript. Migração parcial já executada: MUI 5→6.1.8, SC 5→6.1.13, React 18.3, eslint 9, prettier 3, gh-pages 6. Ainda usa `react-scripts 5.0.1` (CRA abandonado) como toolchain — fonte de 262 CVEs (3 críticas, 122 high). Nova seção `Experiences` adicionada. Paleta primária ajustada para `#00001c`. Deploy em domínio customizado `sawcunha.sawcunhaos.com.br` via GitHub Pages.

Componentes afetados: toda a árvore `src/`, `package.json`, `tsconfig.json`, `index.html`, configs de lint, pipeline CI.

## Goals / Non-Goals

**Goals:**

- Eliminar todas as CVEs via migração CRA → Vite
- Completar atualização de deps restantes (patches + TypeScript 6)
- Migrar ESLint para flat config (`eslint.config.js`)
- Corrigir SC v6 prop forwarding (`$devicetype`)
- Refinar visual sem alterar paleta ou estrutura de navegação
- Estilizar seção Experiences consistente com About

**Non-Goals:**

- Alterar paleta de cores (já ajustada para `#00001c`/`#80dbd9`)
- Migrar para framework diferente (Next.js, Remix)
- Adicionar novos conteúdos ou seções além das existentes
- Ir para MUI v9 nesta iteração (já está em v6, próximo major fica para depois)
- Migrar React 18 → 19 nesta iteração

## Decisions

### D1: CRA → Vite (não Parcel/Turbopack)

**Escolha:** `vite` + `@vitejs/plugin-react`

Mudanças estruturais necessárias:

- `public/index.html` → `index.html` (raiz) com `<script type="module" src="/src/index.tsx">`
- Remover `%PUBLIC_URL%` — Vite serve `public/` diretamente
- `tsconfig.json`: `"moduleResolution": "bundler"`, `"target": "ES2020"`, `"module": "ESNext"`
- Scripts: `start: vite`, `build: vite build`, `deploy: gh-pages -d dist` (Vite default outDir é `dist`, ou configurar `outDir: 'build'` para manter compatibilidade com deploy script existente)
- `src/index.tsx`: remover import de `reportWebVitals`

**Atenção:** `"type": "module"` já está em `package.json` — compatível com Vite ESM.

### D2: Jest → Vitest

**Escolha:** `vitest` com `jsdom`

Vitest usa mesma config do Vite, zero duplicação. API compatível com Jest. Setup: `vitest.config.ts` com `globals: true`, `environment: 'jsdom'`, `setupFiles: ['./src/setupTests.ts']`. Script `test: vitest run`, `test:watch: vitest`.

### D3: TypeScript — manter v5/pinado vs upgrade v6

**Escolha:** Fixar explicitamente em `^6.0.3` (remover `*` do package.json)

`*` significa "qualquer versão" — resolve para v5.7.2 atualmente. Pinando em `^6.0.3` garante builds reproduzíveis e aproveita melhorias de type-checking. Breaking changes do TS6 são menores para esta base de código (sem decorators experimentais, sem `moduleResolution: node` legado).

### D4: ESLint flat config

**Escolha:** Migrar `.eslintrc.yml` para `eslint.config.js`

ESLint v9+ usa flat config por padrão. `.eslintrc.*` ainda é suportado em v9 mas deprecado. Migrar agora evita breaking no v10. Config base: `eslint-config-love` (já no projeto) + `eslint-config-prettier` + `eslint-plugin-react`.

### D5: SC v6 prop forwarding

**Escolha:** Prefixar props customizadas com `$`

SC v6 não filtra automaticamente props desconhecidas do DOM. Props como `devicetype` geram warnings e podem vazar para o HTML. Solução: renomear para `$devicetype` em todos os styled components que recebem props customizadas. Afeta: `Presentation.style.tsx`, `PresentationImage.style.tsx`, `Divider.style.ts`.

### D6: Visual — bordas vs gradiente de fundo

**Escolha:** Cards com `border: 1px solid rgba(128, 219, 217, 0.15)` + `background: transparent`

Gradientes de fundo em cards competem com texto. Borda sutil mantém paleta sem ruído. Gradiente preservado apenas em chips (tags de tecnologia) e botão CTA.

### D7: Remover star rating dos Skill cards

Rating de proficiência com estrelas é subjetivo e visualmente ruidoso. Cards ficam mais limpos. Prop `rating` e componente `Rating` removidos do Skill.

### D8: Seção Experiences — alinhamento com About

`Experiences` usa a mesma estrutura que `About` (divider vertical + texto). Deve compartilhar os mesmos estilos base. Se `Experiences.style.ts` estiver duplicando código de `About.style.tsx`, consolidar via componentes compartilhados ou reexportar.

### D9: Hierarquia tipográfica na Presentation

Ordem visual top-down: nome (Montserrat 700, ~2.5rem) → cargo (Montserrat 400, 1.1rem, `#D7E5EC`) → bio → `@nickname` (menor, muted). Tinos removida — Montserrat em toda a aplicação.

## Risks / Trade-offs

- **SC v6 $devicetype** → Verificar todos os usos de props customizadas em styled-components; não apenas `devicetype`. Mitigação: grep por `styled.*<.*Props` antes de migrar.
- **Vite outDir** → Default é `dist`, não `build`. Ou configurar `build.outDir: 'build'` em `vite.config.ts` ou atualizar script `deploy`. Escolher consistência com GitHub Actions existente.
- **TypeScript 6 strict** → Pode gerar erros em `any` implícito nos componentes. Mitigação: `// @ts-expect-error` temporário onde necessário.
- **CNAME / custom domain** → `public/CNAME` deve ser preservado no build do Vite (`public/` é copiado automaticamente). Verificar após primeiro deploy.
- **Experiences sem key prop** → `allExperiences.experiences.map(experience => ...)` no código atual não tem `key`. Corrigir durante visual pass.

## Migration Plan

**Ordem de execução (cada bloco deve buildar antes do próximo):**

1. `build-toolchain`: Instalar Vite, criar `vite.config.ts`, mover `index.html`, remover `react-scripts`. Verificar `yarn build` gera artefatos.
2. `test-setup`: Instalar Vitest, criar `vitest.config.ts`, adaptar `setupTests.ts`. Verificar `yarn test` passa.
3. Deps patches: TypeScript `^6.0.3`, @emotion 11.14, SC 6.4, MUI 6.5, @typescript-eslint 8.60, plugins minor.
4. ESLint flat config: `.eslintrc.yml` → `eslint.config.js`. Verificar `yarn lint` limpo.
5. SC v6 fixes: prefixar `$devicetype` + corrigir `key` prop no Experiences.
6. Visual pass: estilos de cards, dividers, tipografia, Presentation hierarchy, Experiences styling.

**Rollback:** Cada bloco em commit separado no branch `feature/2026`.
