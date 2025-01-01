module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,ts}", // Inclui todos os arquivos .js e .ts no projeto
    "!**/node_modules/**", // Exclui a pasta node_modules
    "!**/dist/**", // Exclui a pasta de build (opcional)
  ],
  testEnvironment: "node", // Certifique-se de usar o ambiente correto
};
