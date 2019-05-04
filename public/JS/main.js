///--- IMPORTS ---\\\
import Player from '/JS/Player.js';

///--- VARIABLES ---\\\
var player;

///--- MAIN CODE ---\\\
var p = new p5(function (s)
{
    s.setup = function()
    {
        s.createCanvas(700, 500);

        player = new Player(s);
    }

    s.draw = function()
    {
        s.background(0)
        player.update();
    };
});
