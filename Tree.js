class Tree {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.image= loadImage("tree.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.position.x, this.position.y, 400, 600);
    }
}