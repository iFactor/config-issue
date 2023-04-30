const { defineConfig } = require("cypress");

module.exports = defineConfig({
  environment: "Environment: DEV",
  todoUrl: "https://example.cypress.io/todo",
  watchForFileChanges: false,
  videoUploadOnPasses: false,
  experimentalStudio: true,
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});