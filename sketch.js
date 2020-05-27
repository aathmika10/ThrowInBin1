var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var paper,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	paper1 = new Paper(200,630,45);
	dustbin =  new Dustbin(700,600,20,130);
	dustbin2 =  new Dustbin(900,600,20,130);
	dustbinBottom = new Dustbin(800,650,220,20);
	ground= new Ground(800,670,1600,20);

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	}
function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper1.display();
  dustbin.display();
  dustbin2.display();
  dustbinBottom.display();
  ground.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}


