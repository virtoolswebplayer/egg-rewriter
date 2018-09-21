# egg-rewriter


<!--
Description here.
-->

## Install

```bash
$ npm i egg-rewriter --save
# or
$ yarn add egg-rewriter
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
  // 默认重写到 /index.html
  index: '/index.html',
  // 打印日志
  verbose: true,
  // 白名单正则，默认 /\/api/gi, 符合白名单规则的url一律不重写
  whiteList: /\/api/gi,  
  // 自定义url重写规则，覆盖 index
  rewriteRule: [
      { from: /\/admin/, to: '/admin.html' },
      { from: /\/login/, to: '/login.html' },
  ],
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/virtoolswebplayer/egg-rewriter/issues).

## License

[MIT](LICENSE)
