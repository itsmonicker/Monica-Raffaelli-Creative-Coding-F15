//original work: http://bit.ly/1Kp0Tpn

var Y_AXIS = 1;
var b1, b2, c1, c2;

function setup() {
  createCanvas(500, 800);

  b1 = color(255);
  b2 = color(180);

  noLoop();
}

function draw() {
  setGradient(0, 0, width, height, b1, b2, Y_AXIS);

noFill();
stroke(0);
arc(250, 250, 450, 400, PI+HALF_PI, TWO_PI);
curve(-100, -100, 475, 250, 125, 700, 0, 300);
line(125, 700, 0, 400)
curve(-100, 300, 0, 400, 300, 250, 100, 100);
curve(0, 400, 300, 250, 250, 50, 75, 0);
}

function setGradient(x, y, w, h, b1, b2, axis) {

  noFill();

 if (axis == Y_AXIS) {
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(b1, b2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}
