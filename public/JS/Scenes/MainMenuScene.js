import Scene from '/JS/Scenes/Scene.js';
import Rectangle from '/JS/GUI/Rectangle.js';
import Button from '/JS/GUI/Button.js';
import Text from '/JS/GUI/Text.js';

export default class MainMenu extends Scene
{
    constructor(s)
    {
        super(s);
        this.setupMainMenu();
    }

    setupMainMenu()
    {
        // Push Background
        this.pushToUpdate(new Rectangle(this.s, 0, 0, this.s.width, this.s.height, "#5faaa0"));

        // Make Play Button
        this.pushToUpdate(new Button(this.s, "pb", 0, 0, 150, 50));
        let b = this.getUpdateable("pb");
        b.pos = this.s.createVector(this.s.width / 2 - b.width / 2, this.s.height / 1.75);
        this.pushToUpdate(new Text(this.s, "pt", "PLAY", b.pos.x + b.width / 2, b.pos.y + 32, 20, "#000000"));

        // Title Card
        this.s.textAlign(this.s.CENTER);
        this.pushToUpdate(new Text(this.s, "tt", "WAVES", this.s.width / 2, this.s.height / 2 - 100, 50, "#000000"));

        this.pushToUpdate(new Text(this.s, "st", "It's a good sine", this.s.width / 2, this.s.height / 2 - 50, 20, "#000000"));
    }
}
