module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 100],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'scope-enum': [
      2,
      'always',
      ['repo', 'ci', 'docs', 'ui', 'feature', 'model', 'util', 'data', 'asset'],
    ],
  },
};
