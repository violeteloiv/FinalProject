import Circle from '/JS/GUI/Circle.js';

export default class Projectile
{
    constructor(s, name, player)
    {
        this.s = s;
        this.name = name;
        this.circle = new Circle(s, player.hand.pos.x, player.hand.pos.y, 5, 5, "#ffff00", "#ffff00");
    }

    update()
    {
        this.circle.update();
    }
}
