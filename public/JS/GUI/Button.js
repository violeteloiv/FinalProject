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

        this.s.textSize(this.tSize);
        tWidth = this.s.textWidth(this.text);

        this.fillColor = undefined;
        this.strokeColor = undefined;

        this.width = tWidth + 20 * 2;
        this.height = (this.tSize * (4 / 3)) + 10;
        tPos = this.s.createVector(this.pos.x + this.width / 2, this.pos.y + (4 / 3) * this.tSize);
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

    }

    checkIfClicked()
    {
        // return (this.onTop() && s.mouseIsPressed);
    }

    onTop()
    {

    }
}
