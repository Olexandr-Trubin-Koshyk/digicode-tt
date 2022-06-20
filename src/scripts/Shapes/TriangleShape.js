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
exports.TriangleShape = void 0;
var BasicShape_1 = require("../BasicShape");
var TriangleShape = /** @class */ (function (_super) {
    __extends(TriangleShape, _super);
    function TriangleShape(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.shapeType = 'triangle';
        return _this;
    }
    TriangleShape.prototype.calculateArea = function (h) {
        return Math.floor(Math.pow(h, 2) * Math.sqrt(3) / 4);
    };
    TriangleShape.prototype.initShape = function () {
        var width = 100;
        var height = width;
        var halfWidth = width / 2;
        this.beginFill(this.getRandomColor());
        this.lineStyle(0, 0xFF0000, 1);
        this.moveTo(width, 0);
        this.lineTo(halfWidth, height);
        this.lineTo(0, 0);
        this.lineTo(halfWidth, 0);
        this.endFill();
        this.angle = this.generateAngle();
        this.area = this.calculateArea(height);
    };
    return TriangleShape;
}(BasicShape_1.BasicShape));
exports.TriangleShape = TriangleShape;
