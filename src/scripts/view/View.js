"use strict";
exports.__esModule = true;
exports.View = void 0;
var View = /** @class */ (function () {
    function View(screen, ticker) {
        this.appScreen = screen;
        this.appTicker = ticker;
        this.shapesCountEl = document.getElementById("shapesCount");
        this.shapesAreaEl = document.getElementById("shapesArea");
        this.shapesPerSec = document.getElementById("shapesPerSecond");
        this.shapesPerSecDecrement = document.getElementById("countDecrement");
        this.shapesPerSecIncrement = document.getElementById("countIncrement");
        this.gravity = document.getElementById("shapesGravity");
        this.gravityDecrement = document.getElementById("gravityDecrement");
        this.gravityIncrement = document.getElementById("gravityIncrement");
        this.updShapesAndArea = this.updShapesAndArea.bind(this);
        this.updateControls = this.updateControls.bind(this);
    }
    View.prototype.updShapesAndArea = function (shapesCount, shapesArea) {
        this.shapesCountEl.innerHTML = "".concat(shapesCount);
        this.shapesAreaEl.innerHTML = "".concat(shapesArea, " px^2");
    };
    View.prototype.updateControls = function (shapesPerSec, gravity) {
        this.shapesPerSec.value = "Count: ".concat(shapesPerSec);
        this.gravity.value = "Gravity: ".concat(gravity);
    };
    return View;
}());
exports.View = View;
