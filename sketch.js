var bullet,speed, weight 
var wall, thickness



function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(50, 200, 50, 50);
  
  bullet.shapeColor=(255)
  thickness=random(22,83)
  
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=color(80,80,80)
speed=random(55,90)
weight=random(400,1500)


}

function draw() {
  background("black"); 
  
   bullet.velocityX=speed
   if(hasCollided(bullet,wall))
  {
  
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10)
    {
     wall.shapeColor=color(255,0,0)
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0)
    }
  }
     
  
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
    bulletRightEdge=lbullet.x+lbullet.width
    wallLeftEdge=lwall.x
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false
}