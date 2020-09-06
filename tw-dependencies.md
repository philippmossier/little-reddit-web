# Dependencies for tailwind

NPM package:

- npm install --save-dev stylelint stylelint-config-standard

Install Visual Studio Code extensions:

- Stylelint
- Tailwind CSS Intellisense

.vscode/settings.json

```json
"css.validate": false,
"less.validate": false,
"scss.validate": false
```

stylelint.config.js

```js
module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
  },
};
```
