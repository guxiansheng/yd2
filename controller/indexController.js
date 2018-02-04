"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexModle = require("../models/indexModle");

var _indexModle2 = _interopRequireDefault(_indexModle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexController = {
    index: function index() {
        return async function (ctx, next) {
            ctx.body = await ctx.render('index.html', {
                title: "点赞+"
            });
        };
    },
    updata: function updata() {
        return async function (ctx, next) {
            var indexMod = new _indexModle2.default();
            ctx.body = await indexMod.updateNum();
        };
    }
};
exports.default = indexController;
