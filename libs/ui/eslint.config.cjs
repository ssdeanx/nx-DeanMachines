import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nxEslintPlugin from '@nx/eslint-plugin';
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  { plugins: { '@nx': nxEslintPlugin } },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@typescript-eslint/no-require-imports': ['error', { allow: ['.cjs'] }],
    },
  },
  ...compat.config({
    extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  }),
  {
    ignores: ['jest.config.ts', '**/dist/**', '**/node_modules/**'],
  },
];

// Import button using require (since this is a .cjs file)
// Remove or fix the button import
// If the button module exists, ensure the path is correct
// If not needed, remove this section entirely

// Merge button-specific rules with existing config
module.exports = [
  ...module.exports,
  {
    files: ['**/button/**/*.ts', '**/button/**/*.tsx'],
    rules: {
      // Add any button-specific rules here
      '@typescript-eslint/explicit-function-return-type': 'error',
      'react/prop-types': 'off', // Example: Disable prop-types for button
    },
  },
];
