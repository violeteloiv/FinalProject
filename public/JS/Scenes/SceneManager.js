import MainMenu from '/JS/Scenes/MainMenuScene.js';
import Game from '/JS/Scenes/GameScene.js';

export default class SceneManager
{
    constructor(s)
    {
        this.s = s;

        this.scenes = [];
        this.setup();
        this.currentScene = this.scenes[0];
    }

    update()
    {
        if (this.currentScene != undefined)
        {
            this.currentScene.update();
        }
    }

    addScene(s)
    {
        this.scenes.push(s);
    }

    setup()
    {
        this.addScene(new MainMenu(this.s));
        this.addScene(new Game(this.s));
    }

    switchScene(index)
    {
        this.currentScence = this.scenes[index];
    }
}
