//variables for the position and speed of the game object
let xPos 
let yPos

let xSpeed = 2
let ySpeed = 2

//game object
let furby

//calculate mouse distance from furby
let mouseDist

//score variable
let score = 0

let startBool = true
let winBool = false

let rotation = 0

function preload(){
	furby = loadImage('furby.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)

	xPos = random(16, windowWidth -16)
	yPos = random(16, windowHeight -16)

	imageMode(CENTER)
	textAlign(CENTER)
}


function draw(){
	
	if(startBool == true){
		start()
	}

	if(winBool == true){
		winScreen()
	}
	
}

function winScreen(){
	background(200, 30, 100)
	fill(255)
	textSize(40)
	text("You Won!!!!", windowWidth/2, 50)

	rotation++
	

	push()
	translate(windowWidth/2, windowHeight/2)
	rotate(radians(rotation))
	image(furby, 0, 0)
	pop()
}

function start(){
	background(0)
	fill(255)
	textSize(40)
	text("Your score is: " + score, windowWidth/2, 50)

	image(furby, xPos, yPos, 30, 30)

	//update teh x and y position every frame
	xPos = xPos + xSpeed
	yPos = yPos + ySpeed

	//if furby hits edge of screen, reverse speed
	if(xPos >= windowWidth - 15 || xPos <= 15){
		xSpeed = xSpeed * -1
	}

	if(yPos >= windowHeight -15 || yPos <= 15){
		ySpeed = ySpeed * -1
	}

	mouseDist = dist(mouseX, mouseY, xPos, yPos)

	if(mouseDist <= 20){
		xPos = random(16, windowWidth -16)
		yPos = random(16, windowHeight -16)
		xSpeed = xSpeed * 1.2
		ySpeed = ySpeed * 1.2
		score++

	}

	if(score == 1){
		startBool = false
		winBool = true
	}


}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}








