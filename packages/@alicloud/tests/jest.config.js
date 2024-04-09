module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/service', '<rootDir>/function'],
    testMatch: ['**/*.test.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    }
};
