"use strict";
exports.__esModule = true;
exports.View = void 0;
var View = /** @class */ (function () {
    function View(app) {
        this.app = app;
        this.shapesCountEl = document.getElementById("shapesCount");
        this.shapesAreaEl = document.getElementById("shapesArea");
        this.shapesPerSecondEl = document.getElementById("shapesPerSecond");
        this.shapesGravity = document.getElementById("shapesGravity");
        this.updShapesAndArea = this.updShapesAndArea.bind(this);
    }
    View.prototype.updShapesAndArea = function (shapesCount, shapesArea) {
        this.shapesCountEl.innerHTML = "".concat(shapesCount);
        this.shapesAreaEl.innerHTML = "".concat(shapesArea, " px^2");
    };
    return View;
}());
exports.View = View;
