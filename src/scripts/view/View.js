"use strict";
exports.__esModule = true;
exports.View = void 0;
var variables_1 = require("../variables");
var View = /** @class */ (function () {
    function View(app) {
        this.app = app;
        this.shapesAreaEl = document.getElementById("shapesArea");
        this.shapesCountEl = document.getElementById("shapesCount");
        this.shapesPerSecondEl = document.getElementById("shapesPerSecond");
        this.shapesGravity = document.getElementById("shapesGravity");
        this.updateInfo = this.updateInfo.bind(this);
    }
    View.prototype.bind = function (event, handler) {
        switch (event) {
            case variables_1.EVENT_TYPES.GRAVITY_UPDATE: {
                this.shapesGravity.addEventListener('button', function (event) {
                    handler(event.target);
                });
                break;
            }
            case variables_1.EVENT_TYPES.SHAPES_PER_SECOND_UPDATE: {
                this.shapesPerSecondEl.addEventListener('button', function (event) {
                    handler(event.target);
                });
                break;
            }
            default: return;
        }
    };
    View.prototype.updateInfo = function (coveredArea, numberOfShapes) {
        this.shapesAreaEl.innerText = "".concat(coveredArea, " px^2");
        this.shapesCountEl.innerText = numberOfShapes;
    };
    return View;
}());
exports.View = View;
