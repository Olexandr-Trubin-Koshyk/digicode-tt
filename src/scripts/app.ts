import { Application } from "pixi.js";
import { GameArea } from "./GameArea";

const app = new Application({
  width: 800,
  height: 600,
  backgroundColor: 0xffffff, 
  view: document.getElementById("canvas") as HTMLCanvasElement,
});

const scene = new GameArea(app);
app.stage.addChild(scene);

scene.createTicker();

const controlGravity = (event) => {
  console.log(event)
}

