var canvas; 

//code in setup runs once
function setup() {
  canvas = createCanvas(windowWidth, windowHeight); 
  background(255, 120, 180);
  rectMode(CENTER);
}

//runs over and over
//updates every frame
function draw() {
	//line and outline styles
	strokeWeight(10);
	stroke(255, 0, 0);

	//line requires 4 arguments
	//x1, y1, x2, y2
	line(20, 60, 700, 500);
 
	fill(66, 244, 140);
	//ellipse expecting 4 arguments 
  	ellipse(200, 400, mouseX, mouseY);

  	noStroke();
	fill(0, 20, 140);
 	rect(width/2, height/2, 100, 200);


 	//6 arguments
 	//x1, y1, x2, y2, x3, y3
 	//connects the dot to form triangle
 	triangle(600, 100, 700, 50, 750, 150);

 	//print(mouseX);
}

function windowResized(){

	canvas = createCanvas(windowWidth, windowHeight);
	background(255, 120, 180);
}






