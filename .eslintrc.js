module.exports = {
  env: {
    browser: true,
    es6: true,
    jasmine: true,
    amd: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': ['warn'],
  },
  plugins: ['html'],
};
