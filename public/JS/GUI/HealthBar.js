import Rectangle from '/JS/GUI/Rectangle.js';

export default class HealthBar
{
    constructor(s, player)
    {
        this.s = s;
        this.player = player;

        this.rect = new Rectangle(this.s, 15, 15, 200, 10, "#00ff00", "#000000");
        this.back = new Rectangle(this.s, 15, 15, 200, 10, "#ffffff", "#000000");

        this.pos = this.rect.pos;
        this.size = this.rect.size;
    }

    update()
    {
        this.back.update();
        this.rect.update();

        if (this.rect.size.x < 75)
        {
            this.rect.fillC = "#ffff00";
        }
        if (this.rect.size.x < 25)
        {
            this.rect.fillC = "#ff0000";
        }

        this.rect.size.x = (this.player.health / 100) * this.rect.size.x;
    }
}
