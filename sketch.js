function setup() {
  // e = document.getElementById("canvas");
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
