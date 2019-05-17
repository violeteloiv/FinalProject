export default class Timer
{
    constructor(s)
    {
        this.s = s;
        this.ticks = 0;
        this.seconds = 0;

        this.running = false;
    }

    run()
    {
        this.running = true;
    }

    update()
    {
        this.ticks += 1;

        if (this.ticks % this.s.frameRate() == 0)
        {
            this.seconds += 1;
        }
    }

    stop()
    {
        this.running = false;
    }
}
