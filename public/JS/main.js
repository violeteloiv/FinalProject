var canvas;
var sceneManager;

import SceneManager from '/JS/Scenes/SceneManager.js';

var p = new p5(function (s)
{
    s.setup = function()
    {
        canvas = s.createCanvas(500, 500);
        canvas.parent("canvas");
        sceneManager = new SceneManager(s);
    }

    s.draw = function()
    {
        s.background(0);
        sceneManager.update();
    }
});
