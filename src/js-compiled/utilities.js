'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utilities = function () {
    function Utilities() {
        _classCallCheck(this, Utilities);
    }

    _createClass(Utilities, null, [{
        key: 'number',
        value: function number(n) {
            var regex = new RegExp("[0-9]*\.?[0-9]*");
            var formatted = regex.test(n);

            return formatted && typeof n == 'string';
        }
    }, {
        key: 'pair',
        value: function pair(x) {
            return !(x % 2);
        }
    }, {
        key: 'round',
        value: function round(x, n) {
            return parseFloat(x).toFixed(n);
        }
    }, {
        key: 'nboccurence',
        value: function nboccurence(c, ch) {
            var regex = new RegExp(c, 'g');

            var formatted = ch.match(regex);

            return formatted.length;
        }
    }, {
        key: 'substitute',
        value: function substitute(c1, c2, c) {
            var regex = new RegExp(c1, 'g');

            return c.replace(regex, c2);
        }
    }, {
        key: 'tn',
        value: function tn(n) {
            return document.getElementsByName(n);
        }
    }, {
        key: 'n',
        value: function n(_n) {
            return document.getElementsByName(_n)[0];
        }
    }, {
        key: 'cf',
        value: function cf() {
            return document.createDocumentFragment();
        }
    }, {
        key: 'convertCss',
        value: function convertCss(string) {
            var occurrences = string.match(new RegExp('\-[a-z]', 'g'));
            for (var i in occurrences) {
                string = string.replace(occurrences[i], occurrences[i].replace('-', '').toUpperCase());
            }

            return string;
        }
    }, {
        key: 'merge',
        value: function merge(arrayA, arrayB) {
            for (var i in arrayB) {
                arrayA.push(arrayB[i]);
            }
            return arrayA;
        }
    }, {
        key: 'p',
        value: function p(number, power) {
            var finalNumber = 1;
            for (var i = 0; i < power; i++) {
                finalNumber *= number;
            }

            return finalNumber;
        }
    }, {
        key: 'ajax',
        value: function ajax(json) {
            if (['get', 'post', 'delete', 'put', 'patch'].indexOf(json.type.toLowerCase()) < 0) {
                console.log('http method is wrong');return false;
            }

            var type = json.type;
            var url = json.url;
            var success = json.success;
            var parse = json.parse != false;
            var data = null;

            if (['post', 'delete', 'put', 'patch'].indexOf(type.toLowerCase()) >= 0 && json.data) {
                for (var k in json.data) {
                    data += k + '=' + encodeURIComponent(json.data[k]) + '&';
                }
            }

            var xhttp = new XMLHttpRequest();
            xhttp.open(type, url, true);

            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && (this.status == 200 || this.status == 201 || this.status == 0)) {
                    if (parse) {
                        success(JSON.parse(this.responseText));
                    } else {
                        success(this.responseText);
                    }
                } else if (this.readyState == 4) {
                    console.log('error : ' + this.status);
                }
            };
            xhttp.send(data);
        }
    }]);

    return Utilities;
}();
//# sourceMappingURL=utilities.js.map
