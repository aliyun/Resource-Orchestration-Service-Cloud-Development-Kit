module.exports = {
  roots: ['<rootDir>/packages/@alicloud/test'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
