import { BasicShape } from "../BasicShape";

export class RectangleShape extends BasicShape {
  constructor(x: number, y: number) {
    super(x, y);
  }

  private calculateArea(w:number, h:number): number {
    return Math.floor(w * h);
  }

  public initShape(): void {
    const width = 60;
    const height = 80;
    this.shapeType = 'rectangle';

    this.beginFill(this.getRandomColor());
    this.drawRect(0, 0, width, height);
    this.endFill();

    this.angle = this.generateAngle();
    this.area = this.calculateArea(width, height);
  }
}