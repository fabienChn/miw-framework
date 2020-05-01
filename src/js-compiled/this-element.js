'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Miw = function (_Utilities) {
    _inherits(Miw, _Utilities);

    function Miw(cssSelector, parent) {
        var _ret;

        _classCallCheck(this, Miw);

        var _this = _possibleConstructorReturn(this, (Miw.__proto__ || Object.getPrototypeOf(Miw)).call(this));

        _this.element = false;
        _this.elements = false;

        if (cssSelector) {
            var selectorIsElement = cssSelector instanceof HTMLElement;

            if (parent) console.log(cssSelector + ':' + parent);
            if (parent && parent instanceof HTMLElement) {
                if (document.querySelectorAll(cssSelector).length == 1) {
                    if (selectorIsElement) _this.element = cssSelector;
                    _this.element = parent.querySelector(cssSelector);
                } else {
                    _this.elements = parent.querySelectorAll(cssSelector);
                }
            } else if (selectorIsElement) {
                _this.element = cssSelector;
            } else {
                if (document.querySelectorAll(cssSelector).length == 1) _this.element = document.querySelector(cssSelector);else _this.elements = document.querySelectorAll(cssSelector);
            }
        }

        return _ret = _this, _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Miw, [{
        key: 'processSingleOrAll',
        value: function processSingleOrAll(myFunction) {
            if (this.element) {
                myFunction(this.element);
            } else if (this.elements) {
                this.elements.forEach(function (element) {
                    myFunction(element);
                });
            }

            return this;
        }
    }, {
        key: 'substitue',
        value: function substitue(c1, c2) {
            return this.processSingleOrAll(function (element) {
                element.textContent.split(c1).join(c2);
            });
        }
    }, {
        key: 'remove',
        value: function remove() {
            return this.processSingleOrAll(function (element) {
                element.remove();
            });
        }
    }, {
        key: 'text',
        value: function text(_text) {
            if (this.element && _text == null) return this.element.textContent;else if (this.elements && _text == null) return null;

            return this.processSingleOrAll(function (element) {
                element.textContent = _text;
            });
        }
    }, {
        key: 'capitalize',
        value: function capitalize() {
            return this.processSingleOrAll(function (element) {
                element.textContent = element.textContent.charAt(0).toUpperCase() + element.textContent.slice(1).toLowerCase();
            });
        }
    }, {
        key: 'left',
        value: function left(n) {
            return this.processSingleOrAll(function (element) {
                var string = '';
                for (var i = 0; i < n; i++) {
                    string += element.textContent[i];
                }
                element.textContent = string;
            });
        }
    }, {
        key: 'right',
        value: function right(n) {
            return this.processSingleOrAll(function (element) {
                var string = '';
                for (var i = element.length - 1; i > element.length - n; i--) {
                    string = element.textContent[i] + string;
                }
                element.textContent = string;
            });
        }
    }, {
        key: 'trim',
        value: function trim() {
            return this.processSingleOrAll(function (element) {
                element.textContent.replace(/^\s+|\s+$/gm, '');
            });
        }
    }, {
        key: 'changeId',
        value: function changeId(val) {
            return this.processSingleOrAll(function (element) {
                element.id = val;
            });
        }
    }, {
        key: 'css',
        value: function css(obj) {
            if (typeof obj === 'string') {
                return this.element ? this.element.style[obj] : false;
            }

            return this.processSingleOrAll(function (element) {
                for (var i in obj) {
                    element.style[i] = obj[i];
                }
            });
        }
    }, {
        key: 'attribute',
        value: function attribute(obj) {
            if (typeof obj === 'string') {
                return this.element ? this.element.getAttribute(obj) : false;
            }

            return this.processSingleOrAll(function (element) {
                for (var k in obj) {
                    element.setAttribute(k, obj[k]);
                }
            });
        }
    }, {
        key: 'moveTo',
        value: function moveTo(x, y) {
            return this.processSingleOrAll(function (element) {
                element.style.position = 'absolute';
                element.style.left = x + 'px';
                element.style.top = y + 'px';
            });
        }
    }, {
        key: 'height',
        value: function height(_height) {
            if (this.element && _height == null) return this.element.offsetHeight;
            if (this.elements) return null;

            return this.processSingleOrAll(function (element) {
                if (_height == null) return element.offsetHeight;

                element.style.height = _height + 'px';
            });
        }
    }, {
        key: 'width',
        value: function width(_width) {
            if (this.element && _width == null) return this.element.offsetWidth;
            if (this.elements) return null;

            return this.processSingleOrAll(function (element) {
                element.style.width = _width + 'px';
            });
        }
    }, {
        key: 'val',
        value: function val(_val) {
            if (this.element && _val == null) return this.element.value;
            if (this.elements && _val == null) return null;

            return this.processSingleOrAll(function (element) {
                element.value = _val;
            });
        }
    }, {
        key: 'on',
        value: function on(event, action) {
            return this.processSingleOrAll(function (element) {
                if (event == null || action == null) return false;
                element.addEventListener(event, action);
            });
        }
    }, {
        key: 'getElement',
        value: function getElement() {
            if (!this.element) return null;

            return this.element;
        }
    }, {
        key: 'parent',
        value: function parent() {
            if (!this.element) return null;

            var miw = new Miw();
            miw.element = this.element.parentElement;

            return miw;
        }
    }, {
        key: 'offsetTop',
        value: function offsetTop(_offsetTop) {
            if (!this.element) return null;

            if (_offsetTop == null) return parseInt(this.element.style.top);

            this.element.style.position = 'absolute';
            this.element.style.top = _offsetTop + 'px';

            return this;
        }
    }, {
        key: 'offsetLeft',
        value: function offsetLeft(_offsetLeft) {
            if (!this.element) return null;

            if (_offsetLeft == null) return parseInt(this.element.style.left);

            this.element.style.position = 'absolute';
            this.element.style.left = _offsetLeft + 'px';

            return this;
        }
    }, {
        key: 'hide',
        value: function hide() {
            return this.processSingleOrAll(function (element) {
                element.style.display = 'none';
            });
        }
    }, {
        key: 'show',
        value: function show() {
            return this.processSingleOrAll(function (element) {
                element.style.display = 'inline-block';
            });
        }
    }, {
        key: 'append',
        value: function append(el, attributes, styles) {
            if (!this.element) return null;

            var element = document.createElement(el);

            if (attributes != null) {
                for (var k in attributes) {
                    element.setAttribute(k, attributes[k]);
                }
            }

            if (styles != null) {
                for (var _k in styles) {
                    element.style[_k] = styles[_k];
                }
            }

            this.element.appendChild(element);

            return this;
        }
    }, {
        key: 'after',
        value: function after(el, attributes, styles) {
            if (!this.element) return null;

            var newElement = document.createElement(el);

            if (attributes != null) {
                for (var k in attributes) {
                    newElement.setAttribute(k, attributes[k]);
                }
            }

            if (styles != null) {
                for (var _k2 in styles) {
                    newElement.style[_k2] = styles[_k2];
                }
            }

            this.element.parentNode.insertBefore(newElement, this.element.nextSibling);
            this.element = this.element.nextSibling;

            return this;
        }
    }, {
        key: 'html',
        value: function html(string) {
            return this.processSingleOrAll(function (element) {
                element.innerHTML = string;
            });
        }
    }, {
        key: 'empty',
        value: function empty() {
            return this.processSingleOrAll(function (element) {
                element.innerHTML = '';
            });
        }
    }, {
        key: 'first',
        value: function first() {
            if (!this.elements) return null;

            this.element = this.elements[0];
            this.elements = false;

            return this;
        }
    }, {
        key: 'last',
        value: function last() {
            if (!this.elements) return null;

            this.element = this.elements[this.elements.length - 1];
            this.elements = false;

            return this;
        }
    }, {
        key: 'thisIsAnArray',
        value: function thisIsAnArray() {
            if (!this.elements) return false;

            if (_typeof(this.elements) == Array) return true;
        }
    }, {
        key: 'count',
        value: function count() {
            if (!this.elements) return false;
            return this.elements.length;
        }
    }, {
        key: 'hasClass',
        value: function hasClass(string) {
            if (!this.element) return false;

            return this.element.className.split(' ').indexOf(string) >= 0;
        }
    }, {
        key: 'addClass',
        value: function addClass(string) {
            return this.processSingleOrAll(function (element) {
                element.className = element.className + ' ' + string;
            });
        }
    }, {
        key: 'removeClass',
        value: function removeClass(string) {
            return this.processSingleOrAll(function (element) {
                element.className = element.className.replace(string, '');
            });
        }
    }], [{
        key: 'appendElementToNodeIns',
        value: function appendElementToNodeIns(element, nodeIns) {
            var miw = new Miw();
            if (nodeIns) {
                if (nodeIns.element != null) {
                    nodeIns.element.appendChild(element);
                } else {
                    nodeIns.appendChild(element);
                }
                miw.element = element;
            }

            return miw;
        }
    }, {
        key: 'ce',
        value: function ce(el, nodeIns) {
            var element = document.createElement(el);

            return this.appendElementToNodeIns(element, nodeIns);
        }
    }, {
        key: 'ct',
        value: function ct(tx, nodeIns) {
            var element = document.createTextNode(tx);

            return this.appendElementToNodeIns(element, nodeIns);
        }
    }, {
        key: 'cn',
        value: function cn(node, attributes, styles, nodeIns) {
            var element = document.createElement(node);

            for (var k in attributes) {
                element.setAttribute(k, attributes[k]);
            }

            for (var _k3 in styles) {
                element.style[_k3] = styles[_k3];
            }

            return this.appendElementToNodeIns(element, nodeIns);
        }
    }]);

    return Miw;
}(Utilities);
//# sourceMappingURL=this-element.js.map
