"use strict";

module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
    "stylelint-config-prettier",
  ],
  rules: {
    "max-nesting-depth": 3,
    order: null,
    "properties-order": null,
    "properties-alphabetical-order": null,
  },
};
