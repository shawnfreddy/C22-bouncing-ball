const Engine= Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var ourEngine,ourWorld;

var ball, ground;


function setup() {
  createCanvas(800,400);

  ourEngine= Engine.create();
  ourWorld = ourEngine.world;

  var options ={
    isStatic : true
  }

  ground = Bodies.rectangle(400,390,800,20,options);
  World.add(ourWorld, ground);
  var ball_options={
   restitution :1.0
  }
  ball=Bodies.circle(400,100,20,ball_options);
  World.add(ourWorld,ball);

 console.log(ball);

  
  
}

function draw() {
  background("lightblue");  
  Engine.update(ourEngine);
  
  fill("yellow");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 20,20);
}