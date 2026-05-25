# Next Classic Starter

A minimal **Next.js starter** with essential development tooling preconfigured for a clean and consistent workflow.

## Stack

- Next.js
- TypeScript
- ESLint
- Prettier
- EditorConfig
- Commitlint
- Lefthook
- shadcn/ui
- next-themes

## Setup

### 1. Init Next.js

Project initialized with **Next.js + TypeScript** using the `src` directory structure and built-in **ESLint** configuration.

### 2. Prettier

Code formatting is enforced via:

- `.prettierrc`
- `.prettierignore`

Ensures consistent code style across the project.

### 3. EditorConfig

Editor-level formatting rules are defined in `.editorconfig`.

Ensures consistent indentation, line endings, and encoding across different editors and IDEs — no plugin required for most modern editors.

### 4. Commitlint + Lefthook

Commit messages follow **Conventional Commits**.

- `commitlint.config.mjs`
- `lefthook.yml`

Git hooks run checks before committing.

Example:

```
feat: add login page
fix: resolve navbar bug
chore: update dependencies
```

### 5. shadcn/ui + next-themes

UI components powered by **shadcn/ui** with dark/light mode support via **next-themes**.

Components are added directly to the project and can be customized as needed. Theme switching is handled through:

- `components/providers/theme-provider.tsx`
- `components/header/theme-selector.tsx`

## Project Structure

```
.
├── public/
├── src/
│   ├── app/
│   ├── components/
│   │   └── header/theme-selector.tsx
│   │   └── providers/theme-provider.tsx
│   │   └── ui/
│   └── lib/
├── commitlint.config.mjs
├── eslint.config.mjs
├── lefthook.yml
├── .editorconfig
├── next.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Quick Start

You can start your project using one of the following "flavors" (branches):

- `main`: Minimal setup (Standard).
- `feat/i18n`: Main + Multi-language configuration.

Pick one of the following options to get started:

### Option 1 — Use this template ⭐ (Recommended)

Click **"Use this template"** on GitHub to create a new repo on your account — no commit history included.

### Option 2 — Clone by branch

```bash
# Clone the default branch
git clone https://github.com/your-username/next-classic-starter.git

# Or clone a specific branch
git clone -b <branch-name> https://github.com/your-username/next-classic-starter.git
```

### Option 3 — Download ZIP by branch

Go to the repo on GitHub → select a branch → click **Code** → **Download ZIP**.

---

### Then run:

```bash
# Skip this if you used Option 1
git init

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're good to go. 🎉
