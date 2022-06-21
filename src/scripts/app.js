"use strict";
exports.__esModule = true;
var pixi_js_1 = require("pixi.js");
var Controller_1 = require("./controller/Controller");
var Model_1 = require("./models/Model");
var View_1 = require("./view/View");
var app = new pixi_js_1.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xffffff,
    view: document.getElementById("canvas")
});
var model = new Model_1.Model(app);
var view = new View_1.View(app);
var controller = new Controller_1.Controller(view, model);
app.stage.addChild(controller);
controller.createTicker();
