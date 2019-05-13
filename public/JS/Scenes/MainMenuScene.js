import Scene from '/JS/Scenes/Scene.js';
import Rectangle from '/JS/GUI/Rectangle.js';
import Button from '/JS/GUI/Button.js';
import Text from '/JS/GUI/Text.js';

function call()
{
    console.log("Callback");
}

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

        // Push Background
        this.pushToUpdate(new Rectangle(this.s, 0, 0, this.s.width, this.s.height, "#5faaa0"));

        // Make Play Button
        this.pushToUpdate(new Button(this.s, "pb", 0, 0, 150, 50));
        let b = this.getUpdateable("pb");
        b.pos = this.s.createVector(this.s.width / 2 - b.width / 2, this.s.height / 1.75);
        this.pushToUpdate(new Text(this.s, "pt", "PLAY", b.pos.x + b.width / 2 - 25, b.pos.y + 32, 20, "#000000"));
        b.setCallback(call);
    }
}
