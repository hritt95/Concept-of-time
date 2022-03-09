let clockFont;
let cx, cy;
let secondHand;
let minuteHand;
let hourHand;
let clockSize;

function setup() {
  createCanvas(displayWidth, displayHeight);
  stroke(255);
  let radius = width / 4;
  secondHand = radius * 0.71;
  minuteHand = radius * 0.6;
  hourHand = radius * 0.5;
  clockSize = radius * 1.7;

  cx = width / 2;
  cy = height / 2;

  clockFont = loadFont("digital-7.ttf");
}

function clock() {
  fill(0);
  textFont(clockFont);
  textAlign(CENTER, CENTER);
  let Hour = hour();
  let min = minute();
  let secs = second();
  let noon = Hour >= 12 ? " PM" : " AM"
  if (min < 10) {
    min = "0" + min
    Hour %= 12
  }
  if (secs < 10){
    secs ="0" + secs
  }
if (Hour==0){
Hour = 12
}
push()
textSize(60);

  text(Hour + ":" + min + ":" + secs + noon, width / 2, 50);
pop()
}

function draw() {
  background(147, 150, 194);
  noStroke();
  clock();
  fill(209, 178, 190);
  ellipse(cx, cy, clockSize + 45, clockSize + 45);
  fill(190, 213, 232);
  ellipse(cx, cy, clockSize, clockSize)

  let sec = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let min = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  stroke(255);
  // secondHand//
  stroke(1);
  line(cx, cy, cx + cos(sec) * secondHand, cy + sin(sec) * secondHand);
  //minuteHand//
  strokeWeight(4);
  line(cx, cy, cx + cos(min) * minuteHand, cy + sin(min) * minuteHand);
  //hourHand//
  strokeWeight(6);
  line(cx, cy, cx + cos(h) * hourHand, cy + sin(h) * hourHand);
  strokeWeight(2);

  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = cx + cos(angle) * secondHand;
    let y = cy + sin(angle) * secondHand;
    //vertex(x, y);
    push()
    textSize(18);
    textAlign(CENTER);
    if (a == 0) {
      text(3, x, y);
    } else if(a== 30){
      text(4,x,y);
    } else if(a == 60){
      text(5,x,y);
    }
    else if (a == 90) {
      text(6, x, y);
    } else if(a ==120){
      text(7,x,y);
    }
    else if(a==150){
      text(8, x,y);
    }
    else if (a == 180) {
      text(9, x, y);
    } else if(a== 210){
      text(10,x,y);
    } else if (a== 240){
      text(11,x,y);
    }
    else if (a == 270) {
      text(12, x, y);
    } else if(a == 300){
      text(1,x,y);
    } else if(a== 330){
      text(2,x,y);
    }
    else {
      vertex(x, y, );
    }
    pop()
  }
  endShape();
}