var w;
var pg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth, windowHeight);
  background("#FEF5E7");
  w = new Walker(width / 2, height / 2, 50);
}

function draw() {
  w.step();
  w.display();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("#FEF5E7");
  w = new Walker(width / 2, height / 2, 50);
}

class Walker {
  constructor(x, y, resolution) {
    this.x = x;
    this.y = y;
    this.resolution = resolution;
    this.houseSize = this.resolution / 20;
  }

  display() {
    var w = 10 * this.houseSize;
    var h = 5 * this.houseSize;
    var th = 2 * this.houseSize;
    noStroke();
    push();
    translate(this.x, this.y);
    /**outer house */
    fill("darkorange");
    beginShape();
    vertex(0, 0);
    vertex(w, 0);
    vertex(w, -h);
    vertex((w / 4) * 3, -(h + th));
    vertex(((w / 5) * 3) / 2, -(h + th)); //inner top
    vertex(0, -h);
    endShape(CLOSE);

    /**inner house */
    fill("green");
    beginShape();
    vertex(0, 0);
    vertex((w / 5) * 3, 0);
    vertex((w / 5) * 3, -h);
    vertex(((w / 5) * 3) / 2, -(h + th)); //top
    vertex(0, -h);
    endShape(CLOSE);
    pop();
  }

  step() {
    var choice = floor(random(4));
    if (choice == 0) {
      this.x += this.resolution;
    } else if (choice == 1) {
      this.x -= this.resolution;
    } else if (choice == 2) {
      this.y += this.resolution;
    } else {
      this.y -= this.resolution;
    }
  }
}
