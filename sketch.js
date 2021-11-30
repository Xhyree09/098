const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;

var ground_bottom, ground_top, ground_left, ground_right;
var ball1;
var btn1,btn2, pushbtn;


function setup() {
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;

  ground_bottom = new Ground(250,490,500,20);
  ground_top = new Ground(250,10,500,20);  
  ground_left = new Ground(10,250,20,500);
  ground_right = new Ground(490,250,20,500);

  //ball1 = new Ball(50,50,20);
  
  var ball_options = {
    restitution: 0.95
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  btn1 = createImg('right.png');
  btn1.position(350,40);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);

  btn2 = createImg('up.png');
  btn2.position(50,50);
  btn2.size(50,50);

  btn2.mouseClicked(vForce);
}
  
  

function draw() 
{
  background(51);
  Engine.update(engine);

  ground_bottom.show();
  ground_top.show();
  ground_left.show();
  ground_right.show();

  //ball1.show();

  ellipseMode(RADIUS);
  
  ellipse(ball.position.x,ball.position.y,20);


}

function hForce(){
  Matter.Body.applyForce(ball ,{x:0, y:0},{x:0.02, y:0})
}

function vForce(){
  Matter.Body.applyForce(ball ,{x:0, y:0},{x:0, y:-0.02})
}