"use strict";
exports.__esModule = true;
var pixi_js_1 = require("pixi.js");
var GameScene_1 = require("./GameScene");
var app = new pixi_js_1.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xc2c2c2,
    view: document.getElementById("canvas")
});
var scene = new GameScene_1.GameScene(app);
app.stage.addChild(scene);
scene.createTicker();
