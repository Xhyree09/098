class Ball{
    constructor(x,y,r){

        let ballopts = {
            restitution:0.5
        }

        this.body = Bodies.circle(x,y,r);
        this.r = r;
        World.add(world,this.body);

    }

    show(){
        var pos = this.body.position;

        ellipseMode(RADIUS);
        fill("#ca00f4")
        ellipse(pos.x, pos.y, this.r);
    }
}