export default class Player
{
    constructor(s)
    {
        this.s = s;

        this.pos = this.s.createVector(10, 10);
        this.size = this.s.createVector(50, 50);
    }

    update()
    {
        this.show();
    }

    show()
    {
        this.s.fill(255);
        this.s.noStroke();
        this.s.rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
}
