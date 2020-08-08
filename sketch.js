const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, ground2;

var block1,block2,block3,block4;
var block5,block6,block7;
var block8,block9;
var block10;

var block11,block12,block13;
var block14,block15;
var block16;

var engine, world;

var polygon;

var slingShot;

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
	world = engine.world;

  block1 = new Block(410,300,50,80);
  block2 = new Block(465,300,50,80);
  block3 = new Block(355,300,50,80);
  block4 = new Block(300,300,50,80);

  block5 = new Block2(327,200,50,80);
  block6 = new Block2(382,200,50,80);
  block7 = new Block2(437,200,50,80);

  block8 = new Block3(352,100,50,80);
  block9 = new Block3(407,100,50,80);

  block10 = new Block4(379,15,50,80);
  
  block11 = new Block(800,100,50,80);
  block12 = new Block(745,100,50,80);
  block13 = new Block(690,100,50,80);

  block14 = new Block4(775,0,50,80);
  block15 = new Block3(745,-100,50,80);

  block16 = new Block4(715,0,50,80);

  polygon = new Hexagon(200,100,50);

  ground = new Ground(380,500,300,10);
  ground2 = new Ground(750,350,200,10);
  ground3 = new Ground(500,600,1000,50);

  slingShot = new SlingShot(polygon.body,{x:100, y:100});

  Engine.run(engine);
}

function draw() {
	Engine.update(engine);
  background(254);  

  ground.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();

  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();

  block10.display();
  
  block11.display();
  block12.display();
  block13.display();

  block14.display();
  block15.display();
  
  block16.display();
  polygon.display();
  slingShot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}
