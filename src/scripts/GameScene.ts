import * as PIXI from "pixi.js";
import { Shape } from "./Shape";

export class GameScene extends PIXI.Container {
  app: PIXI.Application;
  shapes: any[];
  shapesSpeed: number;
  shapesCount: number;
  shapesArea: number;

  constructor(app: PIXI.Application) {
    super();
    this.app = app;
    this.shapes = []
    this.shapesSpeed = 3;
    this.shapesCount = 8;
    this.shapesArea = 0;
    this.interactive = true;
    this.hitArea = new PIXI.Rectangle(0, 0, 800, 600);
    this.on('pointerdown', this.onPointerDown, this)
  } 

  onPointerDown(event) {
    if (event.target === this) {
      const { x, y } = event.data.global;
      console.log(x, y);
      
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

  createScene() {
    while (this.shapes.length < this.shapesCount) {
      this.createShape(
          Math.floor(Math.random() * (this.app.screen.width)),
          Math.floor(Math.random() * (this.app.screen.y - 400)),
      );
    }
  } 

  createShape(x: number, y: number) {
    const shape = new Shape(x, y);
    shape.createSelf();
    this.shapesArea += shape.area;
    this.shapes.push(shape);

    console.log(shape)
    this.addChild(shape);
  }

  destroyShape(shape: Shape) {
    this.shapes = this.shapes.filter(el => el !== shape);
    this.shapesArea -= shape.area; 
    shape.destroy();
  }

  createTicker() {
    this.app.ticker.add(() => {
      this.createScene()
      for (let i = 0; i < this.shapes.length; i++) {
        const shape = this.shapes[i];

        if (shape.y > this.app.screen.height + 200) {
          this.destroyShape(shape);
        } else {
          shape.y += this.shapesSpeed;
        } 
      }

      document.getElementById("shapes").innerHTML = `Number of current shapes: ${this.shapes.length}`;
      document.getElementById("area").innerHTML = `Surface area occupied by shapes: ${this.shapesArea}`; 
    })
  }
}