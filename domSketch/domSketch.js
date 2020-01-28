let canvas;
let button;
let selectMenu;
let checkBox;
let ads1;
let ads2;
let interactiveScene = false;
let checkBoxPaint;
let virus;

function preload(){
  ads1 = loadImage("images/adsOne.png");
  ads2 = loadImage("images/adsTwo.png");
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0, 0);

  background(255);


  button = createButton("Submit");
  button.mousePressed(trigger);
  button.position(20, 50);
  button.style('z-index', '2');

  selectMenu = createSelect();
  selectMenu.option('One');
  selectMenu.option('Two');
  selectMenu.position(40, 120);
  selectMenu.style('z-index', '2');

  checkBox = createCheckbox(false);
  checkBox.position(20, 300);
  checkBox.changed(trigger)
  checkBox.style("z-index", "2");
  imageMode(CENTER);

}

function trigger(){

  let val = selectMenu.value();
  if(val == "One" && checkBox.checked()){
    interactiveScene = false;
    background(255, 80, 120);
    image(ads1, width/2, height/2, width, height);

  } else if(val == "One"){
    interactiveScene = false;
    background(30, 44, 180);
    image(ads2, width/2, height/2, width, height);
  }

  if (val == "Two" && checkBox.checked()){
    interactiveScene = true;

  } else if(val == "Two"){
    interactiveScene = false;
    virus = createImg("images/virus.gif");
    //virus.hide();
    virus.position(400, 400);
  }

}

function checkBoxBrush(){

  checkBoxPaint = createCheckbox("Ahhhhhhhhhhhh", true);
  checkBoxPaint.position(mouseX, mouseY);
}

function draw(){
  if(interactiveScene == true){
    checkBoxBrush();
  }

}
