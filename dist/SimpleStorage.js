'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleStorage = function () {
    function SimpleStorage() {
        _classCallCheck(this, SimpleStorage);
    }

    _createClass(SimpleStorage, null, [{
        key: 'parse',
        value: function parse(val, isSet) {
            if (isSet) return JSON.stringify(val);
            return val == 'undefined' || val == 'null' ? null : JSON.parse(val);
        }
    }, {
        key: 'has',
        value: function has(key) {
            return !!SimpleStorage.parse(window.localStorage.getItem(key));
        }
    }, {
        key: 'get',
        value: function get(key) {
            return new Promise(function (resolve, reject) {
                try {
                    resolve(SimpleStorage.parse(window.localStorage.getItem(key)));
                } catch (err) {
                    reject(err);
                }
            });
        }
    }, {
        key: 'set',
        value: function set(key, value) {
            return new Promise(function (resolve, reject) {
                try {
                    window.localStorage.setItem(key, SimpleStorage.parse(value, true));
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }, {
        key: 'clear',
        value: function clear(key) {
            return new Promise(function (resolve, reject) {
                try {
                    if (key) {
                        window.localStorage.removeItem(key);
                    } else {
                        window.localStorage.clear();
                    }
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }]);

    return SimpleStorage;
}();

exports.default = SimpleStorage;
