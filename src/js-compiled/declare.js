"use strict";

var Miw = function Miw(cssSelector) {
    this.element = false;
    this.elements = false;

    if (cssSelector) {
        if (document.querySelectorAll(cssSelector).length == 1) this.element = this.select(cssSelector);else this.elements = this.selectAll(cssSelector);
    }

    return this;
};
//# sourceMappingURL=declare.js.map
