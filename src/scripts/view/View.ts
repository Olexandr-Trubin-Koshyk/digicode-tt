import { Application } from "pixi.js";
import { EVENT_TYPES } from "../variables";

export class View {
  app: Application;
  shapesCountEl: HTMLElement;
  shapesAreaEl: HTMLElement;
  shapesPerSecondEl: HTMLElement;
  shapesGravity: HTMLElement;

  constructor(app: Application) {
    this.app = app;
    
    this.shapesAreaEl = document.getElementById("shapesArea");
    this.shapesCountEl = document.getElementById("shapesCount");
    this.shapesPerSecondEl = document.getElementById("shapesPerSecond");
    this.shapesGravity = document.getElementById("shapesGravity");

    this.updateInfo = this.updateInfo.bind(this);
  }

  bind(event, handler) {
    switch (event) {
        case EVENT_TYPES.GRAVITY_UPDATE: {
            this.shapesGravity.addEventListener('button', (event) => {
                handler(event.target);
            });
            break;
        }
        case EVENT_TYPES.SHAPES_PER_SECOND_UPDATE: {
            this.shapesPerSecondEl.addEventListener('button', (event) => {
                handler(event.target);
            });
            break;
        }
        default: return;
    }
  }

  updateInfo(coveredArea, numberOfShapes) {
    this.shapesAreaEl.innerText = `${coveredArea} px^2`;
    this.shapesCountEl.innerText = numberOfShapes;
  }
}