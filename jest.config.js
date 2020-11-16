module.exports = {
  roots: ['<rootDir>/packages/@ros-cdk/test'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
