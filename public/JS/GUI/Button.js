export default class Button
{
    constructor(s, n, x, y, w, h)
    {
        this.s = s;

        this.name = n;

        this.pos = this.s.createVector(x, y);


        this.hasBeenClicked = false;

        this.fillColor = undefined;
        this.strokeColor = undefined;

        this.width = w;
        this.height = h;

        this.callback = undefined;
    }

    show()
    {
        this.s.fill(this.fillColor || 255);
        this.s.stroke(this.strokeColor || 0);
        this.s.textSize(this.tSize);
        this.s.rect(this.pos.x, this.pos.y, this.width, this.height);
    }

    changeColors(c1, c2)
    {
        this.fillColor = c1;
        this.strokeColor = c2;
    }

    update()
    {
        this.show();
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
