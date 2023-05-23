const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://nxtgenaiacademy.com/demo-site/',
    defaultCommandTimeout: 10000,
    viewportWidth: 1600,
    viewportHeight: 1000,
  },
})