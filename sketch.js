const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1;
var dustbin2;
var dustbin3;

function setup() {
	 canvas = createCanvas(1200,400);

	 engine = Engine.create();
	 world = engine.world;

     paper= new Paper(100,200,45) 
  
	 ground=new Ground(300,390,1900,10)

	 dustbin1=new Bin(900,355,10,60)
	 dustbin2=new Bin(1040,355,10,60)
	 dustbin3=new Bin(970,380,130,10)

	 Engine.run(engine);
  
}


function draw() {
  
	Engine.update(engine);

  background("Black");
  
  paper.display()
ground.display()

dustbin1.display()
dustbin2.display()
dustbin3.display()
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100})
  }
}
