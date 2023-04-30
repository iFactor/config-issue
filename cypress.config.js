const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  videoUploadOnPasses: false,
  experimentalStudio: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
