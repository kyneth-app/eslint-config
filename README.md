# @kyneth/eslint-config

Shared ESLint configuration for Kyneth projects.

This package provides a consistent code style and linting rules across all Kyneth projects.

## Features

- Built on top of [@nuxt/eslint-config](https://github.com/nuxt/eslint/tree/main/packages/eslint-config)
- Stylistic rules for consistent code formatting
- Import ordering and organization rules
- Support for TypeScript and Vue files
- Customizable directory configuration

## Installation

```bash
npm install --save-dev @kyneth/eslint-config
```

### Peer Dependencies

Make sure you have the following peer dependencies installed:

```bash
npm install --save-dev eslint @nuxt/eslint-config @stylistic/eslint-plugin eslint-plugin-import-x
```

## Usage

### Basic Usage

Create an `eslint.config.mjs` file in your project root:

```js
import kynethConfig from '@kyneth/eslint-config'

export default kynethConfig
```

### Advanced Usage

For projects with custom directory structures, use the configuration function:

```js
import { createKynethEslintConfig } from '@kyneth/eslint-config'

export default createKynethEslintConfig({
  dirs: ['./playground', './custom-dir']
})
```

## Configuration Details

### Stylistic Rules

- **Indentation**: 2 spaces
- **Quotes**: Single quotes (with escape avoidance)
- **Semicolons**: Never
- **Comma Dangle**: Always for multiline
- **Arrow Parens**: Only when needed
- **Brace Style**: 1tbs (one true brace style)
- **Object Spacing**: Always add spaces inside curly braces
- **Array Spacing**: Never add spaces inside brackets

### Import Rules

Imports are automatically organized in the following order:

1. Node.js built-in modules
2. External packages
3. Internal modules
4. Parent/sibling/index imports
5. Type imports

Special path patterns:
- `#imports` (Nuxt auto-imports)
- `@/**` (project aliases)
- `~/**` (project aliases)

Additional import rules:
- Imports must be at the top of the file
- Newline required after imports
- No duplicate imports
- Alphabetically sorted within groups

## Development

### Prerequisites

- Node.js 18+
- npm or bun

### Setup

```bash
# Install dependencies
npm install

# Or using bun
bun install
```

## License

MIT
