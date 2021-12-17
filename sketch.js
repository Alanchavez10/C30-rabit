const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var food;
var rabbit;

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
  eat=loadAnimation("eat_0.png","eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  eat.playing=true;
}

function setup() 
{
  createCanvas(500,600);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  eat.frameDelay=10;
  button=createImg('cut_button.png');
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);
  rabit=createSprite(250,530,100,100);
  rabit.addImage(rabbit);
  rabit.scale=0.2;
  rabit.addAnimation('eating',eat);
  ground = new Ground(200,590,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,490,690);

  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();
rabit.changeAnimation('eating');
 
   drawSprites();
}

function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con=null;
}