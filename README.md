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

```sh
npx stylelint "**/*.css" && npx prettier "**/*.css"
```

## Editor integration

`.example.vscode` is an example of smart editor integration that will help
you with code quality and code style on save. The equivelant can be configured
for additional editors. PR's are encouraged.
