## ADDED Requirements

### Requirement: Vite replaces CRA as build tool

The project SHALL use Vite (`vite` + `@vitejs/plugin-react`) as the build and dev server, removing `react-scripts` entirely. `index.html` SHALL reside at project root with `<script type="module" src="/src/index.tsx">`. Build output SHALL go to `build/` (`vite.config.ts: build.outDir: 'build'`) for compatibility with existing `gh-pages` deploy script.

#### Scenario: Development server starts

- **WHEN** developer runs `yarn start`
- **THEN** Vite dev server starts on `http://localhost:3000` with HMR enabled

#### Scenario: Production build succeeds

- **WHEN** developer runs `yarn build`
- **THEN** `build/` directory is created with optimized static assets

#### Scenario: CNAME preserved in build

- **WHEN** `yarn build` runs
- **THEN** `public/CNAME` is copied to `build/CNAME` (Vite copies `public/` contents automatically)

#### Scenario: GitHub Pages deploy works

- **WHEN** developer runs `yarn deploy`
- **THEN** `gh-pages` publishes `build/` to `gh-pages` branch and site is accessible at `sawcunha.sawcunhaos.com.br`

### Requirement: Zero high/critical CVEs

No dependency SHALL have a known CVE at severity high or critical after migration.

#### Scenario: No high/critical CVEs

- **WHEN** `yarn audit` is run after migration
- **THEN** zero high or critical severity vulnerabilities are reported

### Requirement: TypeScript 6 pinned

`package.json` SHALL specify `"typescript": "^6.0.3"` (not `*`). `tsconfig.json` SHALL use `"moduleResolution": "bundler"`, `"target": "ES2020"`, `"module": "ESNext"`. All type errors SHALL be resolved.

#### Scenario: Type check passes

- **WHEN** `tsc --noEmit` is run
- **THEN** zero type errors are reported

### Requirement: ESLint flat config

ESLint SHALL use flat config format (`eslint.config.js`). `.eslintrc.yml` SHALL be removed. Config SHALL include `eslint-config-love`, `eslint-config-prettier`, `eslint-plugin-react`, `eslint-plugin-prettier`.

#### Scenario: Lint passes

- **WHEN** `yarn lint` is run
- **THEN** zero errors are reported

#### Scenario: Format check passes

- **WHEN** `yarn format --check` is run
- **THEN** all files are formatted according to Prettier v3 rules
