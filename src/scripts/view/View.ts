import { Application } from "pixi.js";

export class View {
  app: Application;
  shapesCountEl: HTMLElement;
  shapesAreaEl: HTMLElement;
  shapesPerSecondEl: HTMLElement;
  shapesGravity: HTMLElement;

  constructor(app: Application) {
    this.app = app;
    
    this.shapesCountEl = document.getElementById("shapesCount");
    this.shapesAreaEl = document.getElementById("shapesArea");
    this.shapesPerSecondEl = document.getElementById("shapesPerSecond");
    this.shapesGravity = document.getElementById("shapesGravity");

    this.updShapesAndArea = this.updShapesAndArea.bind(this);
  }

  private updShapesAndArea(shapesCount: number, shapesArea: number): void {
    this.shapesCountEl.innerHTML = `${shapesCount}`;
    this.shapesAreaEl.innerHTML = `${shapesArea} px^2`;
  }
}