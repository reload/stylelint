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

Spin this badboy up and point stylelint towards your SCSS files.

```sh
npx stylelint "**/*.scss"
```
