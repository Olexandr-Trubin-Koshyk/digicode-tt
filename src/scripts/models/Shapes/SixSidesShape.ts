import { BasicShape } from "../BasicShape";

export class SixSidesShape extends BasicShape {
  constructor(x: number, y: number) {
    super(x, y);
  }

  private calculateArea(lineX: number, lineY: number): number {
    const rectArea = lineX * (2 * lineY);
    const triArea = (lineX * lineY) / 2;

    return Math.floor(rectArea + 2 * triArea);
  }

  public initShape(): void {
    const lineX = 35;
    const lineY = 35;
    this.shapeType = 'sixSidesShape';

    const path = [
      0, 0, 
      lineX, lineY, 
      lineX, lineY * 2, 
      0, lineY * 3, 
      -lineX, lineY * 2, 
      -lineX, lineY
    ];

    this.lineStyle(0);
    this.beginFill(this.getRandomColor());
    this.drawPolygon(path);
    this.endFill();
    this.angle = this.generateAngle();

    this.area = this.calculateArea(lineX, lineY);
  }
}