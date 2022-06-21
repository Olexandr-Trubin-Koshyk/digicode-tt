"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Controller = void 0;
var PIXI = require("pixi.js");
var offsetY = 200;
var offsetX = 150;
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    function Controller(view, model) {
        var _this = _super.call(this) || this;
        _this.view = view;
        _this.model = model;
        _this.interactive = true;
        _this.hitArea = new PIXI.Rectangle(0, 0, 800, 600);
        _this.on('pointerdown', _this.onPointerDown, _this);
        return _this;
    }
    Controller.prototype.generateShapesPerSec = function () {
        for (var i = 0; i < this.model.shapesPerSecond; i++) {
            this.addShape(Math.floor((Math.random() * (this.model.app.screen.width - offsetX)) + offsetX / 2), Math.floor(Math.random() * (this.model.app.screen.y - offsetY)));
        }
    };
    Controller.prototype.onPointerDown = function (event) {
        if (event.target === this) {
            var _a = event.data.global, x = _a.x, y = _a.y;
            this.addShape(Math.floor(x), Math.floor(y));
        }
        else {
            var shapeType_1 = event.target.shapeType;
            this.model.shapes.map(function (el) {
                if (el.shapeType === shapeType_1) {
                    el.tint = el.getRandomColor();
                }
            });
        }
    };
    Controller.prototype.addShape = function (x, y) {
        var shape = this.model.createShape(x, y);
        this.addChild(shape);
    };
    Controller.prototype.createTicker = function () {
        var _this = this;
        var value = 0;
        var FPS = 60;
        var step = 1;
        this.model.app.ticker.add(function () {
            value += step;
            if (value % FPS === 0) {
                _this.generateShapesPerSec();
            }
            for (var i = 0; i < _this.model.shapes.length; i++) {
                var shape = _this.model.shapes[i];
                if (shape.y > _this.model.app.screen.height + 200) {
                    _this.model.destroyShape(shape);
                }
                else {
                    _this.model.moveShape(shape);
                }
            }
            document.getElementById("shapesCount").innerHTML = "".concat(_this.model.shapes.length);
            document.getElementById("shapesArea").innerHTML = "".concat(_this.model.shapesArea, " px^2");
        });
    };
    return Controller;
}(PIXI.Container));
exports.Controller = Controller;
