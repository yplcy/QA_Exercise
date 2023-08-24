import { defineConfig } from 'cypress';
import { setupNodeEvents } from './setupNodeEvents';

export default defineConfig({
  pageLoadTimeout: 100000,
  chromeWebSecurity: false,
  video: false,
  env: {
    username: 'lawson',
    password: 'lawson',
    envname: 'LOCALHOST',
    params: {
      'csk.cli': true,
      'csk.testversion': 3,
      'csk.menuversion': 'v2',
    },
    allure: true,
    allureLogCypress: true,
    allureLogGherkin: true,
    allureClearSkippedTests: true,
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents,
    baseUrl: 'http://localhost:8080/',
    specPattern: 'cypress/e2e/**/*.feature',
    excludeSpecPattern: [
      '**/*.ts'
    ]
  },
});
