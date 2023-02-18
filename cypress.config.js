const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.amazon.com/',
    custumerServiceUrl: '/gp/help/customer/display.html/?nodeId=GENAFPTNLHV7ZACW',
    defaultCommandTimeout: 10000,
    viewportWidth: 1600,
    viewportHeight: 1000,
  },
});