import { BasicShape } from "../BasicShape";
import * as PIXI from "pixi.js";

export class RectangleShape extends BasicShape {
  constructor(x: number, y: number) {
    super(x, y);
    this.shapeType = 'rectangle';
  }

  private calculateArea(w:number, h:number): number {
    return Math.floor(w * h);
  }

  public initShape(): void {
    const width = 60;
    const height = 80;

    this.beginFill(this.getRandomColor());
    this.drawRect(0, 0, width, height);
    this.endFill();

    this.angle = this.generateAngle();
    this.area = this.calculateArea(width, height);
  }
}