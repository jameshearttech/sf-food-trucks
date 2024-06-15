# Remark Configuration

[remark](https://remark.js.org/)

## Installation

Use the package manager [pnpm](https://pnpm.io/) to install the Remark configuration and related packages in the root project.

```bash
pnpm add --save-dev --save-exact --workspace-root --workspace remark-config
pnpm add --save-dev --save-exact --workspace-root remark-cli
```

## Configuration

Create a Remark configuration file in ES module format. Import the configuration from remark-config and export as default.

```javascript
import baseConfig from 'remark-config';
export default baseConfig;
```

## Usage

Remark can be integrated with editors, executed in the Git pre-commit hook to check or format staged files, and the CLI tool can be used directly or in scripts.

```bash
pnpm remark
```
