// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testRegex: '((\\.|/*.)(spec))\\.js?$',
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js']
};
