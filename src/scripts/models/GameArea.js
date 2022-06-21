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
exports.GameArea = void 0;
var PIXI = require("pixi.js");
var CircleShape_1 = require("./Shapes/CircleShape");
var EllipseShape_1 = require("./Shapes/EllipseShape");
var FiveSidesShape_1 = require("./Shapes/FiveSidesShape");
var RectangleShape_1 = require("./Shapes/RectangleShape");
var SixSidesShape_1 = require("./Shapes/SixSidesShape");
var TriangleShape_1 = require("./Shapes/TriangleShape");
var offsetY = 200;
var offsetX = 150;
var GameArea = /** @class */ (function (_super) {
    __extends(GameArea, _super);
    function GameArea(app) {
        var _this = _super.call(this) || this;
        _this.app = app;
        _this.shapes = [];
        _this.shapesGravity = 5;
        _this.shapesPerSecond = 3;
        _this.shapesArea = 0;
        _this.interactive = true;
        _this.hitArea = new PIXI.Rectangle(0, 0, 800, 600);
        _this.on('pointerdown', _this.onPointerDown, _this);
        return _this;
    }
    GameArea.prototype.onPointerDown = function (event) {
        if (event.target === this) {
            var _a = event.data.global, x = _a.x, y = _a.y;
            this.createShape(Math.floor(x), Math.floor(y));
        }
        else {
            var shapeType_1 = event.target.shapeType;
            this.shapes.map(function (el) {
                if (el.shapeType === shapeType_1) {
                    el.tint = el.getRandomColor();
                }
            });
        }
    };
    GameArea.prototype.generateShapesPerSec = function () {
        for (var i = 0; i < this.shapesPerSecond; i++) {
            this.createShape(Math.floor((Math.random() * (this.app.screen.width - offsetX)) + offsetX / 2), Math.floor(Math.random() * (this.app.screen.y - offsetY)));
        }
    };
    GameArea.prototype.shapeRandomizer = function (x, y) {
        var rnd = Math.floor(Math.random() * 6);
        switch (true) {
            case rnd === 1:
                return new RectangleShape_1.RectangleShape(x, y);
            case rnd === 2:
                return new CircleShape_1.CircleShape(x, y);
            case rnd === 3:
                return new EllipseShape_1.EllipseShape(x, y);
            case rnd === 4:
                return new TriangleShape_1.TriangleShape(x, y);
            case rnd === 5:
                return new FiveSidesShape_1.FiveSidesShape(x, y);
            default:
                return new SixSidesShape_1.SixSidesShape(x, y);
        }
    };
    GameArea.prototype.createShape = function (x, y) {
        var shape = this.shapeRandomizer(x, y);
        shape.initShape();
        this.shapesArea += shape.area;
        this.shapes.push(shape);
        this.addChild(shape);
    };
    GameArea.prototype.destroyShape = function (shape) {
        this.shapes = this.shapes.filter(function (el) { return el !== shape; });
        this.shapesArea -= shape.area;
        shape.destroy();
    };
    GameArea.prototype.createTicker = function () {
        var _this = this;
        var value = 0;
        var FPS = 60;
        var step = 1;
        this.app.ticker.add(function () {
            value += step;
            if (value % FPS === 0) {
                _this.generateShapesPerSec();
            }
            for (var i = 0; i < _this.shapes.length; i++) {
                var shape = _this.shapes[i];
                if (shape.y > _this.app.screen.height + 200) {
                    _this.destroyShape(shape);
                }
                else {
                    shape.y += _this.shapesGravity;
                }
            }
            document.getElementById("shapesCount").innerHTML = "".concat(_this.shapes.length);
            document.getElementById("shapesArea").innerHTML = "".concat(_this.shapesArea, " px^2");
        });
    };
    return GameArea;
}(PIXI.Container));
exports.GameArea = GameArea;
