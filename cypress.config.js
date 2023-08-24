import { defineConfig } from 'cypress';

export default defineConfig({
  pageLoadTimeout: 100000,
  chromeWebSecurity: false,
  video: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    excludeSpecPattern: [
      '**/*.ts'
    ]
  },
});
