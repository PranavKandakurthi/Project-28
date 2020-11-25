const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bodies = [];
let boy, boyimage;

function preload() {
	boyimage = loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200, 620);
	boy.addImage("boy", boyimage);
	boy.scale = 0.1;

	

	//Create the Bodies Here.
	ground = new Ground(width / 2, height, width, 50);
	bodies.push(ground);

	tree = new Tree(width / 2, 400);
	bodies.push(tree);

	rock = new Rock(150, 560);
	bodies.push(rock);

	launcher = new Launcher(rock.body, { x: 150, y: 567.5 });
	bodies.push(launcher);

	mango1 = new Mango(850, 140);
	bodies.push(mango1);

	mango2 = new Mango(575 + 180, 315);
	bodies.push(mango2);

	mango3 = new Mango(640 + 180, 190);
	bodies.push(mango3);

	mango4 = new Mango(570 + 180, 200);
	bodies.push(mango4);

	mango5 = new Mango(675 + 180, 270);
	bodies.push(mango5);

	mango6 = new Mango(485 + 180, 310);
	bodies.push(mango6);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background("lightblue");

	fill("black")
	textSize(24);
	text("[Drag and release the rock to launch it!]",150,100);
	text("[Get as many mangoes as you can!]",150,125);
	text("[Press 'R' if you want to throw again!]",150,150);

	drawSprites();

	for (let i = 0; i < bodies.length; i++) {
		bodies[i].display();
	}

	detectColission(rock, mango1);
	detectColission(rock, mango2);
	detectColission(rock, mango3);
	detectColission(rock, mango4);
	detectColission(rock, mango5);
	detectColission(rock, mango6);

}

function keyPressed() {
	if (key == 'r') {
		Body.setPosition(rock.body, { x: 150, y: 560 });
		launcher.attach(rock.body);
	}
}


function mouseDragged() {
	if (launcher.constraint.bodyA)
		Body.setPosition(rock.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	launcher.fly();
}

function detectColission(rock, mango) {
	let distance = dist(rock.body.position.x, rock.body.position.y, mango.body.position.x, mango.body.position.y);
	if (distance <= rock.radius + mango.radius) {
		Body.setStatic(mango.body, false);
	}
}
