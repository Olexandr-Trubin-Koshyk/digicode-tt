import { Application } from "pixi.js";
import { GameScene } from "./GameScene";

const app = new Application({
  width: 800,
  height: 600,
  backgroundColor: 0xc2c2c2, 
  view: document.getElementById("canvas") as HTMLCanvasElement,
});

const scene = new GameScene(app);
app.stage.addChild(scene);

scene.createTicker();

