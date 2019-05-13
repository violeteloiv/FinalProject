export default class Text
{
    constructor(s, name, text, x, y, size, fc)
    {
        this.s = s;
        this.name = name;
        this.pos = this.s.createVector(x, y);
        this.text = text;
        this.size = size;
        this.c = fc;
    }

    update()
    {
        this.s.textSize(this.size);
        this.s.stroke(this.c);
        this.s.fill(this.c);
        this.s.text(this.text, this.pos.x, this.pos.y);
    }
}
