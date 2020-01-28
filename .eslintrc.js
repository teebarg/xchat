module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-blocks': 'off',
    'comma-spacing': 'off',
    'no-unused-vars': 'off',
    'quotes': 0,
    'comma-dangle': 'off',
    'Extra semicolon': 'off',
    'indent': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
