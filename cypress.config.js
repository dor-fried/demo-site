const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.amazon.com',
    defaultCommandTimeout: 8000,
    custumerServiceUrl: '/gp/help/customer/display.html/?nodeId=GENAFPTNLHV7ZACW',
    setupNodeEvents(on, config) {
    },
  },
});