let w;
let x,y;
let n=1;
let phone=[];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  phone[0] = new Walker(width/2,height/2);

}

function draw() {
  stroke(0);
  //print(choice);
  choice = int(random(4));
  phone[0].Walker();
  phone[0].move();
}

function mouseReleased(){
  background(255);
  //n++;
  //phone[0].click();
}

function mouseMoved(){
  background(255);
  n++;
  phone[0].click();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Walker{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.px;
    this.py;
  }
  Walker(){
    fill(255)
    rect(this.x-50,this.y-85,100,170,10);
    rect(this.x-40,this.y-75,80,150,10);
    rect(this.x-40,this.y+65,80,10,2);
    ellipse(this.x,this.y-10,40);
    
    //noStroke();
    fill(255,0,0)
    ellipse(this.x-5,this.y-5,10);
    ellipse(this.x+5,this.y-15,10);
    fill(255,0,0)
    beginShape();
    vertex(this.x-8, this.y-1);
    vertex(this.x-4, this.y+1);
    vertex(this.x+2, this.y+0);
    //vertex(this.x, this.y+3);
    vertex(this.x+11, this.y-11);
    vertex(this.x+10, this.y-17);
    vertex(this.x+8, this.y-19);
    //vertex(this.x+14, this.y-14);
    //vertex(this.x+6, this.y-20);
    //vertex(this.x, this.y);
    //vertex(this.x, this.y);
    //vertex(30, 75);
    endShape(CLOSE);
    fill(255);
    rect(this.x-20,this.y+85,10,20)
    rect(this.x-30,this.y+105,20,10)
    rect(this.x+20,this.y+85,10,20)
    rect(this.x+10,this.y+105,20,10)
    
    this.px = this.x;
    this.py = this.y;
    
  }
  move(){
    if(this.x<100){
      this.x+=100;
    }
    if(this.x>windowWidth-100){
      this.x-=100;
    }
    if(this.y>windowHeight-80){
      this.y-=80;
    }
    if(this.y<80){
      this.y+=80;
    }
    
    if (choice == 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    } 

  }
  click(){
    if(mouseX<this.px+50&&mouseX>this.px-50&&mouseY>this.py-85&&mouseY<this.py+85){
    this.x+=(-1)**n*random(100,200);
    this.y+=(-1)**n*random(150,200);
    }
  }
}