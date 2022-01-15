let canvas, shrek, imgS, pozadi;

/*this.gravity = 1;
this.velocity = 0;

this.update = function(){
  this.velocity += this.gravity;
  this.y += this.velocity;
  }
*/

function preload() {
  imgS = loadImage("./img/shrek.png");
  pozadi = loadImage("./img/pozadi.jpg");
}


class Shrek{
  constructor(x, y){
    this.x = x;
    this.y = width/2;
  }
  draw(){
    push();
    //square(80, this.y /2 + 25, 50);
    //noFill();
    image(imgS.get(0,0, 50, 50), 80, this.y / 2 + 25);
    pop();
  }

  update(){
  this.gravity = 1;
  this.velocity = 0;
  this.velocity += this.gravity;
  this.y += this.velocity;
  }
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function setup() {
  canvas = createCanvas(1100, 650);
  canvas.parent("canvas");
  shrek = new Shrek(80, this.y / 2 + 25);
}

function draw() {
  image(pozadi, 0, 0);
  shrek.update();
  shrek.draw();
}
