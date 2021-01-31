module.exports = {
  transform: {
    '^.+\\.js?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.css$': 'identity-obj-proxy',
    '.+\\.(jpg|png)$': '<rootDir>/__mocks__/file.js',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFiles: ['<rootDir>/loader-shim.js'],
}
