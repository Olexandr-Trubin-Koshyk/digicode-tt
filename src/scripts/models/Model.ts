import * as PIXI from "pixi.js";
import { CircleShape } from "./Shapes/CircleShape";
import { EllipseShape } from "./Shapes/EllipseShape";
import { FiveSidesShape } from "./Shapes/FiveSidesShape";
import { RectangleShape } from "./Shapes/RectangleShape";
import { SixSidesShape } from "./Shapes/SixSidesShape";
import { TriangleShape } from "./Shapes/TriangleShape";
import { Shape } from "../types";

export class Model {
  app: PIXI.Application;
  shapes: Shape[];
  shapesGravity: number;
  shapesPerSecond: number;
  shapesArea: number;

  constructor(app: PIXI.Application) {
    this.app = app;
    this.shapes = [];
    this.shapesGravity = 5;
    this.shapesPerSecond = 3;
    this.shapesArea = 0;
    this.createShape = this.createShape.bind(this);
    this.shapeRandomizer = this.shapeRandomizer.bind(this);
    this.destroyShape = this.destroyShape.bind(this);
    this.moveShape = this.moveShape.bind(this);
  } 

  public shapeRandomizer(x: number, y: number): Shape {
    const rnd = Math.floor(Math.random() * 6);

    switch (true) {
      case rnd === 1:
        return new RectangleShape(x, y);
      case rnd === 2:
        return new CircleShape(x, y);
      case rnd === 3:
        return new EllipseShape(x, y);
      case rnd === 4: 
        return new TriangleShape(x, y);
      case rnd === 5:
        return new FiveSidesShape(x, y);
      default:
        return new SixSidesShape(x, y);
    }
  }

  private createShape(x: number, y: number): Shape {
    const shape = this.shapeRandomizer(x, y);
    shape.initShape();
    this.shapesArea += shape.area;
    this.shapes.push(shape);

    return shape;
  }

  private moveShape(shape: Shape) {
    shape.y += this.shapesGravity;
  }

  private destroyShape(shape: Shape): void {
    this.shapes = this.shapes.filter(el => el !== shape);
    this.shapesArea -= shape.area; 
    shape.destroy();
  }

  // increaseGravity() {
  //   this.shapesGravity += 1;
  // }

  // decreaseGravity() {
  //   if (this.shapesGravity > 1) {
  //     this.shapesGravity -= 1;
  //   } else {
  //     return;
  //   }
  // }

  // increaseShapesPerSec() {
  //   this.shapesPerSecond += 1;
  // }

  // decreaseShapesPerSecy() {
  //   if (this.shapesPerSecond > 1) {
  //     this.shapesPerSecond -= 1;
  //   } else {
  //     return;
  //   }
  // }
}