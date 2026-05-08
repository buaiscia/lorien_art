# lorienart

Portfolio and services website for a multi-talented Czech artist. Fully static — no backend, no CMS.

## Services

| Route       | Section                                                         |
| ----------- | --------------------------------------------------------------- |
| `/`         | Home — full-screen video hero with three service tiles          |
| `/harfa`    | Harpist — bio, repertoire, booking form                         |
| `/keramika` | Ceramics — gallery, inquiry form                                |
| `/ostatni`  | Other services — henna, candle painting, and more (in progress) |
| `/kontakt`  | Contact                                                         |

## Tech stack

- **Vite** — build tool
- **React 19** — UI framework
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **React Router v6** — client-side routing
- **Netlify Forms** — zero-backend contact forms

## Getting started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Build

```bash
npm run build   # production build → dist/
npm run preview # preview the production build locally
```

## Project structure

```
src/
  assets/         # images (harp, ceramics, henna, background)
  components/     # shared components (ContactForm)
  pages/          # one file per route
    HomePage.tsx
    HarfaPage.tsx
    KeramikaPage.tsx
    OstatniPage.tsx
    KontaktPage.tsx
    PageShell.tsx  # shared page layout (header + max-width wrapper)
  App.tsx          # router + header with responsive burger menu
  main.tsx
  index.css        # Tailwind entry + theme tokens
public/
  background_video.mp4  # hero background video (served directly)
.github/
  copilot-instructions.md  # AI coding guidelines for this project
```

## Deployment

The site deploys as a static bundle to **Netlify** or **GitHub Pages**.
Contact forms use Netlify Forms (`data-netlify="true"`) — no server required.

For GitHub Pages, set `base` in `vite.config.ts` to your repo name.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
