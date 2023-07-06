let x, y, d; // set these to the coordinates
let off;
let pixelCount =0;
function setup(){
	createCanvas(300, 300)
pixelDensity(1)
background(51)
//print(pixels.length)


// for(let i = 0; i<pixels.length; i++){
	
// }
}
 
 


function draw(){

//fill(0)
//ellipse(mouseX, mouseY, 100,100)
loadPixels();
let d = pixelDensity();
let halfImage = 4 * (width * d) * (height * d);

for (let i = 0; i < halfImage; i += 4) {
  pixels[i] = 0;
  pixels[i + 1] = 0;
  pixels[i + 2] = 0; 
  pixels[i + 3] = 255;
   	// if (pixels[i] == 0 && pixels[i + 1] == 0 && pixels[i + 2] == 0){	
   	// 	//print('black')
 	// }
	// if(pixelCount == pixels.length/4){
	// 	print('all black')
	// }
	
}
// for(let i=0; i < pixels.length; i++){

// }
updatePixels(); 
print(pixels)
}