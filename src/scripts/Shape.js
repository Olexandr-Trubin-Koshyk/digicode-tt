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
exports.Shape = void 0;
var PIXI = require("pixi.js");
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.generatedAngle = Math.floor(Math.random() * 359);
        _this.area = 0;
        _this.interactive = true;
        _this.shapeType = 'none';
        return _this;
    }
    Shape.prototype.getRandomColor = function () {
        return Math.random() * 0xFFFFFF;
    };
    Shape.prototype.createRectangle = function () {
        var w = 60;
        var h = 80;
        this.shapeType = 'rectangle';
        this.beginFill(this.getRandomColor());
        this.drawRect(0, 0, w, h);
        this.endFill();
        this.angle = this.generatedAngle;
        this.area = Math.floor(w * h);
    };
    Shape.prototype.createCircle = function () {
        var r = 25;
        this.shapeType = 'circle';
        this.beginFill(this.getRandomColor());
        this.drawCircle(0, 0, r);
        this.endFill();
        this.area = Math.floor(3.14 * (r * r));
    };
    Shape.prototype.createTriangle = function () {
        var triangleWidth = 100;
        var triangleHeight = triangleWidth;
        var triangleHalfway = triangleWidth / 2;
        this.shapeType = 'triangle';
        // draw triangle 
        this.beginFill(this.getRandomColor());
        this.lineStyle(0, 0xFF0000, 1);
        this.moveTo(triangleWidth, 0);
        this.lineTo(triangleHalfway, triangleHeight);
        this.lineTo(0, 0);
        this.lineTo(triangleHalfway, 0);
        this.endFill();
        this.angle = this.generatedAngle;
        this.area = Math.floor((triangleHeight * triangleHeight) * Math.sqrt(3) / 4);
    };
    Shape.prototype.createEllipse = function () {
        var w = 20;
        var h = 56;
        this.shapeType = 'ellipse';
        this.beginFill(this.getRandomColor());
        this.drawEllipse(0, 0, w, h);
        this.endFill();
        this.angle = this.generatedAngle;
        this.area = Math.floor(3.14 * (20 * 56));
    };
    Shape.prototype.createFiveSidesShape = function () {
        var path = [
            0, 0,
            35, 35,
            35, 70,
            -35, 70,
            -35, 35
        ];
        this.shapeType = '5s shape';
        this.lineStyle(0);
        this.beginFill(this.getRandomColor());
        this.drawPolygon(path);
        this.endFill();
        this.angle = this.generatedAngle;
    };
    Shape.prototype.createSixSidesShape = function () {
        var path = [
            0, 0,
            35, 35,
            35, 70,
            0, 105,
            -35, 70,
            -35, 35
        ];
        this.shapeType = '6s shape';
        this.lineStyle(0);
        this.beginFill(this.getRandomColor());
        this.drawPolygon(path);
        this.endFill();
        this.angle = this.generatedAngle;
    };
    Shape.prototype.createSelf = function () {
        var rnd = Math.floor(Math.random() * 6);
        switch (true) {
            case rnd === 1:
                this.createRectangle();
                break;
            case rnd === 2:
                this.createCircle();
                break;
            case rnd === 3:
                this.createTriangle();
                break;
            case rnd === 4:
                this.createEllipse();
                break;
            case rnd === 5:
                this.createFiveSidesShape();
                break;
            default:
                this.createSixSidesShape();
                break;
        }
    };
    return Shape;
}(PIXI.Graphics));
exports.Shape = Shape;
