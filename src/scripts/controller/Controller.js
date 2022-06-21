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
        _this.addEvents();
        return _this;
    }
    Controller.prototype.addEvents = function () {
        this.view.gravityDecrement.onclick = this.onGravityDecrement.bind(this);
        this.view.gravityIncrement.onclick = this.onGravityincrement.bind(this);
        this.view.shapesPerSecDecrement.onclick = this.onShapesPerSecDecrement.bind(this);
        this.view.shapesPerSecIncrement.onclick = this.onShapesPerSecIncrement.bind(this);
    };
    Controller.prototype.onGravityDecrement = function () {
        this.onGravityChange('decrement');
    };
    Controller.prototype.onGravityincrement = function () {
        this.onGravityChange('increment');
    };
    Controller.prototype.onShapesPerSecDecrement = function () {
        this.onShapesPerSecChange('decrement');
    };
    Controller.prototype.onShapesPerSecIncrement = function () {
        this.onShapesPerSecChange('increment');
    };
    Controller.prototype.onGravityChange = function (operation) {
        this.model.changeGravity(operation);
    };
    Controller.prototype.onShapesPerSecChange = function (operation) {
        this.model.changeShapesPerSec(operation);
    };
    Controller.prototype.generateShapesPerSec = function () {
        for (var i = 0; i < this.model.shapesPerSecond; i++) {
            this.addShape(Math.floor((Math.random() * (this.view.appScreen.width - offsetX)) + offsetX / 2), Math.floor(Math.random() * (this.view.appScreen.y - offsetY)));
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
        this.view.appTicker.add(function () {
            value += step;
            if (value % FPS === 0) {
                _this.generateShapesPerSec();
            }
            for (var i = 0; i < _this.model.shapes.length; i++) {
                var shape = _this.model.shapes[i];
                if (shape.y > _this.view.appScreen.height + 200) {
                    _this.model.destroyShape(shape);
                }
                else {
                    _this.model.moveShape(shape);
                }
            }
            _this.view.updShapesAndArea(_this.model.shapes.length, _this.model.shapesArea);
            _this.view.updateControls(_this.model.shapesPerSecond, _this.model.shapesGravity);
        });
    };
    return Controller;
}(PIXI.Container));
exports.Controller = Controller;
