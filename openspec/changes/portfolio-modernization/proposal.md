## Why

O projeto ainda acumula 262 vulnerabilidades (3 críticas, 122 high) todas originárias do `react-scripts` (CRA abandonado). Grande parte das deps já foi atualizada manualmente, mas enquanto `react-scripts` estiver presente as CVEs permanecem. A migração para Vite é o passo restante para eliminar o vetor primário. Junto com isso, o design visual recebe refinamento: mantendo a paleta atual, remove ruído visual (gradientes de fundo, star rating), melhora hierarquia de informação, unifica tipografia e inclui a nova seção Experiences.

## What Changes

**Já realizado (não requer trabalho):**

- ~~MUI 5 → 6.1.8~~ ✅
- ~~styled-components 5 → 6.1.13~~ ✅
- ~~React 18.2 → 18.3.1~~ ✅
- ~~eslint 8 → 9.15.0~~ ✅
- ~~@typescript-eslint 5 → 8.16.0~~ ✅
- ~~prettier 2 → 3.3.3~~ ✅
- ~~gh-pages 4 → 6.2.0~~ ✅
- ~~@testing-library/\* atualizado~~ ✅
- ~~web-vitals, @types/node atualizados~~ ✅
- ~~Seção Experiences adicionada~~ ✅
- ~~Paleta primária ajustada (`#041F31` → `#00001c`)~~ ✅

**Pendente:**

- **BREAKING** Substituir `react-scripts` por Vite + `@vitejs/plugin-react` ← elimina CVEs
- **BREAKING** Migrar `jest` → `vitest`
- TypeScript: fixar em `^6.0.3` + atualizar `tsconfig.json` (`moduleResolution: bundler`, `target: ES2020`)
- Patch deps restantes: `@emotion/*` 11.13→11.14, `styled-components` 6.1→6.4, `@typescript-eslint` 8.16→8.60, eslint-plugins minor, `prettier` 3.3→3.8, `gh-pages` 6.2→6.3, `@testing-library/*` patches
- MUI 6.1.8 → 6.5.0 (minor, sem breaking changes)
- SC v6: prefixar props customizadas com `$` onde necessário (`$devicetype`)
- `.eslintrc.yml` → `eslint.config.js` (flat config, ESLint v9+)
- Visual: remover `background: linear-gradient(...)` dos cards (Skill, Project) → `border: 1px solid rgba(128,219,217,0.15)`
- Visual: remover star rating dos Skill cards
- Visual: reordenar Project card (title → description → tags)
- Visual: unificar tipografia em Montserrat (remover Tinos)
- Visual: melhorar hierarquia na seção Presentation (name > office muted > desc > @nickname)
- Visual: simplificar Divider (gradient → rgba(128,219,217,0.3))
- Visual: estilo da seção Experiences (alinhado com About)

## Capabilities

### New Capabilities

- `build-toolchain`: Configuração Vite substituindo CRA — `vite.config.ts`, `index.html` na raiz, variáveis de ambiente `VITE_*`, scripts npm atualizados, Vitest substituindo Jest
- `visual-design`: Sistema visual do portfólio — paleta de cores (`#00001c`/`#80dbd9`/gradiente teal), tipografia Montserrat, estilos dos componentes (cards, dividers, layout de seções, Experiences)

### Modified Capabilities

## Impact

- `package.json`: remoção de `react-scripts`, adição de `vite`, `@vitejs/plugin-react`, `vitest`; patch de deps menores; TypeScript pinado em `^6.0.3`
- `public/index.html` → `index.html` (raiz) com formato Vite
- `src/index.tsx`: remover `reportWebVitals`, ajustar entry point
- `tsconfig.json`: `moduleResolution: bundler`, `target: ES2020`, `module: ESNext`
- `.eslintrc.yml` → `eslint.config.js` (flat config)
- `src/components/skill/Skill.style.tsx` e `Skill.tsx`: remover gradient bg, remover Rating
- `src/components/project/Project.style.tsx` e `Project.tsx`: remover gradient bg, reordenar conteúdo
- `src/pages/presentation/`: reordenar elementos, ajuste tipográfico
- `src/pages/experiences/Experiences.style.ts`: garantir alinhamento visual com About
- `src/components/text/Text.style.ts`: unificar fontFamily em Montserrat
- `src/components/divider/Divider.style.ts`: substituir gradient por rgba sutil
- `src/pages/presentation/Presentation.style.tsx` e `PresentationImage.style.tsx`: `$devicetype` (SC v6)
- `.github/workflows/`: verificar compatibilidade com Vite build e custom domain
