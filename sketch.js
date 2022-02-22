const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground, leftWall, rightWall;
var ball

function setup() {
  createCanvas(800,400);


  engine = Engine.create();
  
  world = engine.world;
  
  ground = new Ground(400, 395, 800, 10)
  leftWall = new Ground(475, 364, 10, 50);
  rightWall = new Ground(625, 364, 10, 50)

  ball = new Ball(200, 200, 25)
  
}

function draw() 
{
  background(51);
  Engine.update(engine);



  ground.display();
  leftWall.display();
  rightWall.display()

  ball.display()
}

function keyPressed(){
    if (keyCode === UP_ARROW){
      Matter.Body.applyForce(ball.body,ball.position,{x:40,y:-40});
    }
}
