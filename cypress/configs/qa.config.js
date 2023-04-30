const { defineConfig } = require("cypress");

module.exports = defineConfig({
  environment: "Environment: QA",
  todoUrl: "https://example.cypress.io/todo",
  watchForFileChanges: false,
  videoUploadOnPasses: false,
  experimentalStudio: true,
  e2e: {
    baseUrl: 'https://example.cypress.io',
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});