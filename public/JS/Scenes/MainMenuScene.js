import Scene from '/JS/Scenes/Scene.js';
import Rectangle from '/JS/GUI/Rectangle.js';

export default class MainMenu extends Scene
{
    constructor(s)
    {
        super(s);
        this.setupMainMenu();
    }

    setupMainMenu()
    {
        // SETUP GOES HERE
        // I.E. Pushing Stuff to renderables or updateables.
        // this.pushToRender() or this.pushToUpdate()

        this.pushToRender(new Rectangle(this.s, 0, 0, this.s.width, this.s.height, "#5faaa0"));
    }
}
