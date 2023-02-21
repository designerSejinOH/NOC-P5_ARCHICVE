var randomCounts = [];
var c = 0;
var sWidth = 1;
var onHover = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < windowWidth / sWidth; i++) {
    randomCounts[i] = 0;
  }
  rectMode(CENTER);
  frameRate(600);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  push();
  fill(0, 0, 255, 10);
  rect(width / 2, height / 2, width, height);
  pop();
  var index = int(random(randomCounts.length));
  myEaseIn(25, randomCounts[index], 0);
  randomCounts[index] += 10;

  noStroke();
  var w = 1;
  for (var x = 0; x < randomCounts.length; x++) {
    var loc = createVector(x * w, height / 2 - randomCounts[x]);
    var color;
    var ww = 1;
    if (color < 0) {
      color = 255;
    }
    if (
      mouseX < loc.x + w / 2 &&
      mouseX > loc.x - w / 2 &&
      mouseY < loc.y + randomCounts[x] / 2 &&
      mouseY > loc.y - randomCounts[x] / 2
    ) {
      ww = 10;
      color = 100;
      onHover = true;
    } else {
      ww = 1;
      color = map(randomCounts[x], 0, height, 0, 255);
      onHover = false;
    }
    fill(255, 255, 0, color);
    rect(loc.x, loc.y, ww, randomCounts[x] * height);
  }
}
function myEaseIn(a, x, b) {
  var ease = a * sqrt(x) + b;
  return ease;
}
function mousePressed() {
  redraw();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
