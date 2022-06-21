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
exports.FiveSidesShape = void 0;
var BasicShape_1 = require("../BasicShape");
var FiveSidesShape = /** @class */ (function (_super) {
    __extends(FiveSidesShape, _super);
    function FiveSidesShape(x, y) {
        return _super.call(this, x, y) || this;
    }
    FiveSidesShape.prototype.calculateArea = function (lineX, lineY) {
        var rectArea = lineX * (2 * lineY);
        var triArea = (lineX * lineY) / 2;
        return Math.floor(rectArea + triArea);
    };
    FiveSidesShape.prototype.initShape = function () {
        var lineX = 35;
        var lineY = 35;
        var path = [
            0, 0,
            lineX, lineY,
            lineX, lineY * 2,
            -lineX, lineY * 2,
            -lineX, lineY
        ];
        this.lineStyle(0);
        this.beginFill(this.getRandomColor());
        this.drawPolygon(path);
        this.endFill();
        this.angle = this.generateAngle();
        this.area = this.calculateArea(lineX, lineY);
    };
    return FiveSidesShape;
}(BasicShape_1.BasicShape));
exports.FiveSidesShape = FiveSidesShape;
