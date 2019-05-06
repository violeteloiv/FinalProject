///--- CONSTANTS ---\\\
const BLOCKSX = 20;
const BLOCKSY = 12;

///--- IMPORTS ---\\\
import Player from '/JS/Player.js';
import Block from '/JS/Block.js';

///--- VARIABLES ---\\\
var player;
var blocks = [];

var canvas;

var w = BLOCKSX * 32;
var h = BLOCKSY * 32;

// var PythonShell = require('python-shell');

///--- HELPER FUNCTIONS ---\\\

function runPython(file)
{
  PythonShell.run(file, function (err) {
    if (err) throw err;
    console.log('finished');
  });
}

function setupWorld(s)
{
    // runPython("../BackEnd/main.py");
    canvas = s.createCanvas(w, h);
    canvas.parent("canvas");
    player = new Player(s);
    blocks.push(new Block(s, 0, BLOCKSY - 2, w, 64));
}

///--- MAIN CODE ---\\\
var p = new p5(function (s)
{
    s.setup = function()
    {
        setupWorld(s);
    }

    s.draw = function()
    {
        s.background("#99bdf7");
        player.update();

        blocks.forEach(b => {
            b.update();

            if (player.checkCollision(b))
            {
                player.vel.y *= -0.4;
                player.pos.y = b.pos.y - player.size.y;
            }
        });
    };
});
