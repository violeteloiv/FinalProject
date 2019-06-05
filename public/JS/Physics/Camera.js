export default class Camera
{
    constructor(s, scene, player)
    {
        this.s = s;
        this.u = scene.updateables;
        this.player = player
    }

    update()
    {
        this.u.forEach(u => {
            if (u != this.player || u != this)
            {
                u.vel = this.s.createVector(-this.player.vel.x, -this.player.vel.y);
            }
        });
    }
}
