/* api key updated */
var weather;
function preload() {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2de143494c0b295cca9337e1e96b00e0';
  weather = loadJSON(url);
  println(weather);
}

function setup() {
  noLoop();
}

function draw() {
  createCanvas(500, 500)
  background(0, 230, 60, 70);
  line(50, 25, 50, 475)
  line(25, 450, 475, 450)
  line(25, 250, 75, 250)
  text("meh", 22, 265);
  text("omg", 22, 65);
  text("omg", 22, 440);
  text("humidity", 155, 475);
  text("temperature (F)", 335, 475);
  line(25, 50, 75, 50)
  fill (0, 60, 250, 100)
  var humidity = weather.main.humidity;
  rect(125, 450, 100, -humidity*4);
  fill (255, 160, 0, 175)
  var temp = weather.main.temp;
  rect(325, 450, 100, -temp/1.5);
}
