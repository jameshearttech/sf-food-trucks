# Prettier Configuration

[prettier](https://prettier.io/)

## Installation

Use the package manager [pnpm](https://pnpm.io/) to install the prettier configuration and related packages in the root project.

```bash
pnpm add --save-dev --save-exact --workspace-root --workspace prettier-config
pnpm add --save-dev --save-exact --workspace-root prettier
```

## Configuration

Create a prettier [configuration file](https://prettier.io/docs/en/configuration) in ES module format. Import the configuration from prettier-config and export as default.

```javascript
import baseConfig from 'prettier-config';
export default baseConfig;
```

## Usage

Prettier can be integrated with editors, executed in the Git commit-msg hook to check or format staged files, and the CLI tool can be used directly or in scripts.

```bash
pnpm prettier *.* **/*.* --check
```
