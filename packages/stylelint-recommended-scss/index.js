"use strict";

module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
    "stylelint-config-prettier",
  ],
  rules: {
    "max-nesting-depth": 4,
    "order/order": null,
    "order/properties-order": null,
    "order/properties-alphabetical-order": null,
    "no-descending-specificity": null
    "no-invalid-position-at-import-rule": null
    "selector-max-compound-selectors": null
    "max-nesting-depth": null
    "selector-no-qualifying-type": null
    "color-named": null
    "declaration-empty-line-before": null
    "property-no-vendor-prefix": null
    "value-no-vendor-prefix": null
    "selector-max-id": null
    "scss/at-mixin-pattern": "^[a-z_][a-z0-9_-]*$"
    "scss/dollar-variable-pattern": "^[a-z_][a-z0-9_-]*$"
    "scss/percent-placeholder-pattern": "^[a-z_][a-z0-9_-]*$"
    "selector-class-pattern": "[A-Za-z0-9_-]+"
  },
};
