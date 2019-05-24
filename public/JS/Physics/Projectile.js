import Circle from '/JS/GUI/Circle.js';

export default class Projectile
{
    constructor(s, name, player)
    {
        this.s = s;
        this.name = name;
        this.player = player;
        this.distFromFire = 0;
        this.pos = this.s.createVector(player.hand.pos.x, player.hand.pos.y);
        this.circle = new Circle(s, this.pos.x, this.pos.y, 5, 5, "#ffff00", "#ffff00");
        this.fired = false;
    }

    update()
    {
        this.circle.update();

        if (this.fired)
        {
            let prevPos = this.s.createVector(this.pos.x, this.pos.y);
            let mousePos = this.s.createVector(this.s.mouseX, this.s.mouseY);

            let distX = mousePos.x - prevPos.x;
            let distY = mousePos.y - prevPos.y;

            let speed = 5;

            let angle = this.s.atan(distY / distX);

            let changeX = speed * this.s.sin(angle);
            let changeY = speed * this.s.cos(angle);
        }
    }
}
