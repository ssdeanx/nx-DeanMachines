module.exports = {
  '*.{js,jsx,ts,tsx}': ['nx affected:lint --uncommitted --fix', 'nx affected:test --uncommitted'],
  '*.{json,md,css,scss,html}': ['nx format:write --uncommitted'],
};
