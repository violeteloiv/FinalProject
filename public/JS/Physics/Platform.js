import Rectangle from '/JS/GUI/Rectangle.js';

export default class Platform
{
    constructor(s, name, x, y, w, h)
    {
        this.s = s;
        this.name = name;
        this.pos = this.s.createVector(x, y);
        this.size = this.s.createVector(w, h);
        this.vel = this.s.createVector(0, 0);
        this.rect = new Rectangle(this.s, x, y, w, h, "#aaaaaa", "#aaaaaa");
    }

    update()
    {
        this.rect.update();

        this.rect.pos.x += this.vel.x;
        this.rect.pos.y += this.vel.y;
    }
}
