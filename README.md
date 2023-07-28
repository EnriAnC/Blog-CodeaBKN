## ✅ Testing

### Unit tests

`npm run test`: Run unit tests with Jest and React Testing Library

### End-to-end tests

1. `npm start`: Start the development server on [localhost:3000](http://localhost:3000)
2. Run end-to-end tests with Cypress choosing one of the following options:
  - `npm run cy:open`: Open Cypress in dev mode
  - `npm run cy:run`: Execute Cypress in CLI

## 🔦 Linting

- `npm run lint`: Run linter
- `npm run lint:fix`: Fix lint issues

## 🌈 Tech Stack

- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io) already configured with the [🤏 Codely's configuration](https://github.com/CodelyTV/eslint-config-codely)
- [Jest](https://jestjs.io) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for the unit tests
- [Cypress](https://www.cypress.io) with [Testing Library](https://testing-library.com/docs/cypress-testing-library) for the end-to-end tests
- [GitHub Action Workflows](https://github.com/features/actions) set up to run tests and linting on push
- [Makefile](https://github.com/CodelyTV/vite-react_best_practices-template/blob/main/Makefile) for standardize how to run projects
- [Sass](https://sass-lang.com) to supercharge CSS with nested classes and more fun
- [.editorconfig](https://editorconfig.org) for sharing the IDE config

## 🤔 FAQ

### 🤷‍♂️ Why Vite and not Next.js, Remix, or Create React App

React updated the official recommendation about how to start a new project. Previously, they recommended Create React App (CRA) and we did [this very same template based on CRA](https://github.com/CodelyTV/cra-template-codely), and right now they recommend to directly use a framework like Next.js, Remix, or Gatsby.

However, they also include an specific section in the official documentation on how to use React without a framework, and the recommended way is to use Vite or Parcel.

Even if not using a framework such as Next.js is something to double check, we are interested into having this template for use cases where you are not interested into the benefits of a complete framework. For instance, theses cases could be as simple as learning the React.js features and limitations in order to have a clear vision where React ends and a framework starts. This is something we do in [our React video course](https://pro.codely.com/library/react-de-0-aplicando-buenas-practicas-192069/460310/about/).

### 👻 Why not adding `.vscode` or `.idea` to the `.gitignore` template

These are folders created due to personal environment preferences. We should ignore these personal development environment preferences to be ignored using your global `.gitignore` file and leave the project `.gitignore` file as clean as possible, that is, only containing the project specific rules.

You can create a `.gitignore_global` file with rules that will apply to all your repositories with:

```bash
touch ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```
