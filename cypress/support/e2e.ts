// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import '@shelex/cypress-allure-plugin';
import 'cypress-real-events/support';
import 'cypress-xpath';

// This ignores js errors for now since we got a couple already from the login page
// returning false here prevents Cypress from failing the test
Cypress.on('uncaught:exception', (err, runnable) => false);

Cypress.Screenshot.defaults({
});

