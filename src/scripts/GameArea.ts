import * as PIXI from "pixi.js";
import { IHitArea } from "pixi.js";
import { Shape } from "./Shape";

export class GameArea extends PIXI.Container {
  app: PIXI.Application;
  shapes: Shape[];
  shapesGravity: number;
  shapesPerSecond: number;
  interactive: boolean;
  shapesArea: number;
  hitArea: IHitArea;
  on: (
    event: string | symbol, 
    fn: (e: any) => void, 
    context?: any
  ) => this;

  constructor(app: PIXI.Application) {
    super();
    this.app = app;
    this.shapes = []
    this.shapesGravity = 5;
    this.shapesPerSecond = 3;
    this.shapesArea = 0;
    this.interactive = true;
    this.hitArea = new PIXI.Rectangle(0, 0, 800, 600);
    this.on('pointerdown', this.onPointerDown, this);
  } 

  controlGravity() {
    this.shapesPerSecond += 1;
  }

  onPointerDown(event: any): void {
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

  createScene(): void {
    for (let i = 0; i < this.shapesPerSecond; i++) {
      this.createShape(
          Math.floor(Math.random() * (this.app.screen.width)),
          Math.floor(Math.random() * (this.app.screen.y - 400)),
      );
    }
  } 

  createShape(x: number, y: number): void {
    const shape = new Shape(x, y);
    shape.createShape();
    this.shapesArea += shape.area;
    this.shapes.push(shape);

    this.addChild(shape);
  }

  destroyShape(shape: Shape): void {
    this.shapes = this.shapes.filter(el => el !== shape);
    this.shapesArea -= shape.area; 
    shape.destroy();
  }

  createTicker(): void {
    let value = 0;
    const FPS = 60;
    const step = 1;

    this.app.ticker.add(() => {
      value += step;

      if (value % FPS === 0) {
        this.createScene()
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