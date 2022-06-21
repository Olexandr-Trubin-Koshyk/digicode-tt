import { BasicShape } from "../BasicShape";
import { PI } from "../../variables";

export class EllipseShape extends BasicShape {
  constructor(x: number, y: number) {
    super(x, y);
  }

  private calculateArea(w: number, h: number): number {
    return Math.floor(PI * (w * h));
  }

  public initShape(): void {
    const width = 20;
    const height = 56;

    this.beginFill(this.getRandomColor());
    this.drawEllipse(0, 0, width, height);
    this.endFill();

    this.angle = this.generateAngle();
    this.area = this.calculateArea(width, height);
  }
}