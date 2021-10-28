module.exports = {
  //"\\.(css)$": "jest-css-modules"
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  // coverageReporters: ['lcov'],
  // coverageDirectory: 'test-coverage',
  collectCoverageFrom: [
    // '**/*.tsx'
    // '**/components/**/*.tsx',
    '<rootDir>/components/**/*.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    '^@/etc/(.*)$': ['<rootDir>/etc/$1'],
    '^@/hooks/(.*)$': ['<rootDir>/hooks/$1'],
    '^@/components/(.*)$': ['<rootDir>/components/$1'],
    '^@/styles/(.*)$': ['<rootDir>/styles/$1'],
    '^@/libs/(.*)$': ['<rootDir>/libs/$1'],
  },
  modulePathIgnorePatterns: ["<rootDir>/cypress/"],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}
