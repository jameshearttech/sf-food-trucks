# Syncpack Configuration

[syncpack](https://jamiemason.github.io/syncpack/)

## Installation

Use the package manager [pnpm](https://pnpm.io/) to install the syncpack configuration and related packages in the root project.

```bash
pnpm add --save-dev --save-exact --workspace-root --workspace syncpack-config
pnpm add --save-dev --save-exact --workspace-root syncpack
```

## Configuration

Create a syncpack configuration file in ES module format. Import the configuration from syncpack-config and export as default.

```javascript
import baseConfig from 'syncpack-config';
export default baseConfig;
```

## Usage

Syncpack is configured to be run as a script to lint and format package.json.

```bash
pnpm syncpack
```
