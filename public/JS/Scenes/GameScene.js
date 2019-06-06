import Scene from '/JS/Scenes/Scene.js';
import Rectangle from '/JS/GUI/Rectangle.js';
import Button from '/JS/GUI/Button.js';
import Text from '/JS/GUI/Text.js';
import HealthBar from '/JS/GUI/HealthBar.js';

import Platform from '/JS/Physics/Platform.js';
import Player from '/JS/Physics/Player.js';
import Enemy from '/JS/Physics/Enemy.js';
import Camera from '/JS/Physics/Camera.js';

var player;

export default class Game extends Scene
{
    constructor(s)
    {
        super(s);
        this.s = s;

        this.projectiles = [];
        this.enemies = [];

        player = new Player(this.s, "player", this, this.enemies);
        for (let i = 0; i < NUM_ENEMIES_1; i++)
            this.enemies.push(new Enemy(this.s, this, player));

        this.camera = new Camera(s, this, player);

        this.setupGame();
    }

    setupGame()
    {
        this.pushToUpdate(new Rectangle(this.s, 0, 0, this.s.width, this.s.height, "#000000", undefined));
        this.pushToUpdate(new Platform(this.s, "floor", 0, 400, this.s.width, this.s.height - 400));
        this.pushToUpdate(new HealthBar(this.s, player, 100, 200));

        this.enemies.forEach(e => {
            this.pushToUpdate(e);
        });

        this.pushToUpdate(player);
        //this.pushToUpdate(this.camera);
    }

    addProjectile(p)
    {
        this.projectiles.push(p);
        this.pushToUpdate(p);
    }

    removeEnemy(e)
    {
        let ie = this.enemies.indexOf(e);
        this.enemies.splice(ie, 1);
        let iu = this.updateables.indexOf(e);
        this.updateables.splice(iu, 1);
    }
}
