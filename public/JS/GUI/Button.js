import Text from '/JS/GUI/Text.js';

var tWidth;
var tPos;

export default class Button
{
    constructor(s, x, y, text, tSize)
    {
        this.s = s;

        this.pos = this.s.createVector(x, y);

        this.text = text;
        this.tSize = tSize;

        this.hasBeenClicked = false;

        this.s.textSize(this.tSize);
        tWidth = this.s.textWidth(this.text);

        this.fillColor = undefined;
        this.strokeColor = undefined;

        this.width = tWidth + 20 * 2;
        this.height = (this.tSize * (4 / 3)) + 10;
        tPos = this.s.createVector(this.pos.x + this.width / 2, this.pos.y + (4 / 3) * this.tSize);

        this.callback = undefined;
    }

    show()
    {
        this.s.fill(this.fillColor || 255);
        this.s.stroke(this.strokeColor || 0);
        this.s.textSize(this.tSize);
        this.s.rect(this.pos.x, this.pos.y, this.width, this.height);
        this.s.fill(150);
        this.s.textAlign(this.s.CENTER);
        this.s.stroke(150);
        this.s.text(this.text, tPos.x, tPos.y);
    }

    changeColors(c1, c2)
    {
        this.fillColor = c1;
        this.strokeColor = c2;
    }

    update()
    {
        this.show();

        // MAKE IT SO IT ONLY CLICKS ONCE
        // CURRENT SET UP ISNT WORKING
        // ITS FREAKING 10:45PM GIVE ME A BREAK
        if (this.checkIfClicked())
        {
            if (this.hasBeenClicked == false)
            {
                if (this.callback != undefined)
                    this.callback();
                else
                    console.log("You have not set a callback. Please set one.");

                this.hasBeenClicked = true;
            }
            else
            {
                this.hasBeenClicked = false;
            }
        }
    }

    checkIfClicked()
    {
        return (this.onTop() && this.s.mouseIsPressed);
    }

    onTop()
    {
        let mouseX = this.s.mouseX;
        let mouseY = this.s.mouseY;
        return (mouseX > this.pos.x &&
                mouseX < this.pos.x + this.width &&
                mouseY > this.pos.y &&
                mouseY < this.pos.y + this.height)
    }

    setCallback(v)
    {
        this.callback = v;
    }
}
