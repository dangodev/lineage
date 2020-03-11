module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-rational-order',
  ],
  plugins: ['stylelint-order'],
  syntax: 'scss',
  rules: {
    'at-rule-no-unknown': null, // this is Sass, yo
    'declaration-block-single-line-max-declarations': 0,
    'no-descending-specificity': null,
  },
};
