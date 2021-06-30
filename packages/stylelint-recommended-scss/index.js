"use strict";

module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
    "stylelint-config-prettier",
  ],
  rules: {
    "max-nesting-depth": 3,
    "order/order": null,
    "order/properties-order": null,
    "order/properties-alphabetical-order": null,
  },
};
