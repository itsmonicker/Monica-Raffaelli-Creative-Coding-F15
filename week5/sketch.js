var radius = 200.0;
var angle1 = 0.0;
var angle2 = 0.0;
var x=0, y=0;

function setup(){
  createCanvas(500, 500);
  
}
function draw(){

  background(50, 125, 125);
  text((angle1 / -TWO_PI * 59), 50, 450);
  text((angle2 / -TWO_PI * 59), 440, 450);
  fill(0);
  triangle(30, 240, 20, 250, 30, 260);
  triangle(470, 240, 480, 250, 470, 260);
  fill(255);
  triangle(240, 30, 250, 20, 260, 30);
  triangle(240, 470, 250, 480, 260, 470);
  translate(250, 250);
  
  rotate(HALF_PI+PI);
  angle1 = (second() / 59.0) * TWO_PI;
  
  x = cos(angle1)* radius;
  y = sin(angle1)* radius;
  
  stroke(0);
  strokeWeight(10);
  
  line(0,0,x,y);
  
  angle2 = (second() / 59.0) * -TWO_PI;
  
  x = cos(angle2)* radius;
  y = sin(angle2)* radius;
  
  stroke(255);
  
  line(0,0,x,y);

}
