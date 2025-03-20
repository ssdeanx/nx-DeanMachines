import { getJestProjectsAsync } from '@nx/jest';

export default {
  projects: await getJestProjectsAsync(),
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**', '!**/vendor/**', '!**/dist/**'],
};
