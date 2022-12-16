module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        'd.ts': 'never',
      },
    ],
    'global-require': 'off',
    'no-useless-catch': 'off',
    'vue/multi-word-component-names': 'off',
    'consistent-return': 'off',
    'vue/no-v-for-template-key': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.d.ts'],
        moduleDirectory: ['node_modules', '@types', 'src/'],
      },
      typescript: {},
    },
  },
};
