import { CircleShape } from "./Shapes/CircleShape";
import { EllipseShape } from "./Shapes/EllipseShape";
import { FiveSidesShape } from "./Shapes/FiveSidesShape";
import { RectangleShape } from "./Shapes/RectangleShape";
import { SixSidesShape } from "./Shapes/SixSidesShape";
import { TriangleShape } from "./Shapes/TriangleShape";
import { OperationType, Shape } from "../types";

export class Model {
  shapes: Shape[];
  shapesGravity: number;
  shapesPerSecond: number;
  shapesArea: number;

  constructor() {
    this.shapes = [];
    this.shapesGravity = 3;
    this.shapesPerSecond = 3;
    this.shapesArea = 0;

    this.createShape = this.createShape.bind(this);
    this.destroyShape = this.destroyShape.bind(this);
    this.moveShape = this.moveShape.bind(this);

    this.changeGravity = this.changeGravity.bind(this);
    this.changeShapesPerSec = this.changeShapesPerSec.bind(this);
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

  private changeGravity(operation: OperationType) {
    operation === 'increment' 
      ? this.shapesGravity += 1 
      : (this.shapesGravity > 0 ? this.shapesGravity -= 1 : this.shapesGravity)
  }

  private changeShapesPerSec(operation: OperationType) {
    operation === 'increment' 
      ? this.shapesPerSecond += 1
      : (this.shapesPerSecond > 0 ? this.shapesPerSecond -= 1 : this.shapesPerSecond)
  }
}