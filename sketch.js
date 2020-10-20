
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,350,800,20);

ball = new Ball(100,100,30);

bin1 = createSprite(700,325,80,10)
bin2 = createSprite(740,305,10,80)
bin3 = createSprite(660,305,10,80)


	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);

  console.log(ball.y);

  if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-10});
	
	
	}
  ball.display();
  ground.display();
  drawSprites();
 
}

