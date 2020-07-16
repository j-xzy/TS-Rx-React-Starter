module.exports = {
  setupFiles: ['./__tests__/setup.ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/scripts/jestMock.js",
    "\\.(css|styl|less)$": "<rootDir>/scripts/jestMock.js"
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)']
}