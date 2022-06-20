import * as PIXI from "pixi.js";

const PI = Math.PI;
const ANGLE = 360;

export class Shape extends PIXI.Graphics {
  color: number;
  generatedAngle: number;
  area: number;
  interactive: boolean;
  shapeType: 'none' | 'rectangle' | 'circle' | 'ellipse' | 'triangle' | '5s shape' | '6s shape';
  
  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.generatedAngle = Math.floor(Math.random() * ANGLE);
    this.area = 0;
    this.interactive = true;
    this.shapeType = 'none';
  }

  public getRandomColor() {
    return Math.random() * 0xffffff;
  }

  private createRectangle(): void {
    const width = 60;
    const height = 80;

    this.shapeType = 'rectangle';
    this.beginFill(this.getRandomColor());
    this.drawRect(0, 0, width, height);
    this.endFill();
    this.angle = this.generatedAngle;
    this.area = Math.floor(width * height);
  }
  
  private createCircle(): void {
    const radius = 25;

    this.shapeType = 'circle';
    this.beginFill(this.getRandomColor());
    this.drawCircle(0, 0, radius);
    this.endFill();
    this.area = Math.floor(PI * Math.pow(radius, 2));
  }
  
  private createTriangle(): void {
    let width = 100;
    let height = width;
    let halfWidth = width / 2;

    this.shapeType = 'triangle';
    this.beginFill(this.getRandomColor());
    this.lineStyle(0, 0xFF0000, 1);
    this.moveTo(width, 0);
    this.lineTo(halfWidth, height); 
    this.lineTo(0, 0);
    this.lineTo(halfWidth, 0);
    this.endFill();

    this.angle = this.generatedAngle;
    this.area = Math.floor(Math.pow(height, 2) * Math.sqrt(3) / 4);
  }

  private createEllipse(): void {
    const width = 20;
    const height = 56;

    this.shapeType = 'ellipse';
    this.beginFill(this.getRandomColor());
    this.drawEllipse(0, 0, width, height);
    this.endFill();
    this.angle = this.generatedAngle;
    this.area = Math.floor(PI * (width * height));
  }

  private createFiveSidesShape(): void {
    const lineX = 35;
    const lineY = 35;
    const sides = 5;

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
    this.angle = this.generatedAngle;

    const rectArea = lineX * (2 * lineY);
    const triArea = (lineX * lineY) / 2;

    this.area = Math.floor(rectArea + triArea);
  }

  private createSixSidesShape(): void {
    const lineX = 35;
    const lineY = 35;
    const sides = 6;

    const path = [
      0, 0, 
      lineX, lineY, 
      lineX, lineY * 2, 
      0, lineY * 3, 
      -lineX, lineY * 2, 
      -lineX, lineY
    ];

    this.shapeType = '6s shape';
    this.lineStyle(0);
    this.beginFill(this.getRandomColor());
    this.drawPolygon(path);
    this.endFill();
    this.angle = this.generatedAngle;

    const rectArea = lineX * (2 * lineY);
    const triArea = (lineX * lineY) / 2;

    this.area = Math.floor(rectArea + 2 * triArea);
  }

  private shapeRandomizer() {
    const rnd = Math.floor(Math.random() * 6);

    switch (true) {
      case rnd === 1:
        this.createRectangle();
        break;
      case rnd === 2:
        this.createCircle();
        break;
      case rnd === 3:
        this.createTriangle();
        break;
      case rnd === 4: 
        this.createEllipse();
        break;
      case rnd === 5:
        this.createFiveSidesShape();
        break;
      default:
        this.createSixSidesShape();
        break;
    }
  }

  public createShape() {
    this.shapeRandomizer();
  }
}