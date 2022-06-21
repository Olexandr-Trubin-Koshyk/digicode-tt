import { Application } from "pixi.js";
import { Controller } from "./controller/Controller";
import { Model } from "./models/Model";
import { View } from "./view/View";

const app = new Application({
  width: 800,
  height: 600,
  backgroundColor: 0xffffff, 
  view: document.getElementById("canvas") as HTMLCanvasElement,
});

const model = new Model();
const view = new View(app);
const controller = new Controller(view, model);
app.stage.addChild(controller);

controller.createTicker();


