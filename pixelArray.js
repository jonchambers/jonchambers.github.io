
let index

function setup(){
	createCanvas(500,500)
	pixelDensity(1)
background(51)
}


function draw(){

 fill(0)
ellipse(mouseX,  mouseY, 100, 100)
loadPixels()
let col = get()

print(col)

for(let y = 0; y < height; y++){
	for(let x = 0; x < width; x++){ 
		index = (x + y * width)*4
		//get(x, y) 

		// pixels[index + 0] = 0
		// pixels[index + 1] = 0
		// pixels[index + 2] = 0
		// pixels[index + 3] = 255 
		// if(pixels[index + 0] == 0 && pixels[index+1] == 0 && pixels[index+2] == 0){
		// 	print("black")
		// }
	}
}
//print(pixels.length)


updatePixels()
//print(get(40, 200))
// for(i=0; i<pixels.length; i++){
	

//  	}
}