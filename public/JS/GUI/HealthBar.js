import Rectangle from '/JS/GUI/Rectangle.js';

export default class HealthBar
{
    constructor(s, obj, mh, ml)
    {
        this.s = s;
        this.obj = obj;
        this.mh = mh;
        this.ml = ml;

        this.rect = new Rectangle(this.s, 15, 15, this.ml, 10, "#00ff00", "#000000");
        this.back = new Rectangle(this.s, 15, 15, this.ml, 10, "#ffffff", "#000000");

        this.pos = this.rect.pos;
        this.size = this.rect.size;
    }

    setPos(x, y)
    {
        this.back.pos = this.s.createVector(x, y);
        this.rect.pos = this.s.createVector(x, y);
    }

    setLength(w)
    {
        this.back.size.x = w;
        this.rect.size.x = w;
    }

    update()
    {
        this.back.update();
        this.rect.update();

        if (this.rect.size.x < this.mh / 2)
        {
            this.rect.fillC = "#ffff00";
        }
        if (this.rect.size.x < this.mh / 4)
        {
            this.rect.fillC = "#ff0000";
        }

        if (this.rect.size.x > 0)
            this.rect.size.x = (this.obj.health / this.mh) * this.ml;
    }
}
