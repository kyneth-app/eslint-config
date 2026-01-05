// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import stylistic from '@stylistic/eslint-plugin'
import importX from 'eslint-plugin-import-x'

/**
 * Shared ESLint config for Kyneth projects
 * @param {Object} options - Configuration options
 * @param {string[]} options.dirs - Additional directories to lint (e.g., ['./playground'])
 */
export function createKynethEslintConfig(options = {}) {
  const { dirs = [] } = options

  return createConfigForNuxt({
    features: {
      tooling: true,
      stylistic: true,
    },
    dirs: {
      src: dirs,
    },
  })
    .append({
      plugins: {
        '@stylistic': stylistic,
        'import-x': importX,
      },
      rules: {
        // Stylistic rules
        '@stylistic/indent': ['error', 2],
        '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
        '@stylistic/semi': ['error', 'never'],
        '@stylistic/comma-dangle': ['error', 'always-multiline'],
        '@stylistic/arrow-parens': ['error', 'as-needed'],
        '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        '@stylistic/object-curly-spacing': ['error', 'always'],
        '@stylistic/array-bracket-spacing': ['error', 'never'],

        // Import ordering
        'import-x/order': ['error', {
          'groups': [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'type',
          ],
          'pathGroups': [
            {
              pattern: '#imports',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@/**',
              group: 'internal',
            },
            {
              pattern: '~/**',
              group: 'internal',
            },
          ],
          'pathGroupsExcludedImportTypes': ['builtin'],
          'newlines-between': 'never',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true,
          },
        }],
        'import-x/first': 'error',
        'import-x/newline-after-import': 'error',
        'import-x/no-duplicates': 'error',
      },
    })
}

// Default export for direct usage
export default createKynethEslintConfig()
