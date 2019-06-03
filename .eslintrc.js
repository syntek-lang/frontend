module.exports = {
  root: true,
  extends: [
    '@syntek/syntek/vue',
    'plugin:nuxt/recommended'
  ],
  rules: {
    // Disable this rule so imnport aliases work
    'import/no-unresolved': 'off'
  }
}
