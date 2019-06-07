import Rectangle from '/JS/GUI/Rectangle.js';
import Text from '/JS/GUI/Text.js';
import Button from '/JS/GUI/Button.js';

import {AABB} from '/JS/Physics/Collision.js';
import Projectile from '/JS/Physics/Projectile.js';

let count = 0;
let a = 0;
let c1 = 0;
var gravity = GRAVITY;

// s, n, x, y, w, h
var goB;
var lB;

var goT;
var lT;

export default class Player
{
    constructor(s, name, currentScene, enemies)
    {
        this.s = s;
        this.name = name;
        this.currentScene = currentScene;
        this.enemies = enemies;

        this.vel = this.s.createVector(0, 0);

        this.rect = new Rectangle(this.s, 0, 0, 32, 64, "#555555", "#555555");

        let handX = this.rect.pos.x + this.rect.size.x;
        let handY = this.rect.pos.y + this.rect.size.y / 2;
        this.hand = new Rectangle(this.s, handX, handY - 10, 20, 10, "#cccaa3", "#cccaa3");
        this.grounded = false;

        this.pos = this.rect.pos;
        this.size = this.rect.size;
        this.colliding = true;

        ///--- PLAYER DATA ---\\\
        this.health = MAX_HEALTH;

        goB = new Button(this.s, "goB", this.s.width / 2 - 125 / 2, this.s.height / 2 + 35, 125, 50);
        lB = new Button(this.s, "lB", this.s.width / 2 - 100, this.s.height / 2 + 100, 200, 50);

        lT = new Text(this.s, "lT", "Leaderboard", lB.pos.x + 100, lB.pos.y + 30, 15, "#000000");
        goT = new Text(this.s, "goT", "Exit", goB.pos.x + 125 / 2, goB.pos.y + 30, 15, "#000000");
    }

    update()
    {
        this.rect.update();
        this.hand.update();

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

        this.hand.pos.x = this.pos.x + this.size.x;
        this.hand.pos.y = this.pos.y + this.size.y / 2 - 10;

        this.vel.y += gravity;

        this.move();

        if (this.checkCollision() && this.colliding)
        {
            this.vel.y *= -0.4;

            if (this.vel.y < 2 && this.vel.y >= 0)
            {
                this.vel.y = 0;
            }

            this.grounded = true;

            this.pos.y = this.currentScene.getUpdateable("floor").pos.y - this.size.y;
            gravity = 0;
        }
        else
        {
            this.grounded = false;
            gravity = GRAVITY;
        }

        this.checkForDamage();

        if (this.health <= 0)
        {
            this.colliding = false;
            this.s.fill(0, 0, 0, a)
            this.s.rect(0, 0, this.s.width, this.s.height);

            let sT = this.currentScene.getUpdateable("scoreT");

            let distX = sT.pos.x - this.s.width / 2;
            let distY = sT.pos.y - this.s.height / 2;

            let angle = this.s.atan(distY / distX);

            let increment = this.s.sqrt((distX * distX) + (distY * distY)) / 100;

            sT.pos.x -= this.s.cos(angle) * increment;
            sT.pos.y -= this.s.sin(angle) * increment;

            goB.fillColor = [255, 255, 255, a];
            goB.strokeColor = [0, 0, 0, a];
            goB.update();
            goT.update();


            lB.fillColor = [255, 255, 255, a];
            lB.strokeColor = [0, 0, 0, a];
            lB.update();
            lT.update();

            a += 1;
            if (a > 255)
                a = 255;
        }

        if (this.colliding == false && c1 == 0)
        {
            this.vel.y -= 6;
            c1++;
        }

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
            if (count % 20 == 0)
                this.currentScene.addProjectile(new Projectile(this.s, "p" + count, this, this.enemies, 10));
            count++;
        }
    }
}
