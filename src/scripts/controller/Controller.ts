import * as PIXI from "pixi.js";
import { Shape } from "../types";

const offsetY = 200;
const offsetX = 150;

export class Controller extends PIXI.Container {
  view: any;
  model: any;
  interactive: boolean;
  hitArea: PIXI.IHitArea;
  on: (
    event: string | symbol, 
    fn: (e: any) => void, 
    context?: any
  ) => this;

  constructor(view: object, model: object) {
    super();
    this.view = view;
    this.model = model;

    this.interactive = true;
    this.hitArea = new PIXI.Rectangle(0, 0, 800, 600);
    this.on('pointerdown', this.onPointerDown, this);    
  }

  private generateShapesPerSec(): void {
    for (let i = 0; i < this.model.shapesPerSecond; i++) {
      this.addShape(
          Math.floor((Math.random() * (this.model.app.screen.width - offsetX)) + offsetX / 2),
          Math.floor(Math.random() * (this.model.app.screen.y - offsetY)),
      );
    }
  } 

  private onPointerDown(event: any): void {
    if (event.target === this) {
      const { x, y } = event.data.global;
      
      this.addShape(Math.floor(x), Math.floor(y));
    } else {
      const shapeType = event.target.shapeType;

      this.model.shapes.map((el: Shape) => {
        if (el.shapeType === shapeType) {
          el.tint = el.getRandomColor();
        }       
      })  
    }  
  }

  private addShape(x: number, y: number) {
    const shape = this.model.createShape(x, y);

    this.addChild(shape);
  }

  public createTicker(): void {
    let value = 0;
    const FPS = 60;
    const step = 1;

    this.model.app.ticker.add(() => {
      value += step;

      if (value % FPS === 0) {
        this.generateShapesPerSec()
      }

      for (let i = 0; i < this.model.shapes.length; i++) {
        const shape = this.model.shapes[i];

        if (shape.y > this.model.app.screen.height + 200) {
          this.model.destroyShape(shape);
        } else {
          this.model.moveShape(shape);
        } 
      }

      document.getElementById("shapesCount").innerHTML = `${this.model.shapes.length}`;
      document.getElementById("shapesArea").innerHTML = `${this.model.shapesArea} px^2`; 
    })
  }
}