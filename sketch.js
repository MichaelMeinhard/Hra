let canvas, shrek, imgS, pozadi, wc, score;
let wcs = [];
let value = 0;
let scoreInterval;
//let music;

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
  wc = loadImage("./img/wc.png");
  wc1 = loadImage("./img/wc1.png");
  //music = loadSound("./sound/AllStar.mp3");
}

class Score{
  constructor(){
    this.x = 50
    this.y = 50
  }

  draw(){
    textSize(32);
    text(`Score: ${value}`, 50, 50);
    fill(250)
  }

  count(){
    value = Math.floor((frameCount - 200)/160);
  }
}

class Shrek {
  constructor(x, y) {
    this.x = x;
    this.y = height / 2;
  }
  draw() {
    push();
    //square(80, this.y /2 + 25, 50);
    //noFill();
    image(imgS.get(0, 0, 50, 50), 80, this.y + 25);
    pop();
  }

  update() {
    this.gravity = 1;
    this.velocity = 2;
    this.velocity += this.gravity;
    this.y += this.velocity;
    //console.log(this.y);
    if (this.y + 65 > height) {
      this.y = height - 65;
    }
    if (this.y < -25) {
      this.y = -25;
    }
  }

  move() {
    if (keyIsDown(32)) {
      ost.play();
      this.y -= 15;
      //console.log("SPACE")
    }
  }
}

class Wc{
  constructor(){
    this.space = 175;
    this.top = random(height / 6, 3 / 4 * height);
    this.bot = height - (this.top + this.space);
    this.x = width;
    this.w = 120;
    this.speed = 3;
  }

  draw(){
    push();
    if(this.top + this.bot > 550){

    }
    image(wc1, this.x, 0, this.w, this.top);
    image(wc, this.x, height-this.bot, this.w, this.bot);
    
    pop();
  }

  update(){
    this.x -=this.speed;
  }
}

/*function spawn(){
  let width = 120;
  this.top = random(height/2);
  this.bot = random(height/2);
  this.x = width;
  this.w = 120;
}*/


function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function setup() {
  canvas = createCanvas(1100, 650);
  
  score = new Score(50, 50);
  //music.play();
  canvas.parent("canvas");
  shrek = new Shrek(80, height / 2 + 25);
  wcs.push(new Wc());
}

function draw() {
  image(pozadi, 0, 0);
  shrek.move();
  shrek.update();
  shrek.draw(); 

  if (frameCount % 160 == 0){
    wcs.push(new Wc());
  }

  for (let i= wcs.length -1; i >= 0; i--){
    wcs[i].draw();
    wcs[i].update();
    if (wcs[i].x + 120 < 0){
      wcs.splice(i, 1);
    }
  }

  score.draw();
  setTimeout(score.count, 5000)
}
