var movingrect
var fixedrect


function setup() {
  createCanvas(800,400);

  fixedrect= createSprite(400, 200, 50, 50);
  movingrect= createSprite(600,200,80,50);

  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";

  fixedrect.velocityX=4;
  movingrect.velocityX=-4;

}

function draw() {
  background("black"); 
  
  //movingrect.x=World.mouseX;
  //movingrect.y=World.mouseY;


  if(fixedrect.x-movingrect.x<=fixedrect.width/2+movingrect.width/2 && 
    movingrect.x-fixedrect.x<=fixedrect.width/2+movingrect.width/2 && 
    fixedrect.y-movingrect.y<=fixedrect.height/2+movingrect.height/2 &&
    movingrect.y-fixedrect.y<=fixedrect.height/2+movingrect.height/2){
      movingrect.shapeColor="red";
      fixedrect.shapeColor="red";

      movingrect.velocityX=movingrect.velocityX*-1;
      fixedrect.velocityX=fixedrect.velocityX*-1;
      
  }

  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }

  drawSprites();


}