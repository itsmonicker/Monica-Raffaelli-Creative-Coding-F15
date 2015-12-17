var shark;

function preload() {

shark = loadAnimation("assets/shvrk-game1.png", "assets/shvrk-game2.png")
}

function setup() {
  createCanvas(450,600);
}

function draw() {
  background(0);  
    
  animation(shark, 250, 150);
}