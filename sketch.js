const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;
function setup(){
  var canvas = createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world

  box1 = new abc(200, 200, 50, 50);
}
function draw(){
  background("yellow")
  Engine.update(engine)

  box1.display();
}