export default class Scene
{
    constructor(s)
    {
        this.s = s;
        this.renderables = [];
        this.updateables = [];
    }

    update()
    {
        this.show();

        this.updateables.forEach(u => {
            u.update();
        });
    }

    show()
    {
        this.renderables.forEach(r => {
            r.show();
        });
    }

    pushToRender(v)
    {
        this.renderables.push(v);
    }

    pushToUpdate(v)
    {
        this.updateables.push(v);
    }
}
