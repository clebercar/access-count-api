const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: 'src',
  testMatch: ['<rootDir>/**/*.test.ts'],
  automock: false,
  clearMocks: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
  collectCoverage: true,
  coverageDirectory: '../coverage',
  collectCoverageFrom: [
    '<rootDir>/**/*.ts',
    '!<rootDir>/domain/**/infra/typeorm/repositories/*.ts',
    '!<rootDir>/shared/providers/**/fakes/*.ts',
    '!<rootDir>/infra/typeorm/**/*.ts',
  ],
  modulePathIgnorePatterns: ['<rootDir>/@types'],
  coverageReporters: ['text-summary', 'lcov'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 64,
      lines: 80,
      functions: 50,
    },
  },
  setupFiles: ['./jest.setup.ts'],
}
