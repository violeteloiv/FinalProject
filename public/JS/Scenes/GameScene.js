import Scene from '/JS/Scenes/Scene.js';
import Rectangle from '/JS/GUI/Rectangle.js';
import Button from '/JS/GUI/Button.js';
import Text from '/JS/GUI/Text.js';
import HealthBar from '/JS/GUI/HealthBar.js';

import Platform from '/JS/Physics/Platform.js';
import Player from '/JS/Physics/Player.js';
import Enemy from '/Js/Physics/Enemy.js';

var player;

var enemies = [];

export default class Game extends Scene
{
    constructor(s)
    {
        super(s);
        this.s = s;

        this.projectiles = [];

        player = new Player(this.s, this, enemies);
        for (let i = 0; i < NUM_ENEMIES_1; i++)
            enemies.push(new Enemy(this.s, this, player));

        this.setupGame();
    }

    setupGame()
    {
        this.pushToUpdate(new Rectangle(this.s, 0, 0, this.s.width, this.s.height, "#000000", undefined));
        this.pushToUpdate(new Platform(this.s, "floor", 0, 400, this.s.width, this.s.height - 400));
        this.pushToUpdate(new HealthBar(this.s, player, 100, 200));

        enemies.forEach(e => {
            this.pushToUpdate(e);
        });

        this.pushToUpdate(player);
    }

    addProjectile(p)
    {
        this.projectiles.push(p);
        this.pushToUpdate(p);
    }
}
