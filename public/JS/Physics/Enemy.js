import Rectangle from '/JS/GUI/Rectangle.js';

import {AABB} from '/JS/Physics/Collision.js';

export default class Enemy
{
    constructor(s, currentScene)
    {
        this.s = s;
        this.currentScene = currentScene;

        this.vel = this.s.createVector(0, 0);

        this.rect = new Rectangle(this.s, this.s.floor(this.s.random(0, this.s.width - 32)), 0, 32, 64, "#ff00ff", "#ff00ff");

        this.pos = this.rect.pos;
        this.size = this.rect.size;
    }

    update()
    {
        this.rect.update();

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

        if (this.checkCollision())
        {
            this.vel.y *= -0.4;

            if (this.vel.y < 2 && this.vel.y >= 0)
            {
                this.vel.y = 0;
            }

            this.pos.y = this.currentScene.getUpdateable("floor").pos.y - this.size.y;
        }

        this.vel.y += GRAVITY;
    }

    checkCollision()
    {
        return AABB(this, this.currentScene.getUpdateable("floor"));
    }
}
