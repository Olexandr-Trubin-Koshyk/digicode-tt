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
exports.GameScene = void 0;
var PIXI = require("pixi.js");
var Shape_1 = require("./Shape");
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene(app) {
        var _this = _super.call(this) || this;
        _this.app = app;
        _this.shapes = [];
        _this.shapesSpeed = 3;
        _this.shapesCount = 5;
        _this.shapesArea = 0;
        _this.interactive = true;
        _this.hitArea = new PIXI.Rectangle(0, 0, 800, 600);
        _this.on('pointerdown', _this.onPointerDown, _this);
        return _this;
    }
    GameScene.prototype.onPointerDown = function (event) {
        if (event.target === this) {
            var _a = event.data.global, x = _a.x, y = _a.y;
            this.createShape(x, y);
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
    GameScene.prototype.createScene = function () {
        while (this.shapes.length < this.shapesCount) {
            this.createShape(Math.floor(Math.random() * (this.app.screen.width)), 
            // 150,
            Math.floor(Math.random() * (this.app.screen.y - 400)));
        }
    };
    GameScene.prototype.createShape = function (x, y) {
        var shape = new Shape_1.Shape(x, y);
        shape.createSelf();
        this.shapesArea += shape.area;
        this.shapes.push(shape);
        this.addChild(shape);
    };
    GameScene.prototype.destroyShape = function (shape) {
        this.shapes = this.shapes.filter(function (el) { return el !== shape; });
        this.shapesArea -= shape.area;
        shape.destroy();
    };
    GameScene.prototype.createTicker = function () {
        var _this = this;
        this.app.ticker.add(function () {
            _this.createScene();
            for (var i = 0; i < _this.shapes.length; i++) {
                var shape = _this.shapes[i];
                if (shape.y > _this.app.screen.height + 200) {
                    _this.destroyShape(shape);
                }
                else {
                    shape.y += _this.shapesSpeed;
                }
            }
            document.getElementById("shapes").innerHTML = "Number of current shapes: ".concat(_this.shapes.length);
            document.getElementById("area").innerHTML = "Surface area occupied by shapes: ".concat(_this.shapesArea);
        });
    };
    return GameScene;
}(PIXI.Container));
exports.GameScene = GameScene;
