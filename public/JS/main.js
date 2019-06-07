var canvas;
var sceneManager;

import SceneManager from '/JS/Scenes/SceneManager.js';

///--- CALLBACKS ---\\\
function switchGameCallback()
{
    sceneManager.switchScene(1);
}

function toLeaderBoardLogin()
{

}

function toHomePage()
{

}


///--- MAIN CODE ---\\\
var p = new p5(function (s)
{
    s.setup = function()
    {
        s.frameRate(FRAMERATE);
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
