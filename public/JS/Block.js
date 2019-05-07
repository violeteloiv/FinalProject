export default class Block
{
    constructor(s, x, y, w, h)
    {
        this.s = s;
        this.size = this.s.createVector(w, h);

        this.pos = this.s.createVector(x * 32, y * 32);
    }

    show()
    {
        this.s.fill(0);
        this.s.noStroke();
        this.s.rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }

    drawBlockOnGrid()
    {
      this.s.rect(this.x * this.size.x, this.y * this.size.y, this.size.x, this.size.y);
    }

    update()
    {
        this.show();
    }
}
