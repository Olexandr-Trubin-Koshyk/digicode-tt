import * as PIXI from "pixi.js";

export class Shape extends PIXI.Graphics {
  color: number;
  generatedAngle: number;
  area: number;
  shapeType: 'none' | 'rectangle' | 'circle' | 'ellipse' | 'triangle' | '5s shape' | '6s shape';
  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.generatedAngle = Math.floor(Math.random() * 359);
    this.area = 0;
    this.interactive = true;
    this.shapeType = 'none';
  }

  getRandomColor() {
    return Math.random() * 0xFFFFFF;
  }

  createRectangle(): any {
    const w = 60;
    const h = 80;

    this.shapeType = 'rectangle';
    this.beginFill(this.getRandomColor());
    this.drawRect(this.x, this.y, w, h);
    this.endFill();
    this.angle = this.generatedAngle;
    this.area = Math.floor(w * h);
  }
  
  createCircle(): any {
    const r = 25;

    this.shapeType = 'circle';
    this.beginFill(this.getRandomColor());
    this.drawCircle(this.x, this.y, r);
    this.endFill();
    this.area = Math.floor(3.14 * (r * r));
  }
  
  createTriangle(): any {
    let triangleWidth = 100;
    let triangleHeight = triangleWidth;
    let triangleHalfway = triangleWidth/2;

    this.shapeType = 'triangle';
    // draw triangle 
    this.beginFill(this.getRandomColor());
    this.lineStyle(0, 0xFF0000, 1);
    this.moveTo(triangleWidth, 0);
    this.lineTo(triangleHalfway, triangleHeight); 
    this.lineTo(0, 0);
    this.lineTo(triangleHalfway, 0);
    this.endFill();
    this.angle = this.generatedAngle;
    this.area = Math.floor((triangleHeight * triangleHeight) * Math.sqrt(3) / 4);
  }

  createEllipse() {
    const w = 20;
    const h = 55;

    this.shapeType = 'ellipse';
    this.beginFill(this.getRandomColor());
    this.drawEllipse(this.x, this.y, w, h);
    this.endFill();
    this.angle = this.generatedAngle;
  }

  createFiveSidesShape() {
    const path = [this.x, this.y, this.x + 35, this.y + 35, this.x + 35, this.y + 70, this.x - 35, this.y + 70, this.x - 35, this.y + 35];

    this.lineStyle(0);
    this.beginFill(this.getRandomColor());
    this.drawPolygon(path);
    this.endFill();
    this.angle = this.generatedAngle;
  }

  createSixSidesShape() {
    const path = [this.x, this.y, this.x + 35, this.y + 35, this.x + 35, this.y + 70, this.x, this.y + 105, this.x - 35, this.y + 70, this.x -35, this.y + 35];

    this.lineStyle(0);
    this.beginFill(this.getRandomColor());
    this.drawPolygon(path);
    this.endFill();
    this.angle = this.generatedAngle;
  }

  createSelf() {
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
      // case rnd === 4: 
      //   this.createEllipse();
      //   break;
      // case rnd === 5:
      //   this.createFiveSidesShape();
      //   break;
      default:
        this.createTriangle();
        break;
    }
  }
}