module.exports = {
  "rootDir": "./",
  "preset": "ts-jest",
  "testEnvironment": "node",
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/**",
    "!src/resources/**"
  ]
};
