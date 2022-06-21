import { Rectangle, Ticker } from "pixi.js";

export class View {
  appScreen: Rectangle;
  appTicker: Ticker;
  shapesCountEl: HTMLElement;
  shapesAreaEl: HTMLElement;
  gravity: HTMLInputElement;
  gravityIncrement: HTMLElement;
  gravityDecrement: HTMLElement;
  shapesPerSec: HTMLInputElement;
  shapesPerSecDecrement: HTMLElement;
  shapesPerSecIncrement: HTMLElement;

  constructor(screen: Rectangle, ticker: Ticker) {
    this.appScreen = screen;
    this.appTicker = ticker;
    
    this.shapesCountEl = document.getElementById("shapesCount");
    this.shapesAreaEl = document.getElementById("shapesArea");

    this.shapesPerSec = document.getElementById("shapesPerSecond") as HTMLInputElement;
    this.shapesPerSecDecrement = document.getElementById("countDecrement");
    this.shapesPerSecIncrement = document.getElementById("countIncrement");

    this.gravity = document.getElementById("shapesGravity") as HTMLInputElement;
    this.gravityDecrement = document.getElementById("gravityDecrement");
    this.gravityIncrement = document.getElementById("gravityIncrement");

    this.updShapesAndArea = this.updShapesAndArea.bind(this);
    this.updateControls = this.updateControls.bind(this);
  }

  private updShapesAndArea(shapesCount: number, shapesArea: number): void {
    this.shapesCountEl.innerHTML = `${shapesCount}`;
    this.shapesAreaEl.innerHTML = `${shapesArea} px^2`;
  }

  private updateControls(shapesPerSec: number, gravity: number) {
    this.shapesPerSec.value = `Count: ${shapesPerSec}`;
    this.gravity.value = `Gravity: ${gravity}`;
  }
}