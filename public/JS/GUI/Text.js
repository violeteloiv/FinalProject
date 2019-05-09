export default class Text
{
    constructor(s, text, x, y, size, fc)
    {
        this.s = s;
        this.pos = this.s.createVector(x, y);
        this.text = text;
        this.size = size;
        this.c = fc;
    }

    show()
    {
        this.s.textSize(this.size);
        this.s.stroke(this.c);
        this.s.fill(this.c);
        this.s.text(this.text, this.pos.x, this.pos.y);
    }
}
