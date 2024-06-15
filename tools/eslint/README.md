# ESLint Configuration

[eslint](https://github.com/eslint/eslint/)

## Installation

Use the package manager [pnpm](https://pnpm.io/) to install the ESLint configuration and related packages in the root project.

```bash
pnpm add --save-dev --save-exact --workspace-root --workspace eslint-config
pnpm add --save-dev --save-exact --workspace-root eslint
```

## Configuration

Create an eslint [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files) in ES module format. Import the configuration from eslint-config and export as default.

```javascript
import eslintConfig from "eslint-config";
export default [...eslintConfig];
```

## Usage

ESLint can be integrated with editors, executed in the Git pre-commit hook to check or fix staged files, and the CLI tool can be used directly or in scripts.

```bash
pnpm eslint
```
