# Lint-staged Configuration

[lint-staged](https://github.com/lint-staged/lint-staged)

## Installation

Use the package manager [pnpm](https://pnpm.io/) to install the lint-staged configuration and related packages in the root project.

```bash
pnpm add --save-dev --save-exact --workspace-root --workspace lint-staged-config
pnpm add --save-dev --save-exact --workspace-root lint-staged
```

## Configuration

Create a lint-staged configuration file in ES module format. Import the configuration from lint-staged-config and export as default.

```javascript
import baseConfig from 'lint-staged-config';
export default baseConfig;
```

## Usage

Lint-staged is typically executed in the Git pre-commit hook to format and lint staged files, but the CLI tool can be used directly or in scripts.

```bash
pnpm lint-staged
```
