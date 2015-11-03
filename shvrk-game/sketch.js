var shark;

function preload() {

shark = loadAnimation("assets/shvrk-game1.jpg", "assets/shvrk-game2.jpg")
}

function setup() {
  createCanvas(450,600);
}

function draw() {
  background(0);  
    
  animation(shark, 250, 150);
}