const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower, cannon,a,boladecanhao,b,b,can,d,e,f,angle;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15


  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Use a palavra-chave new para criar um objeto torre. (Desafio 4)
  tower = new Tower(150,350,150,310)
  cannon = new Cannon(160,110,130,100)
  can = new Cannon2(160,110,130,100,angle)
  boladecanhao = new Boladecanhao(can.x,can.y)
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
//exibir a torre (Desafio 4)

 can.display()
 cannon.display()
 tower.display()
 boladecanhao.display()
}


