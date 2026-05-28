## 1. Vite Migration

- [x] 1.1 Adicionar `vite`, `@vitejs/plugin-react` ao `package.json`; remover `react-scripts`
- [x] 1.2 Criar `vite.config.ts` na raiz: plugin React, `build.outDir: 'build'`, `server.port: 3000`
- [x] 1.3 Mover `public/index.html` para raiz; adicionar `<script type="module" src="/src/index.tsx">`; remover `%PUBLIC_URL%`
- [x] 1.4 Atualizar scripts em `package.json`: `start: vite`, `build: vite build`, `preview: vite preview`
- [x] 1.5 Remover `src/reportWebVitals.ts` e seu import em `src/index.tsx`
- [x] 1.6 Atualizar `tsconfig.json`: `"moduleResolution": "bundler"`, `"target": "ES2020"`, `"module": "ESNext"`
- [x] 1.7 Verificar `public/CNAME` existe e é copiado para `build/` no output do Vite
- [x] 1.8 Verificar `yarn build` gera `build/` sem erros

## 2. Vitest Setup

- [x] 2.1 Adicionar `vitest`, `jsdom` ao `package.json` (devDependencies); remover `@types/jest`
- [x] 2.2 Criar `vitest.config.ts` com `globals: true`, `environment: 'jsdom'`, `setupFiles: ['./src/setupTests.ts']`
- [x] 2.3 Atualizar scripts: `test: vitest run`, adicionar `test:watch: vitest`
- [x] 2.4 Verificar `yarn test` passa todos os testes existentes

## 3. Deps Patches

- [x] 3.1 Fixar TypeScript em `^6.0.3` no `package.json` (remover `*`); corrigir erros de tipo resultantes
- [x] 3.2 Atualizar `@emotion/react` e `@emotion/styled` para `^11.14.0`
- [x] 3.3 Atualizar `styled-components` para `^6.4.2`; `@types/styled-components` para `^5.1.36`
- [x] 3.4 Atualizar `@mui/material`, `@mui/icons-material`, `@mui/styled-engine-sc` para `^6.5.0`
- [x] 3.5 Atualizar `@typescript-eslint/eslint-plugin` para `^8.60.0`
- [x] 3.6 Atualizar eslint-plugins: `eslint-plugin-prettier ^5.5.6`, `eslint-plugin-react ^7.37.5`, `eslint-plugin-import ^2.32.0`, `eslint-plugin-n ^17.24.0`, `eslint-plugin-promise ^7.3.0`
- [x] 3.7 Atualizar `prettier` para `^3.8.3`, `eslint-config-prettier` para `^9.1.2`, `gh-pages` para `^6.3.0`
- [x] 3.8 Atualizar `@testing-library/jest-dom ^6.9.1`, `@testing-library/react ^16.3.2`, `@testing-library/user-event ^14.6.1`
- [x] 3.9 Verificar `yarn audit` — zero critical CVEs (28 high restantes são em dev deps: minimatch em eslint-config-love/eslint, não bundled no deploy)

## 4. ESLint Flat Config

- [x] 4.1 Criar `eslint.config.js` com flat config (ESLint v9): configurar `eslint-config-love`, `eslint-config-prettier`, `eslint-plugin-react`, `eslint-plugin-prettier`
- [x] 4.2 Remover `.eslintrc.yml`
- [x] 4.3 Rodar `yarn lint` e corrigir todos os erros
- [x] 4.4 Rodar `yarn format` e commitar arquivos reformatados

## 5. styled-components v6 Fixes

- [x] 5.1 Grep por props customizadas em styled-components: `devicetype` em `Presentation.style.tsx`, `PresentationImage.style.tsx`, `Divider.style.ts`
- [x] 5.2 Prefixar todas as props customizadas com `$`: `devicetype` → `$devicetype`; atualizar referências nos componentes que as usam
- [x] 5.3 Corrigir `key` prop ausente em `Experiences.tsx` (`allExperiences.experiences.map(...)`)
- [x] 5.4 Verificar console sem warnings de prop forwarding

## 6. Visual — Tipografia

- [x] 6.1 Remover `Tinos` do `Theme.ts` (`allVariants.fontFamily`); substituir por `Montserrat`
- [x] 6.2 Atualizar `Text.style.ts`: remover `fontFamily: 'Tinos'`; definir hierarquia — Title: Montserrat 700 2rem, SubTitle: Montserrat 600 1.125rem, Text: Montserrat 400 1rem
- [x] 6.3 Verificar que `Montserrat` está sendo carregada em `index.html` ou `src/index.css`

## 7. Visual — Cards

- [x] 7.1 `Skill.style.tsx`: trocar `background: linear-gradient(...)` por `background: transparent; border: 1px solid rgba(128, 219, 217, 0.15)`
- [x] 7.2 `Skill.tsx`: remover prop `rating` da interface Props e do JSX; remover import e uso do componente `Rating`
- [x] 7.3 `Skill.style.tsx`: remover export do styled component `Rating`
- [x] 7.4 `Project.style.tsx`: trocar `background: linear-gradient(...)` do `ProjectCard` por `background: transparent; border: 1px solid rgba(128, 219, 217, 0.15)` — manter gradiente nos `Chip`
- [x] 7.5 `Project.tsx`: mover `<GroupChip>` (tecnologias) para depois de `<Text>` (descrição)

## 8. Visual — Dividers e Presentation

- [x] 8.1 `Divider.style.ts`: substituir `background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%)` por `background: rgba(128, 219, 217, 0.3)`
- [x] 8.2 `PresentationInfo.tsx`: reordenar JSX — `name` primeiro (destaque), `office` abaixo (muted), `description`, `@nickname` por último (menor)
- [x] 8.3 Criar / atualizar estilos de Presentation: name Montserrat 700 ~2.5rem, office `color: #D7E5EC` 400 1.1rem, nickname com prefixo `@` em menor tamanho

## 9. Visual — Seção Experiences

- [x] 9.1 Verificar `Experiences.style.ts` alinhado visualmente com `About.style.tsx` (mesma estrutura Container + GrouText)
- [x] 9.2 Garantir que múltiplas experiências renderizam com espaçamento correto entre itens
- [x] 9.3 Adicionar `id="Experiences"` no container e link no Navbar se necessário

## 10. Validação Final

- [x] 10.1 `yarn audit` — zero critical CVEs (28 high em dev deps minimatch, não afeta prod)
- [x] 10.2 `yarn build` — zero erros, build em 1.15s
- [x] 10.3 `yarn test` — vitest passa (sem arquivos de teste, passWithNoTests: true)
- [x] 10.4 `yarn lint` — zero erros (15 warnings aceitáveis: Grid deprecated, any em templates)
- [ ] 10.5 Verificar no browser: paleta `#00001c` bg, cards com borda sutil, sem star rating, project card desc antes de chips, Montserrat em tudo, Presentation com hierarquia name→office→desc→@nickname, Experiences renderiza corretamente
- [ ] 10.6 Verificar deploy em `sawcunha.sawcunhaos.com.br` — CNAME preservado, site acessível
