module.exports = {
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json'
        }
    },
    moduleFileExtensions: [
        'ts',
        'js'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: [
        '**/test/**/*.test.(ts|js)'
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/"
    ],
    testEnvironment: 'node'
};