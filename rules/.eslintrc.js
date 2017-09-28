module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jquery': true
  },
  'extends': 'airbnb',
  'rules': {
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'never'],
    'global-require': 'off',
    'import/extensions': 'off',
    'import/newline-after-import': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false
    }],
    'default-case': 'off',
    'no-else-return': 'off',
    'no-new': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'none'}],
    'padded-blocks': 'off'
  }
};
