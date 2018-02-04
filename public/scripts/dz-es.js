'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dz = function () {
    function Dz(element, num) {
        _classCallCheck(this, Dz);

        this.element = element;
        this.num = num;
    }

    _createClass(Dz, [{
        key: 'dz',
        value: function dz() {
            var _this = this;
            this.element.click(function () {
                var st = null,
                    dateTime = new Date().getTime();
                _this.num = add(_this.num);
                if (_this.num >= 10) {
                    _this.num = 0;
                } else {
                    _this.element.append('<span class="add addanmt ' + dateTime + '">+1</span>');
                    setTimeout(function () {
                        _this.element.find("." + dateTime + "").remove();
                    }, 400);
                    axios.get('/index/updata')
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            });
            function removeAdd(cname) {
                _this.element.find(cname).remove();
            }
        }
    }]);

    return Dz;
}();

var Dzs = function (_Dz) {
    _inherits(Dzs, _Dz);

    function Dzs(element, num) {
        _classCallCheck(this, Dzs);

        return _possibleConstructorReturn(this, (Dzs.__proto__ || Object.getPrototypeOf(Dzs)).call(this, element, num));
    }

    return Dzs;
}(Dz);

exports.default = Dzs;
