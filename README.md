# NxDeanMachines

A comprehensive Nx monorepo with an optimized project structure and robust code organization.

## Structure

This monorepo follows a carefully planned structure:

- **Apps**: Frontend and backend applications
- **Libraries**:
  - `ui`: Reusable UI components and design system elements
  - `feature`: Business feature implementations
  - `util`: Utility functions and helpers
  - `model`: Data models and TypeScript interfaces
  - `data`: Data access and state management
  - `tool`: Build scripts and development tools
  - `asset`: Shared assets (icons, themes, etc.)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nx-DeanMachines.git
   cd nx-DeanMachines
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npx nx serve [app-name]
   ```

## Development Workflow

### Generate a Library

```bash
# Generate a UI library
npx nx g @nx/react:library ui-components --directory=libs/ui --buildable

# Generate a feature library
npx nx g @nx/react:library auth-feature --directory=libs/feature --buildable

# Generate a utility library
npx nx g @nx/js:library format-utils --directory=libs/util --buildable
```

### Running Tasks

```bash
# Build a specific project
npx nx build [project-name]

# Test a specific project
npx nx test [project-name]

# Lint a specific project
npx nx lint [project-name]

# Run affected commands
npx nx affected:build
npx nx affected:test
```

### Versioning and Release

```bash
# Version and release libraries
npx nx release --dry-run  # Preview changes
npx nx release            # Actual release
```

## Code Quality

This project enforces strict code quality standards through:
- ESLint for code linting
- Prettier for code formatting
- Module boundary enforcement
- Comprehensive test coverage requirements

## CI/CD

Continuous Integration is set up through GitHub Actions, running:
- Linting
- Testing
- Building
- (Optional) Deployment

## Further Resources

Refer to our detailed [Monorepo Guide](./documentation/Monorepo-v1.md) for in-depth explanations of architecture and practices.

## Connect to Nx Cloud

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/ftATOUMB3y)
