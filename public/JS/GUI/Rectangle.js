export default class Rectangle
{
    constructor(s, x, y, w, h, fc, sc)
    {
        this.s = s;
        this.pos = this.s.createVector(x, y);
        this.size = this.s.createVector(w, h);
        this.fillC = fc;
        this.strokeC = sc;
    }

    update()
    {
        if (this.fillC)
            this.s.fill(this.fillC);
        if (this.strokeC)
            this.s.stroke(this.strokeC);
        this.s.rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
}
