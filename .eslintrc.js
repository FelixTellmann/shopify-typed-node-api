module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  plugins: ['@shopify'],
  extends: ['plugin:@shopify/typescript'],
  ignorePatterns: ['dist/', "src/clients/rest/dataTypes.ts", "src/clients/rest/types2.ts"],
  rules: {
    'import/no-named-as-default': 0,
    'no-mixed-operators': 0,
    'no-console': 0,
  },
};
