class Ball{
    constructor(x, y, r) {

        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0,
            density : 1.2
        }
        this.body = Bodies.circle(x, y, r, options)

        this.r = r

        World.add(world, this.body)


    }


    display() {
        ellipseMode(RADIUS);
        fill("white");
        stroke("grey")
        ellipse(this.body.position.x, this.body.position.y, this.r);
    }
}