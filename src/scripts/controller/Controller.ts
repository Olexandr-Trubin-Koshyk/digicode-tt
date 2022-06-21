import * as PIXI from "pixi.js";
import { OperationType, Shape } from "../types";

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

    this.addEvents();
  }

  private addEvents() {
    this.view.gravityDecrement.onclick = this.onGravityDecrement.bind(this);
    this.view.gravityIncrement.onclick = this.onGravityincrement.bind(this);

    this.view.shapesPerSecDecrement.onclick = this.onShapesPerSecDecrement.bind(this);
    this.view.shapesPerSecIncrement.onclick = this.onShapesPerSecIncrement.bind(this);
  }

  private onGravityDecrement() { 
    this.onGravityChange('decrement');
  }

  private onGravityincrement() {
    this.onGravityChange('increment');
  }

  private onShapesPerSecDecrement() { 
    this.onShapesPerSecChange('decrement');
  }

  private onShapesPerSecIncrement() {
    this.onShapesPerSecChange('increment');
  }

  private onGravityChange(operation: OperationType) {
    this.model.changeGravity(operation);
  }

  private onShapesPerSecChange(operation: OperationType) {
    this.model.changeShapesPerSec(operation);
  }

  private generateShapesPerSec(): void {
    for (let i = 0; i < this.model.shapesPerSecond; i++) {
      this.addShape(
          Math.floor((Math.random() * (this.view.appScreen.width - offsetX)) + offsetX / 2),
          Math.floor(Math.random() * (this.view.appScreen.y - offsetY)),
      );
    }
  } 

  private onPointerDown(event: any): void {
    if (event.target === this) {
      const { x, y } = event.data.global;
      
      this.addShape(Math.floor(x), Math.floor(y));
    } else {
      const shapeType = event.target.constructor.name;

      this.model.shapes.map((el: Shape) => {
        if (el.constructor.name === shapeType) {
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

    this.view.appTicker.add(() => {
      value += step;

      if (value % FPS === 0) {
        this.generateShapesPerSec()
      }

      for (let i = 0; i < this.model.shapes.length; i++) {
        const shape = this.model.shapes[i];

        if (shape.y > this.view.appScreen.height + 200) {
          this.model.destroyShape(shape);
        } else {
          this.model.moveShape(shape);
        } 
      }

      this.view.updShapesAndArea(this.model.shapes.length, this.model.shapesArea);
      this.view.updateControls(this.model.shapesPerSecond, this.model.shapesGravity);
    })
  }
}