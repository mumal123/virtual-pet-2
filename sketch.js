//Create variables here
var dog, happyDog, database, foodS, foodStock,database,dogimg,food,foodimg;
function preload(){
happyDog=loadImage("images/dogImg.png");
dogimg=loadImage("images/dogImg1.png");
foodimg=loadImage("images/Milk.png")
}
function setup() {
  database = firebase.database();
  console.log(database);
	createCanvas(1000, 1000);
  dog=createSprite(700,500,20,20);
dog.addImage(dogimg)
food=createSprite(200,200,30,30);
food.addImage(foodimg)
 foodStock=database.ref("food")
 foodStock.on("value",readStock)
}
function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(happyDog)

  }
  drawSprites();
  textSize(35)
  fill("white")
  text("food:20",10,100)
  
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref("/").update({
    food:x
    
  })
}