import Scene from '/JS/Scenes/Scene.js';
import Rectangle from '/JS/GUI/Rectangle.js';
import Button from '/JS/GUI/Button.js';
import Text from '/JS/GUI/Text.js';

import Platform from '/JS/Physics/Platform.js';
import Player from '/JS/Physics/Player.js';

var player;

export default class Game extends Scene
{
    constructor(s)
    {
        super(s);
        this.s = s;
        this.setupGame();
    }

    setupGame()
    {
        player = new Player(this.s, this);
        this.pushToUpdate(new Rectangle(this.s, 0, 0, this.s.width, this.s.height, "#000000", undefined));
        this.pushToUpdate(new Platform(this.s, "floor", 0, 400, this.s.width, this.s.height - 400));

        this.pushToUpdate(player);
    }
}
