//object that stores our Furby image
let furby;

//furby position variables
let furbyX;
let furbyY;

//furby speed variables
let furbyXspeed;
let furbyYspeed;

//score variable
let score = 0;

//variable to check mouse and furby collision
let mouseCollide;

//boolean can be either true or false
let endScreen = false;
let beginBool = true;

function preload(){

  //furby image is loaded in the furby object
  furby = loadImage("images/furby.png");

}
function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);

  //furby position
  furbyX = random(25, width-25);
  furbyY = random(25, height-25);

  //furby speed
  furbyXspeed = 2;
  furbyYspeed = 2;

}

function draw() {

  if(beginBool == true){
    beginGame();
  }
  if(endScreen == true){
    //trigger this custom function
    endScreenFunction();
  }
}

function beginGame(){
  mouseCollide = dist(mouseX, mouseY, furbyX, furbyY);
  //print(mouseCollide);
  noCursor();
  background(40, 100, 203);

  textSize(30);
  textAlign(CENTER);
  fill(0);
  //text requires the text and x ,y position
  text("Tag The Furby", width/2, 40);
  textSize(25);
  fill(random(255), random(255), random(255));
  text("Score: " + score + " WOWOWOW!", width/2, 80);

  //change the position of furby by furby
  //speed variables. Updates every frame
  furbyX = furbyX + furbyXspeed;
  furbyY = furbyY + furbyYspeed;

  //checking if the furby as reached the
  //edges of our canvas
  if(furbyX >= width-25 || furbyX <= 25){
    furbyXspeed = furbyXspeed * -1;
  }

  if(furbyY >= height-25 || furbyY <= 25){
    furbyYspeed = furbyYspeed * -1;
  }

  //animated furby
  image(furby, furbyX, furbyY, 50, 50);

  //furby cursor
  image(furby, mouseX, mouseY, 30, 30);

  //check collision
  //if collided, add to score and randomly
  //place furby, and add to speed
  if(mouseCollide < 15){
    score++;
    furbyX = random(25, width-25);
    furbyY = random(25, height-25);
    furbyYspeed = furbyYspeed * 1.2;
    furbyXspeed = furbyXspeed * 1.2;
  }

  if(score == 10){
    endScreen = true;
    beginBool = false;
  }
}


function endScreenFunction(){
  //background(255);
  text("YOU WIN!!!!", width/2, 40);
  image(furby, mouseX, mouseY, mouseX, mouseY);

}


function mouseDragged(){
  //image(furby, mouseX, mouseY, 70,70);
  line(mouseX, mouseY, pmouseX, pmouseY);
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

}
