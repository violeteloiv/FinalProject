var canvas;
var sceneManager;

import SceneManager from '/JS/Scenes/SceneManager.js';
import Timer from '/JS/Physics/Timer.js';

///--- CALLBACKS ---\\\
function switchGameCallback()
{
    sceneManager.switchScene(1);
}

///--- MAIN CODE ---\
var p = new p5(function (s)
{
    s.setup = function()
    {
        canvas = s.createCanvas(500, 500);
        canvas.parent("canvas");
        sceneManager = new SceneManager(s);
        sceneManager.currentScene.getUpdateable("pb").setCallback(switchGameCallback);
    }

    s.draw = function()
    {
        s.background(0);
        sceneManager.update();
    }
});


///--- CALLBACKS ---\\\
export function changeToGame()
{
    sceneManager.switchScene(1);
}
