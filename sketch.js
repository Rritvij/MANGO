const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var backgroundImg;
var stone, slingShot;
var mango1;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    treeIMG=loadImage("sprites/tree.png")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    mango1=new Mango(600,600,100,100)



    ground = new Ground(600,height,1200,20);
    
    


    mango1 = new Mango(810, 350);

   

    stone = new Stone(100,100);
   
    //log6 = new Log(230,180,80, PI/2);
    slingShot = new Slingshot(stone.body,{x:250,y:450});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
  
    ground.display();
  
    stone.display();
   
mango1.display();

    //log6.display();
    slingShot.display();   
   
}

function mouseDragged (){

Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){

slingShot.fly();

}