var wall, thickness;
var bullet, speed, height;

function setup(){
  createSprite(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
  thickness = random(22,83);

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*weight*speed/thickness*thickness*thickness;
    if (damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      bullet.shapeColor=color(0,255,0);
    }
  }
}


function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}