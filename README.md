# Donation Form

## Included technologies:

- [React v18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- build environment: [Vite.js](https://vitejs.dev/)
- state management: [Zustand](https://zustand-demo.pmnd.rs/)
- CSS-in-JS: [styled-components](https://styled-components.com/)
- unit testing: [Vitest](https://vitest.dev/), [Testing Library](https://testing-library.com/)
- E2E testing: [Playwright](https://playwright.dev/)
- code quality checked with: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

### Prerequisities:

Before running the app, please make sure you have installed `Node.js`, `pnpm` (should also work for `npm` or `yarn`) on your machine.

### Installation:

```
pnpm i
```

### Running app:

```
pnpm run dev
```

### Building:

```
pnpm run build
pnpm run preview
```

### Unit testing:

```
pnpm run test

// browser mode
pnpm run test:ui

// coverage report
pnpm run coverage
```

### E2E testing:

```
pnpm run test-ct
```

### Checking code quality:

```
 // eslint
 pnpm run lint

 // prettier
 pnpm run prettier
```
