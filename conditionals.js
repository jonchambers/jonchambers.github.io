let ellipseX = 300;
let furby;

function preload(){
	furby = loadImage('furby.png')
}

function setup(){

	createCanvas(windowWidth, windowHeight)
	textAlign(CENTER, CENTER);
	background(187, 77, 209);

	for(let i = 0; i < 100; i++){
		ellipse(random(windowWidth), random(windowHeight), 20, 20)
	}
	imageMode(CENTER)
	noCursor()

}

function draw(){

	for(let i = 0; i < windowWidth; i=i+10){
		print(i)
		line(i, 0, i, windowHeight)
	}

	for(let i = 0; i < windowHeight; i=i+10){
		line(0, windowHeight/2, windowWidth, i)
	}

	textSize(40)
	text('Jon', 200, 200);

	image(furby, mouseX, mouseY, 30, 30 )

	//ellipse(mouseX, mouseY, 100, 100)

	print(ellipseX);

}

function mouseClicked(){
	print("click")
	
	if(ellipseX == 300){
		ellipseX = 800
	}

	if(ellipseX == 800){
		ellipseX = 300
	}
}













