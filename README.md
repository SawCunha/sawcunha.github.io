# Portfólio SawCunha

Acesso online: [sawcunha.sawcunhaos.com.br](https://sawcunha.sawcunhaos.com.br)

Portfólio pessoal construído com React e MUI. Deploy automático via GitHub Actions + GitHub Pages.

## Stack

| Categoria | Tecnologia |
|-----------|-----------|
| UI | React 19, MUI 9 |
| Estilo | styled-components 6, Emotion 11 |
| Build | Vite 8 |
| Linguagem | TypeScript 6 |
| Testes | Vitest 4 |
| Lint/Format | ESLint 10 (flat config), Prettier 3 |
| Deploy | gh-pages 6, GitHub Actions |

## Scripts

```bash
yarn start       # dev server (porta 3000)
yarn build       # build de produção → build/
yarn preview     # preview do build local
yarn test        # vitest run
yarn lint        # eslint
yarn format      # prettier
yarn deploy      # gh-pages deploy
```

## Seções

- **Presentation** — nome, cargo, bio, @nickname
- **About** — texto pessoal
- **Experiences** — experiências profissionais
- **Projects** — projetos com tecnologias e links
- **Skills** — grid de tecnologias

## Segurança

0 CVEs (auditado com `yarn audit`).
