var dog,sadDog,happyDog,milkImage;
var feedDog,addFood;
var feed,happyDog,foodObj,fedTime;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  drawSprites();

  feed = createButton("Feed The Dog")
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);


}

//function to read food Stock


function feedDog(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStock() <=0  ){
    foodObj.updatefoodStock(foodObj.getFoodStock()*0);
  } else{
    foodObj.updatefoodStock(foodObj.getFoodStock()-1);

    fedTime = database.ref('FeedTime');
    fedTime.on("value",function(data){
      lastFed = data.val();
    })
  }
}
 function addFoods(){
   foodS++;
   database.ref("/").update({
     Food:foodS
   })
 }


