/**
 * These rules enforce Hack Reactor's style guide.
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
**/

module.exports = {
  env: {
    'es6': true
  },
  parserOptions: {
    ecmaFeatures: {
      'jsx': true
    }
  },
  rules: {
    /* indentation */
    'no-mixed-spaces-and-tabs': 2,
    'indent': [2, 2],
    /* variable case */
    'camelcase': 2,
    /* language constructs */
    'curly': 2,
    'eqeqeq': [2, 'smart'],
    'func-style': [2, 'expression'],
    /* semicolons */
    'semi': 2,
    'no-extra-semi': 2,
    /* padding & additional whitespace (perferred but optional) */
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'semi-spacing': 1,
    'key-spacing': 1,
    'block-spacing': 1,
    'comma-spacing': 1,
    'no-multi-spaces': 1,
    'space-before-blocks': 1,
    'keyword-spacing': [1, { 'before': true, 'after': true }],
    'space-infix-ops': 1,
    /* variable declaration */
    'one-var': [1, { 'uninitialized': 'always', 'initialized': 'never' }],
    /* minuta */
    'comma-style': [2, 'last'],
    'quotes': [1, 'single']
  }
};
