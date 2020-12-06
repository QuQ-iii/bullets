var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(800,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  wall = createSprite(650,200,thickness,200);
 
  bullet = createSprite(20,200,20,5);
  

  bullet.velocityX = speed;

}

function draw() {
  background("black");  

  if(bullet.x - wall.x < bullet.width/2 + wall.width/2
    && wall.x - bullet.x < bullet.width/2 + wall.width/2){

     var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

     bullet.velocityX = 0;

     if(damage > 10){
       wall.shapeColor = color(255, 0, 0);
     }else{
        wall.shapeColor = color(0, 255, 0);
      }
  }

  drawSprites();
}
