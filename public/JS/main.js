var canvas;

import Button from '/JS/GUI/Button.js';

var tb;

function call()
{
    console.log("I have a callback!");
}

var p = new p5(function (s)
{
    s.setup = function()
    {
        canvas = s.createCanvas(500, 500);
        canvas.parent("canvas");

        tb = new Button(s, 50, 50, "Play", 20);
        tb.setCallback(call);
    }

    s.draw = function()
    {
        s.background(0);
        tb.update();
    }
});
