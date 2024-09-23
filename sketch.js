function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220, 20, 120);

  rect(10, 10, 80);
  ellipse(200, 200, 100);
  
  rect(10, 100, 80, 40);
  ellipse(300, 200, 100, 150);
}
