import Rectangle from '/JS/GUI/Rectangle.js';

export default class Platform
{
    constructor(s, x, y, w, h)
    {
        this.s = s;
        this.pos = this.s.createVector(x, y);
        this.size = this.s.createVector(w, h);
        this.rect = new Rectangle(this.s, x, y, w, h, "#aaaaaa", "#aaaaaa");
    }

    update()
    {
        this.rect.update();
    }
}
