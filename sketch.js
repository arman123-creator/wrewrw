
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score , ground;

var survivalTime;
var abc;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png",
  "sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backgroundImage = loadImage("forest.jpg")
 monkeyCollided = loadImage("sprite_8.png")

   FoodGroup = new Group();
  obstacleGroup = new Group();
  gameOver = loadImage("gameover.jpg")


}



function setup() {
  createCanvas(displayWidth,displayHeight);
  
  score = 0;
  survivalTime = 0;
  
  ground=createSprite(0,800,200000,300)
 ground.shapeColor = "brown";
 
  ground.x = ground.width/2
  
   monkey=createSprite(90,370,10,10)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  
 
}


function draw() {
  background(backgroundImage);
  
  camera.x = monkey.x;


if(keyDown("UP_ARROW")&&monkey.y >= 350){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground)
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  ground.velocityX = -5 

    
 if(World.frameCount%200===0){
    fruits()
 }
  
  if(World.frameCount%300===0){
    stones()
 }
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+10
      }
  
  if(monkey.isTouching(obstacleGroup)){
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
   ground.velocityX = 0;
   monkey.addImage(monkeyCollided)
   monkey.velocityX = 0;
   textSize(30)
     fill("purple")
  text("[!!!! GAME OVER !!!!]",200,200)
   
   
  }
  
  if(keyDown(RIGHT_ARROW)){
    monkey.velocityX = 3
  }

  fill("red")
  textSize(15)
text("[PRESS UP ARROW TO JUMP]",50,50)
 
fill("red")
textSize(15)
text("[PRESS RIGHT ARROW TO MOVE MONKEY AHEAD]",50,200)

 drawSprites()


}

function fruits(){
  banana=createSprite(camera.x+width/2,120,10,10)
  banana.y = Math.round(random(170,230))
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-3
  FoodGroup.add(banana)
}

function stones(){
  obstacle=createSprite(camera.x+width/2,620,10,10)
  //obstacle.y = Math.round(random(270,230))
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-4
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)
}