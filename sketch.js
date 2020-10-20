
var movrect, fixrect;

function setup() {
  createCanvas(400,400);
  movrect=createSprite(200,200,10,50)
  fixrect=createSprite(100,200,50,50)
}

function draw() {
  background("blue"); 
  movrect.x=mouseX;
  movrect.y=mouseY;
if(movrect.x-fixrect.x<movrect.width/2+fixrect.width/2 &&
  fixrect.x-movrect.x<movrect.width/2+fixrect.width/2&&
  movrect.y-fixrect.y<movrect.width/2+fixrect.width/2 &&
  fixrect.y-movrect.y<movrect.width/2+fixrect.width/2
  ){
  movrect.shapeColor="yellow";
  fixrect.shapeColor="yellow";
}else{

 movrect.shapeColor="red";
 fixrect.shapeColor="red";
}

   
drawSprites();



}