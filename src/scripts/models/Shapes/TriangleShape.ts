import { BasicShape } from "../BasicShape";

export class TriangleShape extends BasicShape {
  constructor(x: number, y: number) {
    super(x, y);
  }

  private calculateArea(h: number): number {
    return Math.floor(Math.pow(h, 2) * Math.sqrt(3) / 4);
  }

  public initShape(): void {
    let width = 100;
    let height = width;
    let halfWidth = width / 2;

    this.beginFill(this.getRandomColor());
    this.lineStyle(0, 0xFF0000, 1);
    this.moveTo(width, 0);
    this.lineTo(halfWidth, height); 
    this.lineTo(0, 0);
    this.lineTo(halfWidth, 0);
    this.endFill();

    this.angle = this.generateAngle();
    this.area = this.calculateArea(height);
  }
}