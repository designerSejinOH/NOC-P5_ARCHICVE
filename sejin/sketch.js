function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  orbitControl();
  background(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
