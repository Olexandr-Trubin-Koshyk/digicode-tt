import { BasicShape } from "../BasicShape";

export class FiveSidesShape extends BasicShape {
  constructor(x: number, y: number) {
    super(x, y);
    this.shapeType = '5s shape';
  }

  private calculateArea(lineX: number, lineY: number): number {
    const rectArea = lineX * (2 * lineY);
    const triArea = (lineX * lineY) / 2;

    return Math.floor(rectArea + triArea);
  }

  public initShape(): void {
    const lineX = 35;
    const lineY = 35;

    const path = [
      0, 0, 
      lineX, lineY, 
      lineX, lineY * 2, 
      -lineX, lineY * 2, 
      -lineX, lineY
    ];

    this.shapeType = '5s shape';
    this.lineStyle(0);
    this.beginFill(this.getRandomColor());
    this.drawPolygon(path);
    this.endFill();

    this.angle = this.generateAngle();
    this.area = this.calculateArea(lineX, lineY);    
  }
}