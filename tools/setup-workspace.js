#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Ensure the directory structure exists
console.log('📁 Creating directory structure...');
[
  'apps',
  'libs/ui',
  'libs/feature',
  'libs/util',
  'libs/model',
  'libs/data',
  'libs/tool',
  'libs/asset',
].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`  Created ${dir}`);
  }
});

// Create a basic .nvmrc file to standardize Node.js version
console.log('📝 Creating .nvmrc file...');
const currentNodeVersion = process.version.slice(1); // Remove the 'v' prefix
fs.writeFileSync('.nvmrc', currentNodeVersion);
console.log(`  Set Node.js version to ${currentNodeVersion}`);

// Create a basic tsconfig.base.json if it doesn't exist
if (!fs.existsSync('tsconfig.base.json')) {
  console.log('📝 Creating tsconfig.base.json...');
  fs.writeFileSync(
    'tsconfig.base.json',
    JSON.stringify(
      {
        compileOnSave: false,
        compilerOptions: {
          rootDir: '.',
          sourceMap: true,
          declaration: false,
          moduleResolution: 'node',
          emitDecoratorMetadata: true,
          experimentalDecorators: true,
          importHelpers: true,
          target: 'es2015',
          module: 'esnext',
          lib: ['es2020', 'dom'],
          skipLibCheck: true,
          skipDefaultLibCheck: true,
          baseUrl: '.',
          paths: {},
        },
        exclude: ['node_modules', 'tmp'],
      },
      null,
      2
    )
  );
  console.log('  Created tsconfig.base.json');
}

console.log('\n✅ Workspace setup complete!');
console.log('\nNext steps:');
console.log(
  '1. Run `npx nx g @nx/react:application dashboard --directory=apps --routing=true --style=css --linter=eslint --bundler=vite` to create your first React app'
);
console.log(
  '2. Run `npx nx g @nx/react:library ui-components --directory=libs/ui --buildable` to create your first library'
);
console.log('3. Run `npx nx serve dashboard` to start your application');
