const baseConfig = require('../.eslintrc.json');

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      ...baseConfig.rules,
      '@typescript-eslint/no-require-imports': ['error', { allow: ['.cjs'] }],
    },
  },
];
