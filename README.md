# egg-rewrite

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-rewrite.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-rewrite
[travis-image]: https://img.shields.io/travis/eggjs/egg-rewrite.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-rewrite
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-rewrite.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-rewrite?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-rewrite.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-rewrite
[snyk-image]: https://snyk.io/test/npm/egg-rewrite/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-rewrite
[download-image]: https://img.shields.io/npm/dm/egg-rewrite.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-rewrite

<!--
Description here.
-->

## Install

```bash
$ npm i egg-rewriter --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.rewriter = {
  enable: true,
  package: 'egg-rewriter',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.rewriter = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
