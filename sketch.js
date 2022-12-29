var array = [1,1,1,1,1,1,1,1];
var values = [1,1,1,1,1,1,1,1];
var positonsX = [200,300,400,500,600,700,800,900];
var crcl = 50;
var d = 20;
var r = d/2;
let button;
var fillValue = 255;
var circleX, circleY, circleRad;
var drawText = false;
var img

function preload() {
  img = loadImage ("veg.png")
}



function setup(){
  img = loadImage('veg.png');
  //console.log(array);
  createCanvas(1100,650);
  textStyle(BOLDITALIC);
  textSize(50);
  
  
  initCircle();  
}


function draw(){
 // clear();
  let crcl = 200;
  d = 20;
  r = d/2;
  a = calculate(array);
  background(600);
   image(img,250,30);
  fill(0);
  //size(100);
  textSize(40);
  text(a,520,335);
  for (let i = 0; i < 8; i++){
    if (array[i] === 1){
      strokeWeight(0);
      fill(255, 215, 0);
      circle(crcl, 400, 50);
    } else {
      fill(215, 120, 0);
      circle(crcl, 360, 20);
    }
    crcl += 100;
  }
  // click"great going" 
  	if(mouseX > ((circleX) - circleRad/2) 
      && mouseX < (circleX + circleRad/2) 
  	  && mouseY > (circleY - circleRad/2) 
      && mouseY < (circleY + circleRad/2) 
  	
  		) {
   fillValue = 170; 
  } else {
   fillValue = 250; 
  }
  
  fill(fillValue);
  stroke(0);
  strokeWeight(0.5);
  ellipse(width/2+0,height/2+180,100);
  
  if(drawText==true) {
    textSize(50);
    fill(200,200,0);
    stroke(0,0,0);
    text("Correct!",width/2-140,height/2-60);
  }
  textSize(20);
   fill(0);
   text("Buy",528,512);
}
function calculate(array){
  let a = 0;
  for (let i = 0; i < 8; i++){
    if (array[i] === 1){
      a += values[i];
    }
  }
  return a;
}
function mouseClicked(){
  for (let i = 0; i < 8; i++){
    if (dist(mouseX,mouseY,positonsX[i],400) <= d){
      array[i] = 1 - array[i];
    }
  }
}
function initCircle() {
  
 circleX = width/2;
  circleY = height/2 +180;
  circleRad = 100;
  
}



function mousePressed(){
  
  	if(mouseX > (circleX - circleRad/2) 
    && mouseX < (circleX + circleRad/2) 
  	&& mouseY > (circleY - circleRad/2) 
    && mouseY < (circleY + circleRad/2) 
  	
  		) {
   drawText = true; 
  }  else {
   drawText = false; 
  }
  
}

function resetText(){
  
 drawText = false; 
}

