# Commitlint Configuration

[commitlint](https://github.com/conventional-changelog/commitlint/)

The @commitlint/cli package is the CLI tool. The conventional-changelog-conventionalcommits package is required by the VS Code commitlint extension (joshbolduc.commitlint). The other packages are not required by the VS Code commitlint extension, but if not included they use the versions in the extension itself.

## Installation

Use the package manager [pnpm](https://pnpm.io/) to install the commitlint configuration and related packages in the root project.

```bash
pnpm add --save-dev --save-exact --workspace-root --workspace commitlint-config
pnpm add --save-dev --save-exact --workspace-root @commitlint/cli @commitlint/lint @commitlint/load @commitlint/parse conventional-changelog-conventionalcommits
```

## Configuration

Create a commitlint [configuration file](https://github.com/conventional-changelog/commitlint?tab=readme-ov-file#config) in ES module format. Import the configuration from commitlint-config and export as default.

```javascript
// This import is used by the VS Code commitlint extension.
import 'conventional-changelog-conventionalcommits';

// This import/export is used by the commitlint-cli package.
import baseConfig from 'commitlint-config';
export default baseConfig;
```

## Usage

Commitlint is typically used in the Git commit-msg hook to lint commits, but the CLI tool can be used directly, too.

```bash
$ echo 'foo' | pnpm commitlint
⧗   input: foo
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
```
