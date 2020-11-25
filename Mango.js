class Mango {
    constructor(x, y) {
        this.radius = floor(random(20, 50));

        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }

        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);

        this.image = loadImage("mango.png");
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius * 2, this.radius * 2);
    }
}