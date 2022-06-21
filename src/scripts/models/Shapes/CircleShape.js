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
exports.CircleShape = void 0;
var BasicShape_1 = require("../BasicShape");
var variables_1 = require("../../variables");
var CircleShape = /** @class */ (function (_super) {
    __extends(CircleShape, _super);
    function CircleShape(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.shapeType = 'circle';
        return _this;
    }
    CircleShape.prototype.calculateArea = function (r) {
        return Math.floor(variables_1.PI * Math.pow(r, 2));
    };
    CircleShape.prototype.initShape = function () {
        var radius = 25;
        this.beginFill(this.getRandomColor());
        this.drawCircle(0, 0, radius);
        this.endFill();
        this.area = this.calculateArea(radius);
    };
    return CircleShape;
}(BasicShape_1.BasicShape));
exports.CircleShape = CircleShape;
