## ADDED Requirements

### Requirement: Vitest replaces Jest

The project SHALL use `vitest` with `jsdom` environment as the test runner, removing `jest` and `babel-jest` dependencies. The test command `yarn test` SHALL invoke `vitest run`. Existing test files SHALL pass without logic changes — only import sources updated where needed.

#### Scenario: Tests run with vitest

- **WHEN** developer runs `yarn test`
- **THEN** vitest executes all `*.test.*` and `*.spec.*` files and reports results

#### Scenario: @testing-library matchers work

- **WHEN** a test uses `expect(element).toBeInTheDocument()`
- **THEN** the matcher resolves correctly via `@testing-library/jest-dom` setup in `vitest.config.ts`

### Requirement: Vitest config file

A `vitest.config.ts` file SHALL exist at project root with `globals: true`, `environment: 'jsdom'`, and `setupFiles: ['./src/setupTests.ts']`.

#### Scenario: Config loads

- **WHEN** vitest starts
- **THEN** it reads `vitest.config.ts` and applies jsdom environment to all tests
