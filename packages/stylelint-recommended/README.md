# @reloaddk/stylelint-recommended

A [Reload](https://reload.dk/) opinionated way of making sure our CSS code is up to snuff.

## Usage

### Install

```sh
npm install stylelint @reloaddk/stylelint-recommended prettier --save-dev
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

Spin this badboy up and point stylelint towards your CSS files.

```sh
npx stylelint "**/*.css"
```
