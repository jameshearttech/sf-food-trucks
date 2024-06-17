# Typescript Configuration

[typescript](https://www.typescriptlang.org/)

## Installation

Use the package manager [pnpm](https://pnpm.io/) to install the typescript configuration and related packages in the root project.

```bash
pnpm add --save-dev --save-exact --workspace-root --workspace typescript-config
pnpm add --save-dev --save-exact --workspace-root typescript @types/node
```

## Configuration

Create a typescript [configuration file](https://www.typescriptlang.org/tsconfig/) by extending the base configuration from typescript-config.

```json
  "extends": "typescript-config/tsconfig.json",
  "compilerOptions": {
    "baseUrl": "src",
    "rootDir": "src"
  },
  "include": ["src"],
  "exclude": []
```

## Usage

Transpile Typescript to Javascript.

```bash
pnpm tsc example.ts
```

Execute Typescript using Node without transpiling.

```bash
ts-node example.ts
```
