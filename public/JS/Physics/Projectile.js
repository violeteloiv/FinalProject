import Circle from '/JS/GUI/Circle.js';

export default class Projectile
{
    constructor(s, name, player, enemies)
    {
        this.s = s;
        this.name = name;
        this.player = player;
        this.enemies = enemies;
        this.distFromFire = 0;
        this.circle = new Circle(s, player.hand.pos.x, player.hand.pos.y, 5, 5, "#ffff00", "#ffff00");
        this.fired = false;
        this.pos = this.circle.pos;

        this.firstPos = this.pos;
        this.mousePos = this.s.createVector(this.s.mouseX, this.s.mouseY);

        let distX = this.mousePos.x - this.firstPos.x;
        let distY = this.mousePos.y - this.firstPos.y;

        let speed = 5;

        let angle = this.s.atan(distY / distX);

        this.vel = this.s.createVector(speed * this.s.cos(angle), speed * this.s.sin(angle));
    }

    update()
    {
        this.circle.update();

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }
}
