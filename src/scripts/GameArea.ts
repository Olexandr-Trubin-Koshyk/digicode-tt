import * as PIXI from "pixi.js";
import { BasicShape } from "./BasicShape";
import { CircleShape } from "./Shapes/CircleShape";
import { EllipseShape } from "./Shapes/EllipseShape";
import { FiveSidesShape } from "./Shapes/FiveSidesShape";
import { RectangleShape } from "./Shapes/RectangleShape";
import { SixSidesShape } from "./Shapes/SixSidesShape";
import { TriangleShape } from "./Shapes/TriangleShape";

export class GameArea extends PIXI.Container {
  app: PIXI.Application;
  shapes: BasicShape[];
  shapesGravity: number;
  shapesPerSecond: number;
  interactive: boolean;
  shapesArea: number;
  hitArea: PIXI.IHitArea;
  on: (
    event: string | symbol, 
    fn: (e: any) => void, 
    context?: any
  ) => this;

  constructor(app: PIXI.Application) {
    super();
    this.app = app;
    this.shapes = [];
    this.shapesGravity = 5;
    this.shapesPerSecond = 3;
    this.shapesArea = 0;
    this.interactive = true;
    this.hitArea = new PIXI.Rectangle(0, 0, 800, 600);
    this.on('pointerdown', this.onPointerDown, this);
  } 

  private onPointerDown(event: any): void {
    if (event.target === this) {
      const { x, y } = event.data.global;
      
      this.createShape(Math.floor(x), Math.floor(y));
    } else {
      const shapeType = event.target.shapeType;

      this.shapes.map(el => {
        if (el.shapeType === shapeType) {
          el.tint = el.getRandomColor();
        }       
      })  
    }  
  }

  private generateShapesPerSec(): void {
    for (let i = 0; i < this.shapesPerSecond; i++) {
      this.createShape(
          Math.floor(Math.random() * (this.app.screen.width)),
          Math.floor(Math.random() * (this.app.screen.y - 400)),
      );
    }
  } 

  private shapeRandomizer(x: number, y: number) {
    const rnd = Math.floor(Math.random() * 6);

    switch (true) {
      case rnd === 1:
        return new RectangleShape(x, y);
      case rnd === 2:
        return new CircleShape(x, y);
      case rnd === 3:
        return new EllipseShape(x, y);
      case rnd === 4: 
        return new TriangleShape(x, y);
      case rnd === 5:
        return new FiveSidesShape(x, y);
      default:
        return new SixSidesShape(x, y);
    }
  }

  private createShape(x: number, y: number): void {
    const shape = this.shapeRandomizer(x, y);
    shape.initShape();
    this.shapesArea += shape.area;
    this.shapes.push(shape);

    this.addChild(shape);
  }

  private destroyShape(shape: BasicShape): void {
    this.shapes = this.shapes.filter(el => el !== shape);
    this.shapesArea -= shape.area; 
    shape.destroy();
  }

  public createTicker(): void {
    let value = 0;
    const FPS = 60;
    const step = 1;

    this.app.ticker.add(() => {
      value += step;

      if (value % FPS === 0) {
        this.generateShapesPerSec()
      }

      for (let i = 0; i < this.shapes.length; i++) {
        const shape = this.shapes[i];

        if (shape.y > this.app.screen.height + 200) {
          this.destroyShape(shape);
        } else {
          shape.y += this.shapesGravity;
        } 
      }

      document.getElementById("shapes").innerHTML = `Number of current shapes: ${this.shapes.length}`;
      document.getElementById("area").innerHTML = `Surface area occupied by shapes: ${this.shapesArea}`; 
    })
  }
}