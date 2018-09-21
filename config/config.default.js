'use strict';

/**
 * egg-rewrite default config
 * @member Config#rewrite
 * @property {String} SOME_KEY - some description
 */
exports.urlrewrite = {
  index: '/index.html',
  verbose: true,
  rewriteRule: [],
  whiteList: /^\/api\//gi,
};
