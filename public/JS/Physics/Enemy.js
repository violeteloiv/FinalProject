import Rectangle from '/JS/GUI/Rectangle.js';

import {AABB} from '/JS/Physics/Collision.js';

export default class Enemy
{
    constructor(s, currentScene, player)
    {
        this.s = s;
        this.currentScene = currentScene;
        this.player = player;

        this.vel = this.s.createVector(0, 0);

        this.rect = new Rectangle(this.s, this.s.floor(this.s.random(this.s.width / 2, this.s.width - 32)), 0, 32, 64, "#ff00ff", "#ff00ff");

        this.pos = this.rect.pos;
        this.size = this.rect.size;

        this.isAttacking = false;
    }

    update()
    {
        this.rect.update();
        this.checkIfPlayerIsNear();

        if (this.isAttacking)
        {
            let xDist = this.pos.x - this.player.pos.x;
            let yDist = this.pos.y - this.player.pos.y;

            let hy = this.s.sqrt((xDist * xDist) + (yDist * yDist));

            let xChange = xDist / hy;

            this.pos.x -= xChange * 3;
        }

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

    checkIfPlayerIsNear()
    {
        let d = this.s.dist(this.pos.x, this.pos.y, this.player.pos.x, this.player.pos.y);

        this.isAttacking = d < MAX_DIST_TILL_ATK_1;
    }

    checkCollision()
    {
        return AABB(this, this.currentScene.getUpdateable("floor"));
    }
}
