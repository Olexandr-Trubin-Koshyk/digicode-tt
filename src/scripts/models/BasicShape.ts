import * as PIXI from "pixi.js";
import { ANGLE } from "../variables";

export class BasicShape extends PIXI.Graphics {
  area: number;
  interactive: boolean;
  
  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.area = 0;
    this.interactive = true;
  }

  public getRandomColor() {
    return Math.random() * 0xffffff;
  }

  public generateAngle(): number {
    return Math.floor(Math.random() * ANGLE);
  }
}