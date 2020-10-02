
var bananaImage
var obstacleImage,obstacleGroup,backImage,score;
var foodGroup
var monkey
var monk


function preload() {
backImage=loadImage("jungle.jpg")

monk=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}

bananaImage = loadImage("Banana.png")
obstacleImage = loadImage("stone.png")

function setup() { 
  createCanvas(400, 400);
  
  Background = createSprite(200.200,20,20)
  Background.addImage("Banana",bananaImage)
  Background.velocityX=10
  
  ground.visible=false
  
  monkey =createSprite(200,200,20,20) 
  monkey.addAnimation("monk",monk);
} 

function draw() {
  background(220);
  
  if(BackgroundX>400){
  BackgroundX=200
  } 
  
  if(foodGroup.isTouching(monkey)){
  score=score+2
  foodGroup.destroyEach()
  }
  
  switch(score){
    case 10:monkey.scale=0.12
      break;
    case 20:monkey.scale=0.14
      break;
      case 30:monkey.scale=0.16
      break;
      default:break;
  }    
  if(obstacleGroup.isTouching(monkey)){
  monkey.scale=0.10
  }
  
  stroke("white")
  textSize(20)
  fill("white")
  text("score: "+ score,400,50);  
}

drawSprites()