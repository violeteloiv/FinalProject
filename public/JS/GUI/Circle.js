export default class Circle
{
    constructor(s, x, y, w, fc, sc)
    {
        this.s = s;
        this.pos = this.s.createVector(x, y);
        this.w = w;
        this.fc = fc;
        this.sc = sc;
    }

    update()
    {
        if (this.fc)
            this.s.fill(this.fc);
        if (this.sc)
            this.s.fill(this.sc);

        this.s.ellipse(this.pos.x, this.pos.y, this.w, this.w);
    }
}
