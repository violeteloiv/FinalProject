import Text from '/JS/GUI/Text.js';

export default class Button
{
    constructor(s, x, y, text, tSize)
    {
        this.s = s;

        this.pos = this.s.createVector(x, y);

        this.text = text;
        this.tSize = tSize;

        let tWidth = this.s.textWidth(this.text);
    }

    show()
    {
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
