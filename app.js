'use strict';

module.exports = app => {
  const index = app.config.coreMiddleware.indexOf('static');
  if (index === -1) {
    app.config.coreMiddleware.unshift('rewriter');
  } else {
    app.config.coreMiddleware.splice(index, 0, 'static');
  }
};
