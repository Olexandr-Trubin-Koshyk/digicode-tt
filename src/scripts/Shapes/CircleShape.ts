import { BasicShape } from "../BasicShape";
import { PI } from "../variables";

export class CircleShape extends BasicShape {
  constructor(x: number, y: number) {
    super(x, y);
    this.shapeType = 'circle';
  }

  private calculateArea(r: number) {
    return Math.floor(PI * Math.pow(r, 2));
  }

  public initShape() {
    const radius = 25;

    this.beginFill(this.getRandomColor());
    this.drawCircle(0, 0, radius);
    this.endFill();

    this.area = this.calculateArea(radius);
  }
}