export default class Player
{
    constructor(s)
    {
        this.s = s;

        this.pos = this.s.createVector(10, 10);
        this.size = this.s.createVector(50, 50);

        this.speed = 4;
    }

    update()
    {
        this.move();
        this.show();
    }

    show()
    {
        this.s.fill(255);
        this.s.noStroke();
        this.s.rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }

    move()
    {
        if (this.s.keyIsDown(87)) // W Key
        {
            this.pos.y -= this.speed;
        }
        if (this.s.keyIsDown(65)) // A Key
        {
            this.pos.x -= this.speed;
        }
        if (this.s.keyIsDown(83)) // S Key
        {
            this.pos.y += this.speed;
        }
        if (this.s.keyIsDown(68)) // D Key
        {
            this.pos.x += this.speed;
        }
    }
}
