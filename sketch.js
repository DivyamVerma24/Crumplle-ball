
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject,groundObject	
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	dustbinObj=new dustbin(1200,550);
	paperObject=new Paper(200,450,40);
	groundObject=new ground(width/2,570,width,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObject.display();	
  dustbinObj.display();
  paperObject.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}



