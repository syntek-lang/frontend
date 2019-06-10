module.exports = {
  root: true,
  extends: [
    '@syntek/syntek/vue',
    'plugin:nuxt/recommended',
  ],
  rules: {
    // Disable this rule so import aliases work
    'import/no-unresolved': 'off',
  },
};
