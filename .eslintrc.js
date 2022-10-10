module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "node": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:vue/essential",
      "plugin:@typescript-eslint/recommended"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
      "ecmaVersion": "latest",
      "parser": "@typescript-eslint/parser",
      "sourceType": "module"
  },
  "plugins": [
      "vue",
      "@typescript-eslint"
  ],
  "rules": {
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': "off",
    'vue/singleline-html-element-content-newline': "off",
    'vue/html-self-closing': "off",
    'vue/html-indent': "off",
    'vue/no-v-for-template-key': "off",
    "@typescript-eslint/no-extra-semi": "off",
    "no-useless-catch": "off"
  }
}
