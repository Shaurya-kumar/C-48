
var balloon;
var rect,rect2;
var back;
var gameState = "play";


function preload(){

balloonImg = loadImage("balloon.png")
backImg = loadImage("background.png") 

}

function setup(){
  
  createCanvas(1000,700);
  
  back = createSprite(500,350,windowWidth,windowHeight)
  back.addImage(backImg)

  balloon = createSprite(500,600,10,10)
balloon.scale = balloon.scale - 0.75
  balloon.addImage(balloonImg);
  balloon.debug = false;
balloon.setCollider("circle",0,-110,75)
 
ObstacleGroup = createGroup()

}

function draw() {
  background(0);

if(gameState === "play"){

if(keyDown("DOWN_ARROW")){

  balloon.y = balloon.y + 1

}
if(keyDown("UP_ARROW")){

  balloon.y = balloon.y - 1

}

if(keyDown("LEFT_ARROW")){

  balloon.x = balloon.x - 1.5
  
}

if(keyDown("RIGHT_ARROW")){

  balloon.x = balloon.x + 1.5


}

Obstacles();

if(balloon.isTouching(ObstacleGroup)){

gameState = "end"

}
}

else if(gameState === "end"){

  ObstacleGroup.setVelocityYEach(0);

  balloon.velocityX = 0
  balloon.velocityY = 0
 
 
 
  ObstacleGroup.setLifetimeEach(-1);

  text("Game Over",500,350)

}



console.log(gameState);

  drawSprites();

}

function Obstacles(){

if(frameCount%60 === 0){

rect = createSprite(0,0,random(300,1000),35)
rect2 = createSprite(1000,0,random(300,1000),35)
rect.velocityY = 3
rect2.velocityY = 3

rect.shapeColor = color(random(0,255),random(0,255),random(0,255))
rect2.shapeColor = color(random(0,255),random(0,255),random(0,255))

ObstacleGroup.add(rect);
ObstacleGroup.add(rect2);
}



}