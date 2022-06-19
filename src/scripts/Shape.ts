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
    this.drawRect(0, 0, w, h);
    this.endFill();
    this.angle = this.generatedAngle;
    this.area = Math.floor(w * h);
  }
  
  createCircle(): any {
    const r = 25;

    this.shapeType = 'circle';
    this.beginFill(this.getRandomColor());
    this.drawCircle(0, 0, r);
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
    const h = 56;

    this.shapeType = 'ellipse';
    this.beginFill(this.getRandomColor());
    this.drawEllipse(0, 0, w, h);
    this.endFill();
    this.angle = this.generatedAngle;
    this.area = Math.floor(3.14 * (20 * 56));
    
  }

  createFiveSidesShape() {
    const path = [
      0, 0, 
      35, 35, 
      35, 70, 
      -35, 70, 
      -35, 35
    ];

    this.shapeType = '5s shape';
    this.lineStyle(0);
    this.beginFill(this.getRandomColor());
    this.drawPolygon(path);
    this.endFill();
    this.angle = this.generatedAngle;
  }

  createSixSidesShape() {
    const path = [
      0, 0, 
      35, 35, 
      35, 70, 
      0, 105, 
      -35, 70, 
      -35, 35
    ];

    this.shapeType = '6s shape';
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
}