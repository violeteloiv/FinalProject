import Circle from '/JS/GUI/Circle.js';
import {AABB} from '/JS/Physics/Collision.js';

export default class Projectile
{
    constructor(s, name, player, enemies, damage)
    {
        this.s = s;
        this.name = name;
        this.player = player;
        this.enemies = enemies;
        this.damage = damage;
        this.distFromFire = 0;
        this.circle = new Circle(s, player.hand.pos.x + player.hand.size.x, player.hand.pos.y + player.hand.size.y / 2, 5, 5, "#aaaaaa", "#666666");
        this.fired = false;
        this.pos = this.circle.pos;
        this.currentScene = this.player.currentScene;

        this.firstPos = this.s.createVector(this.pos.x, this.pos.y);
        this.mousePos = this.s.createVector(this.s.mouseX, this.s.mouseY);

        let distX = this.firstPos.x - this.mousePos.x;
        let distY = this.firstPos.y - this.mousePos.y;

        let speed = 3;

        let angle = this.s.atan(distY / distX);

        this.vel = this.s.createVector(speed * this.s.cos(angle), speed * this.s.sin(angle));
    }

    update()
    {
        this.circle.update();

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

        this.checkCollision();

        this.distFromFire = this.s.dist(this.firstPos.x, this.firstPos.y, this.pos.x, this.pos.y);

        if (this.distFromFire >= 400)
        {
            this.remove();
        }

        this.vel.y += 0.02;
    }

    checkCollision()
    {
        this.enemies.forEach(e => {
            if (AABB(this.circle, e))
            {
                e.health -= this.damage;
                this.remove();
            }
        });

        if (AABB(this.circle, this.currentScene.getUpdateable("floor")))
        {
            this.remove();
        }
    }

    remove()
    {
        let i = this.currentScene.updateables.indexOf(this);
        this.currentScene.updateables.splice(i, 1);
    }

    remove()
    {
        let i = this.currentScene.updateables.indexOf(this);
        this.currentScene.updateables.splice(i, 1);
    }
}
