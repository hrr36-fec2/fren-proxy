/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  extends: './node_modules/eslint-config-hackreactor/index.js',
  rules: {
    camelcase: [0, 'never'], // gives me warnin on my seeds
    'one-var': [0, 'never'],  // it gets confusing with so many var/let/const using react hooks :|
    'no-multi-spaces': [0, 'never'] // its hard to reader decleration if this is enforced
  } // i need to overide some rules
};