// i use this only for css files (index.css for example)
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
            "layer"
          ],
        },
      ],
      "declaration-block-trailing-semicolon": null,
      "no-descending-specificity": null,
      "comment-empty-line-before": null,
    },
  };