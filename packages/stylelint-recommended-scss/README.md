# @reloaddk/stylelint-recommended-scss

A [Reload](https://reload.dk/) opinionated way of making sure our SCSS code is up to snuff.

## Usage

### Install

```sh
npm install stylelint @reloaddk/stylelint-recommended-scss prettier --save-dev
```

Create these two files alongside your `package.json` file.

### .prettierrc.json

```json
{}
```

### .stylelintrc.json

```json
{
  "extends": ["@reloaddk/stylelint-recommended-scss"]
}
```

Spin this badboy up and point stylelint and prettier towards your SCSS files.

```sh
npx stylelint "**/*.scss" && npx prettier "**/*.scss"
```

#### Lint

```sh
npx stylelint "**/*.scss" && npx prettier "**/*.scss" --check
```

#### Format

```sh
npx stylelint "**/*.scss" --fix && npx prettier "**/*.scss" --write
```

## Additional rules

Wanting to add additional rules is straightforward.

### [.stylelintrc.json](https://stylelint.io/user-guide/configure#rules)

```json
{
  "extends": ["@reloaddk/stylelint-recommended-scss"],
  "rules": {
    "color-no-invalid-hex": true
  }
}
```

If wanting to extend the `@reloaddk/stylelint-recommended-scss` we need to re-apply
the prettier `stylelint-config-prettier` configuration that turns off all
stylelint rules that is prettiers responsability.

Imagine we wanted to apply the Github CSS guidelines we would have to install
their config, extend from it and then make sure to append `stylelint-config-prettier`.

```sh
npm install stylelint-config-primer stylelint-config-prettier --save-dev
```

```json
{
  "extends": [
    "@reloaddk/stylelint-recommended-scss",
    "stylelint-config-primer",
    "stylelint-config-prettier"
  ]
}
```
