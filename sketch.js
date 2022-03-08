const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;

var chao;


function setup(){
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var options = {
    isStatic: true
  }

  chao = Bodies.rectangle(250,690,500,20,options);
  World.add(world,chao);

  textSize(50);
}

function draw(){
  background(51);
  Engine.update(engine);

  rect(chao.position.x,chao.position.y,500,20);
   
}
