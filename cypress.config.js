const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Habilita la grabación de video
    video: true,
    // (Opcional) Si quieres que comprima el video para que ocupe menos en Jenkins
    videoCompression: 32,
    // Asegura que guarde capturas si algo falla
    screenshotOnRunFailure: true,
  },
});