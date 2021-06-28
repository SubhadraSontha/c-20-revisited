var bgImg;
var tom, tom1, tom2, tom3, tom4;
var jerry, jerry1, jerry2, jerry3, jerry4;

function preload() {
   bgImg = loadImage("garden.png");
   tom1 = loadImage("cat1.png");
   tom2 = loadImage("cat2.png");
   tom3 = loadImage("cat3.png");
   tom4 = loadImage("cat4.png");

   jerry1 = loadImage("mouse1.png");
   jerry2 = loadImage("mouse2.png");
   jerry3 = loadImage("mouse3.png");
   jerry4 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(800,400);
    tom = createSprite(680,300,40,40);
    tom.addImage(tom2);
    tom.scale = 0.2;

    jerry = createSprite(180,320,20,20);
    jerry.addImage(jerry2);
    jerry.scale = 0.1

    tom.setCollider("circle", 0, 0, 300);
    tom.debug = true;

    jerry.setCollider("circle", 0, 0, 300);
    jerry.debug = true;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2) {
      tom.addImage("HappyTom", tom1);
     tom.changeAnimation("HappyTom");
   }

    leftKeyPressed();
    rightKeyPressed();
    drawSprites();
}


function leftKeyPressed(){

  //For moving and changing animation write code here


  if(keyCode === LEFT_ARROW) {
    jerry.addImage("mouseTeasing", jerry3);
    jerry.changeAnimation("mouseTeasing");
    jerry.velocityX = 3;
  }
}

function rightKeyPressed(){
if(keyCode === RIGHT_ARROW) {
  tom.velocityX = -3;
}
}