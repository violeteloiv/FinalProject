import MainMenu from '/JS/Scenes/MainMenuScene.js';
import Game from '/JS/Scenes/GameScene.js';
import GameOver from '/JS/Scenes/GameOverScene.js';

import Enemy from '/JS/Physics/Enemy.js';

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

        if (this.currentScene == this.scenes[1])
        {
            if (this.currentScene.enemies.length < 2)
            {
                let num = 2 - this.currentScene.enemies.length;
                for (let i = 0; i < num; i++)
                {
                    this.currentScene.enemies.push(new Enemy(this.s, this.currentScene, this.currentScene.getUpdateable("player")));
                    this.currentScene.updateables.push(new Enemy(this.s, this.currentScene, this.currentScene.getUpdateable("player")));
                }
            }

            let scoreT = this.currentScene.getUpdateable("scoreT");
            scoreT.text = "Score: " + this.currentScene.score;
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
        this.addScene(new GameOver(this.s));
    }

    switchScene(index)
    {
        this.currentScene = this.scenes[index];
    }
}
