var bullet;
var wall;

var speed, weight, thickness;
//I made this a little different. If the damage is less than 10 there will be no change. If the damage is more than 10 it will become red. More realistic.
function setup() {
  createCanvas(600,200);

  bullet = createSprite(100,100,20,20);
  bullet.shapeColor = "white";

  wall = createSprite(550,100,thickness,180);
  wall.shapeColor = "green";

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

}

function draw() {
  background("black");  

  bullet.velocityX = speed;

  var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;

  if(isTouching(bullet,wall)){
    bullet.velocityX = 0;

    if(damage > 10){
      wall.shapeColor = "red";
    }

    if(damage < 10){
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
} else{
  return false;
}
}