const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId:'ByteBank',
  "video": true,
  e2e: {
    baseUrl: 'http://localhost:3000'
  },
});
