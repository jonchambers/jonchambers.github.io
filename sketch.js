
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
}

//draw function runs at 60 frames per second
function draw() {
  background(187, 77, 209);




  stroke(random(0, 255), random(0, 255), random(0, 255))
  strokeWeight(10)
  
  fill(255,0,0)
  //noFill()
  ellipse(mouseX, mouseY, 100, 100)

   strokeWeight(20)
  
  //a line that goes to middle of screen
  line(0,0, mouseX, mouseY);
  
  //mouth of the character
  noStroke()
  fill(0,255,0)
  rect(400, 500, 50, 100)
  
  //the nose
  fill(0,0,255)
  triangle(200, 200, 250, 500, 50, 500)
  
  //eye
  stroke(255, 0, 180)
  strokeWeight(25)
  fill(0,255,255)
  rect(200, 250, 50, 50)
  
  print(mouseX, mouseY)

  ellipse(400, 600, 300, 300)
}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}










