var canvas;

import Button from '/JS/GUI/Button.js';

var tb;

var p = new p5(function (s)
{
    s.setup = function()
    {
        canvas = s.createCanvas(500, 500);
        canvas.parent("canvas");

        tb = new Button(s, 50, 50, "Hello", 50);
    }

    s.draw = function()
    {
        s.background(0);
        tText.show();
    }
});
