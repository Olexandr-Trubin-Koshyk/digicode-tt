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
exports.EllipseShape = void 0;
var BasicShape_1 = require("../BasicShape");
var variables_1 = require("../../variables");
var EllipseShape = /** @class */ (function (_super) {
    __extends(EllipseShape, _super);
    function EllipseShape(x, y) {
        return _super.call(this, x, y) || this;
    }
    EllipseShape.prototype.calculateArea = function (w, h) {
        return Math.floor(variables_1.PI * (w * h));
    };
    EllipseShape.prototype.initShape = function () {
        var width = 20;
        var height = 56;
        this.beginFill(this.getRandomColor());
        this.drawEllipse(0, 0, width, height);
        this.endFill();
        this.angle = this.generateAngle();
        this.area = this.calculateArea(width, height);
    };
    return EllipseShape;
}(BasicShape_1.BasicShape));
exports.EllipseShape = EllipseShape;
