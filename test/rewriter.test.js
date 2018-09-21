'use strict';

const mock = require('egg-mock');

describe('test/rewriter.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/rewriter-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/api/foo')
      .expect('hi, rewrite')
      .expect(200);
  });
});
