import Rectangle from '/JS/GUI/Rectangle.js';

import {AABB} from '/JS/Physics/Collision.js';
import Projectile from '/JS/Physics/Projectile.js';

export default class Player
{
    constructor(s, currentScene, enemies)
    {
        this.s = s;
        this.currentScene = currentScene;
        this.enemies = enemies;

        this.vel = this.s.createVector(0, 0);

        this.rect = new Rectangle(this.s, 0, 0, 32, 64, "#555555", "#555555");

        let handX = this.rect.pos.x + this.rect.size.x;
        let handY = this.rect.pos.y + this.rect.size.y / 2;
        this.hand = new Rectangle(this.s, handX, handY, 20, 10, "#555555", "#555555");
        this.grounded = false;

        this.pos = this.rect.pos;
        this.size = this.rect.size;

        ///--- PLAYER DATA ---\\\
        this.health = MAX_HEALTH;
    }

    update()
    {
        this.rect.update();
        this.hand.update();

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

        this.hand.pos.x = this.pos.x + this.size.x;
        this.hand.pos.y = this.pos.y + this.size.y / 2;

        this.vel.y += GRAVITY;

        this.move();

        if (this.checkCollision())
        {
            this.vel.y *= -0.4;

            if (this.vel.y < 2 && this.vel.y >= 0)
            {
                this.vel.y = 0;
            }

            this.grounded = true;

            this.pos.y = this.currentScene.getUpdateable("floor").pos.y - this.size.y;
        }
        else
        {
            this.grounded = false;
        }

        this.checkForDamage();
        this.fire();
    }

    move()
    {
        if (this.s.keyIsDown(65)) // A Key (Move Left)
        {
            this.pos.x -= 5;
        }

        if (this.s.keyIsDown(68)) // D Key (Move Right)
        {
            this.pos.x += 5;
        }

        if (this.s.keyIsDown(32) && this.grounded) // SpaceKey (JUMP)
        {
            this.vel.y = -10;
        }
    }

    checkCollision()
    {
        return AABB(this, this.currentScene.getUpdateable("floor"));
    }

    checkForDamage()
    {
        this.enemies.forEach(e => {
            if (AABB(this, e))
            {
                this.health -= 1;
            }
        });
    }

    fire()
    {
        if (this.s.mouseIsPressed)
        {
            this.currentScene.pushToUpdate(new Projectile(this.s, "p", this));
        }
    }
}
