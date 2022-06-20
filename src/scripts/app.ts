import { Application } from "pixi.js";
import { GameArea } from "./GameArea";
import { RectangleShape } from "./Shapes/RectangleShape";

const app = new Application({
  width: 800,
  height: 600,
  backgroundColor: 0xffffff, 
  view: document.getElementById("canvas") as HTMLCanvasElement,
});

const scene = new GameArea(app);
app.stage.addChild(scene);

scene.createTicker();

// function controlGravity() {
//   const shape = new RectangleShape(100, 100);
//   shape.initShape();
//   app.stage.addChild(shape);
// }

// controlGravity();

