///--- IMPORTS ---\\\
import Player from '/JS/Player.js';
import Block from '/JS/Block.js';

///--- VARIABLES ---\\\
var player;
var blocks = [];

var w = 20 * 32;
var h = 12 * 32;


///--- MAIN CODE ---\\\
var p = new p5(function (s)
{
    s.setup = function()
    {
        s.createCanvas(w, h);

        player = new Player(s);

        for (let x = 0; x <  s.floor(s.width / 32); x++)
        {
            for (let y = s.floor(s.height / 32) - 2; y < s.floor(s.height / 32); y++)
            {
                blocks.push(new Block(s, x, y));
            }
        }
    }

    s.draw = function()
    {
        s.background("#99bdf7");
        player.update();

        blocks.forEach(b => {
            b.show();
        });
    };
});
