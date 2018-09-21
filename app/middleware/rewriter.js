'use strict';
const chalk = require('chalk');
const url = require('url');

/**
 * url rewrite for egg
 * @param {object} opt rewrite options
 * @param {string} opt.index default rewrite to /index.html
 * @param {boolean} opt.verbose show log true or false
 * @param {Array<RegExp>} opt.rewriteRule custom rewrite rule and overwrite opt.index {from: RegExp; to: string}[]
 * @param {RegExp} opt.whiteList whiteList RegExp default is  /^\/api/gi
 * @return {next} return next()
 */
module.exports = function(opt) {
  return (ctx, next) => {
    const headers = ctx.headers;
    const parsedUrl = url.parse(ctx.url);
    const pathname = parsedUrl.pathname;
    const log = msg => ctx.app.logger.info('[rewrite]', chalk.green(msg));

    if (ctx.method !== 'GET') return next();
    if (!headers || typeof headers.accept !== 'string') return next();
    if (headers.accept.indexOf('application/json') === 0) return next();
    // dot path
    if (pathname.lastIndexOf('.') > pathname.lastIndexOf('/')) return next();
    // whiteList
    if (opt.whiteList) {
      const match = parsedUrl.pathname.match(opt.whiteList);
      if (match !== null) {
        return next();
      }
    }
    // rewriteRule
    if (opt.rewriteRule && opt.rewriteRule.length) {
      for (let i = 0; i < opt.rewriteRule.length; i++) {
        const rule = opt.rewriteRule[i];
        const match = parsedUrl.pathname.match(rule.from);
        if (match !== null) {
          opt.verbose && log(`rewrite ${ctx.url} to ${rule.to}`);
          ctx.url = rule.to;
          return next();
        }
      }
    }
    // default rewrite every path to opt.index or '/index.html'
    const rewriteTarget = opt.index || '/index.html';
    opt.verbose && log(`rewrite ${ctx.url} to ${rewriteTarget}`);
    ctx.url = rewriteTarget;
    return next();
  };
};
