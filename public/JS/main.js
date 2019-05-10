var canvas;
var mm;

import MainMenu from '/JS/Scenes/MainMenuScene.js';
import Button from '/JS/GUI/Button.js';

var p = new p5(function (s)
{
    s.setup = function()
    {
        canvas = s.createCanvas(500, 500);
        canvas.parent("canvas");

        mm = new MainMenu(s);

        mm.pushToRender(new Button(s, 50, 50, "Test", 20));
    }

    s.draw = function()
    {
        s.background(0);
        mm.update();
    }
});
