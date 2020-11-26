
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground,box1;

function setup() {
	createCanvas(3000, 800);
	//rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,600,12000,20);
	box1 = new Box(900,100,60,60);
	box2 = new Box(900,100,60,60);
	box3 = new Box(960,100,60,60);
	box4 = new Box(960,100,60,60);
	box5 = new Box(900,100,60,60);
	box6 = new Box(900,100,60,60);
	box7 = new Box(900,100,60,60);
	box8 = new Box(960,100,60,60);
	box9 = new Box(960,100,60,60);
	box10 = new Box(960,100,60,60);
	box11 = new Box(1020,100,60,60);
	box12 = new Box(1020,100,60,60);
	box13 = new Box(1020,100,60,60);
	box14 = new Box(1020,100,60,60);
	box15 = new Box(1020,100,60,60);
	box16 = new Box(1020,100,60,60);
	box17 = new Box(900,100,60,60);
	box18 = new Box(900,100,60,60);
	box19 = new Box(960,100,60,60);
	box20 = new Box(1020,100,60,60);

	ball1 = new Ball(200,10,50,50);
	rope1 = new Rope(ball1.body,{x:750,y:30});
	
  
}


function draw() {
  //rectMode(CENTER);
  Engine.update(engine);
  background(255);
  box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display()
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 ball1.display();
 rope1.display();
  ground.display();
  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}
