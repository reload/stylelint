# Styling the Reload way

A [Reload](https://reload.dk/) opinionated way of making sure our CSS/SCSS code is up to snuff.

## Usage

### Install

```sh
npm install stylelint prettier --save-dev
```

Install either `@reloaddk/stylelint-recommended` or `@reloaddk/stylelint-recommended-scss`
depending upon your usecase.

```sh
npm install @reloaddk/stylelint-recommended --save-dev
```

Create these two files alongside your `package.json` file.

### .prettierrc.json

```json
{}
```

### .stylelintrc.json

```json
{
  "extends": ["@reloaddk/stylelint-recommended"]
}
```

Spin this badboy up and point stylelint and prettier towards your CSS or SCSS files.

#### Lint

```sh
npx stylelint "**/*.css" && npx prettier "**/*.css" --check
```

#### Format

```sh
npx stylelint "**/*.css" --fix && npx prettier "**/*.css" --write
```

## Additional rules

Wanting to add additional rules is straightforward.

### [.stylelintrc.json](https://stylelint.io/user-guide/configure#rules)

```json
{
  "extends": ["@reloaddk/stylelint-recommended"],
  "rules": {
    "color-no-invalid-hex": true
  }
}
```

If wanting to extend the `@reloaddk/stylelint-recommended` we need to re-apply
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
    "@reloaddk/stylelint-recommended",
    "stylelint-config-primer",
    "stylelint-config-prettier"
  ]
}
```

## Editor integration

The `editor_integration` directory is an example of smart editor integration
that will help you with code quality and code style on save.
The equivelant can be configured for additional editors.
PR's are encouraged to broaden the example support.
