const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "vaxsmh", //esse id é a forma de se connectar no cypress cloud
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true, //executar relatórios com mochawesome: npx cypress run --reporter mochawesome
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',//diretório dos relatórios
      overwrite: false,
      html: true, //se estiver true gera relatórios em html
      json: true, //se estiver true gera relatórios em json
      timestamp: "mmddyyyy_HHMMss"
    }
  },
});
