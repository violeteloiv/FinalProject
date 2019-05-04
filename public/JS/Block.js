export default class Block
{
    constructor(s, x, y)
    {
        this.s = s;
        this.size = 32;

        this.pos = this.s.createVector(x * this.size, y * this.size);
    }

    show()
    {
        this.s.fill(0);
        this.s.noStroke();
        this.s.rect(this.pos.x, this.pos.y, this.size, this.size);
    }

    update()
    {
        this.show();
    }
}
