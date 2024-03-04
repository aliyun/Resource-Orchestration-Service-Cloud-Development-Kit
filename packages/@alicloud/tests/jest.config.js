module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/service'],
    testMatch: ['**/*.test.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    }
};
