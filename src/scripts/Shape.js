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
var PI = Math.PI;
var ANGLE = 360;
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.generatedAngle = Math.floor(Math.random() * ANGLE);
        _this.area = 0;
        _this.interactive = true;
        _this.shapeType = 'none';
        return _this;
    }
    Shape.prototype.getRandomColor = function () {
        return Math.random() * 0xffffff;
    };
    Shape.prototype.createRectangle = function () {
        var width = 60;
        var height = 80;
        this.shapeType = 'rectangle';
        this.beginFill(this.getRandomColor());
        this.drawRect(0, 0, width, height);
        this.endFill();
        this.angle = this.generatedAngle;
        this.area = Math.floor(width * height);
    };
    Shape.prototype.createCircle = function () {
        var radius = 25;
        this.shapeType = 'circle';
        this.beginFill(this.getRandomColor());
        this.drawCircle(0, 0, radius);
        this.endFill();
        this.area = Math.floor(PI * Math.pow(radius, 2));
    };
    Shape.prototype.createTriangle = function () {
        var width = 100;
        var height = width;
        var halfWidth = width / 2;
        this.shapeType = 'triangle';
        this.beginFill(this.getRandomColor());
        this.lineStyle(0, 0xFF0000, 1);
        this.moveTo(width, 0);
        this.lineTo(halfWidth, height);
        this.lineTo(0, 0);
        this.lineTo(halfWidth, 0);
        this.endFill();
        this.angle = this.generatedAngle;
        this.area = Math.floor(Math.pow(height, 2) * Math.sqrt(3) / 4);
    };
    Shape.prototype.createEllipse = function () {
        var width = 20;
        var height = 56;
        this.shapeType = 'ellipse';
        this.beginFill(this.getRandomColor());
        this.drawEllipse(0, 0, width, height);
        this.endFill();
        this.angle = this.generatedAngle;
        this.area = Math.floor(PI * (width * height));
    };
    Shape.prototype.createFiveSidesShape = function () {
        var lineX = 35;
        var lineY = 35;
        var sides = 5;
        var path = [
            0, 0,
            lineX, lineY,
            lineX, lineY * 2,
            -lineX, lineY * 2,
            -lineX, lineY
        ];
        this.shapeType = '5s shape';
        this.lineStyle(0);
        this.beginFill(this.getRandomColor());
        this.drawPolygon(path);
        this.endFill();
        this.angle = this.generatedAngle;
        var rectArea = lineX * (2 * lineY);
        var triArea = (lineX * lineY) / 2;
        this.area = Math.floor(rectArea + triArea);
    };
    Shape.prototype.createSixSidesShape = function () {
        var lineX = 35;
        var lineY = 35;
        var sides = 6;
        var path = [
            0, 0,
            lineX, lineY,
            lineX, lineY * 2,
            0, lineY * 3,
            -lineX, lineY * 2,
            -lineX, lineY
        ];
        this.shapeType = '6s shape';
        this.lineStyle(0);
        this.beginFill(this.getRandomColor());
        this.drawPolygon(path);
        this.endFill();
        this.angle = this.generatedAngle;
        var rectArea = lineX * (2 * lineY);
        var triArea = (lineX * lineY) / 2;
        this.area = Math.floor(rectArea + 2 * triArea);
    };
    Shape.prototype.shapeRandomizer = function () {
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
    Shape.prototype.createShape = function () {
        this.shapeRandomizer();
    };
    return Shape;
}(PIXI.Graphics));
exports.Shape = Shape;
