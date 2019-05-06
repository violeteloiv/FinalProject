import {AABB} from '/JS/Collision.js';
import {loadData} from '/JS/Loaders.js';

var gravity = 0.2;

export default class Player
{
    constructor(s)
    {
        this.s = s;

        this.pos = this.s.createVector(10, 10);
        this.size = this.s.createVector(32, 64);

        this.vel = this.s.createVector(2, 0);

        loadData('../BackEnd/conversation.json', this);

        this.currentWave = 1;
        this.level = 0;
        this.exp = 0;
    }

    update()
    {
        this.vel.y += gravity;

        this.move();
        this.show();
    }

    show()
    {
        this.s.fill(100);
        this.s.noStroke();
        this.s.rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }

    checkCollision(block) { return AABB(this, block); }

    move()
    {
        this.pos.y += this.vel.y;

        if (this.s.keyIsDown(65)) // A Key
        {
            this.pos.x -= this.vel.x;
        }
        if (this.s.keyIsDown(68)) // D Key
        {
            this.pos.x += this.vel.x;
        }
        if (this.s.keyIsDown(32))
        {
            this.jump();
        }
    }

    jump()
    {
        this.vel.y = -2;
    }
}
