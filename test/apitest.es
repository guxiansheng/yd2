import requestsuper from 'supertest';
import app from '../app-es.js';

const request = function() {
    return requestsuper(app.listen());
}

describe('接口测试', function() {
  it('点赞加1', function(done) {
    request()
      .get('/index/updata')
      .expect(200)
      .end(function(err, res) {
          if (res) {
              return done(err);
          }
          done();
      })
  });
});