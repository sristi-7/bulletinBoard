var wall,thickness;
var bullet,speed,weight;
var bullet2;
var bullet3;
var bullet4;
function setup() {
  createCanvas(1600,600);
  bullet=createSprite(150, 70, 50, 50);
  bullet.shapeColor=("yellow");
  bullet2=createSprite(150,140,50,50);
  bullet2.shapeColor=("yellow");

  bullet3=createSprite(150,210,50,50);
  bullet3.shapeColor=("yellow");
  bullet4=createSprite(150,280,50,50);
  bullet4.shapeColor=("yellow");
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=("blue");
  
  
  
  
   wallthickness=random(22,83);
  bulletspeed=random(223,321);
  bulletweight=random(30,52);
  bullet.velocityX = 5;
  bullet2.velocityX = 6;
 bullet3.velocityX = 4;
 bullet4.velocityX = 7;

  
}

function draw() {
  background("pink");  

  
  bullet2.collide(wall);
  bullet3.collide(wall);
  bullet4.collide(wall);
  bullet.collide(wall);
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      bullet.shapeColor=color(0,255,0);
      bullet2.shapeColor=color(0,255,0);
      bullet3.shapeColor=color(0,255,0);
      bullet4.shapeColor=color(0,255,0);
    }
   if (damage<10)
   {
     bullet.shapeColor=color(255,0,0);
     bullet2.shapeColor=color(255,0,0);
     bullet3.shapeColor=color(255,0,0);
     bullet4.shapeColor=color(255,0,0);
   }
   
   



   


  }

  

  
  
  
  drawSprites();
}
function hasCollided(bullet,wall)
{
 bulletRightEdge=bullet.x+bullet.width;
 wallLeftEdge=wall.x;
 if(bulletRightEdge>=wallLeftEdge)
 {
   return true;

 }
   return false;
}