'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _appEs = require('../app-es.js');

var _appEs2 = _interopRequireDefault(_appEs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = function request() {
    return (0, _supertest2.default)(_appEs2.default.listen());
};

describe('接口测试', function () {
    it('点赞加1', function (done) {
        request().get('/index/updata').expect(200).end(function (err, res) {
            if (res) {
                return done(err);
            }
            done();
        });
    });
});
