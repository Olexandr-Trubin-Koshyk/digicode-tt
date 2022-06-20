"use strict";
exports.__esModule = true;
var pixi_js_1 = require("pixi.js");
var GameArea_1 = require("./GameArea");
var app = new pixi_js_1.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xffffff,
    view: document.getElementById("canvas")
});
var scene = new GameArea_1.GameArea(app);
app.stage.addChild(scene);
scene.createTicker();
var controlGravity = function (event) {
    console.log(event);
};
