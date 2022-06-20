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
exports.BasicShape = void 0;
var PIXI = require("pixi.js");
var variables_1 = require("./variables");
var BasicShape = /** @class */ (function (_super) {
    __extends(BasicShape, _super);
    function BasicShape(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.area = 0;
        _this.interactive = true;
        _this.shapeType = 'basic';
        return _this;
    }
    BasicShape.prototype.getRandomColor = function () {
        return Math.random() * 0xffffff;
    };
    BasicShape.prototype.generateAngle = function () {
        return Math.floor(Math.random() * variables_1.ANGLE);
    };
    return BasicShape;
}(PIXI.Graphics));
exports.BasicShape = BasicShape;
