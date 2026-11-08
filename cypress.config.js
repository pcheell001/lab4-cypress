
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,

  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,

  video: true,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: false,

  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: false
  }
});
