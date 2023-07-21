"use strict";

module.exports = {
  extends: [
    "stylelint-config-sass-guidelines"
  ],
  rules: {
    "max-nesting-depth": 3,
    "order/order": null,
    "order/properties-order": null,
    "order/properties-alphabetical-order": null,
    "selector-class-pattern": "^[a-z][a-z0-9_-]*$",
  },
};
