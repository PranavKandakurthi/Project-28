class Rock {
    constructor(x, y) {

        var options = {
            isStatic: false,
            restitution: 0.3,
            frition: 1,
            density: 1.2
        }

        this.radius = 25;

        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);

        this.image = loadImage("stone.png");
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius * 2, this.radius * 2);
    }
}