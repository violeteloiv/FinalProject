import Rectangle from '/JS/GUI/Rectangle.js';

import {AABB} from '/JS/Physics/Collision.js';

export default class Player
{
    constructor(s)
    {
        this.s = s;

        this.vel = this.s.createVector(0, 0);

        this.rect = new Rectangle(this.s, 0, 0, 32, 64);

        this.pos = this.rect.pos;
    }

    update()
    {
        this.rect.update();

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

        // this.vel.y += GRAVITY;

        this.move();
    }

    move()
    {
        // NEED TO FIX MOVEMENT
        // I NEED TO FIGURE STUFF OUT

        if (this.s.keyIsDown(65)) // A Key (Move Left)
        {
            this.vel.x = -5;
            console.log("Going left");
        }


        if (this.s.keyIsDown(68)) // D Key (Move Right)
        {
            this.vel.x = 5;
            console.log("Going right");
        }
    }

    checkCollision()
    {

    }
}
