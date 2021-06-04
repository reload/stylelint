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

Spin this badboy up and point stylelint towards your CSS or SCSS files.

```sh
npx stylelint "**/*.css"
```
