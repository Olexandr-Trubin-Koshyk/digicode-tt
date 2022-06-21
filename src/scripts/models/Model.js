"use strict";
exports.__esModule = true;
exports.Model = void 0;
var CircleShape_1 = require("./Shapes/CircleShape");
var EllipseShape_1 = require("./Shapes/EllipseShape");
var FiveSidesShape_1 = require("./Shapes/FiveSidesShape");
var RectangleShape_1 = require("./Shapes/RectangleShape");
var SixSidesShape_1 = require("./Shapes/SixSidesShape");
var TriangleShape_1 = require("./Shapes/TriangleShape");
var Model = /** @class */ (function () {
    function Model() {
        this.shapes = [];
        this.shapesGravity = 5;
        this.shapesPerSecond = 3;
        this.shapesArea = 0;
        this.createShape = this.createShape.bind(this);
        this.destroyShape = this.destroyShape.bind(this);
        this.moveShape = this.moveShape.bind(this);
    }
    Model.prototype.shapeRandomizer = function (x, y) {
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
    Model.prototype.createShape = function (x, y) {
        var shape = this.shapeRandomizer(x, y);
        shape.initShape();
        this.shapesArea += shape.area;
        this.shapes.push(shape);
        return shape;
    };
    Model.prototype.moveShape = function (shape) {
        shape.y += this.shapesGravity;
    };
    Model.prototype.destroyShape = function (shape) {
        this.shapes = this.shapes.filter(function (el) { return el !== shape; });
        this.shapesArea -= shape.area;
        shape.destroy();
    };
    return Model;
}());
exports.Model = Model;
