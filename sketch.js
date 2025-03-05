function preload() {
	baggrund = loadImage('baggrund.png');
  }

function setup(){
	createCanvas(1800, 900);
	background(baggrund)
}

function draw(){
strokeWeight(10)
line(200, 700, 250, 870) //højre ben
line(200, 700, 150, 870) //venstreben 
line(200, 500, 200, 700) //krop
fill(255, 191, 117)
circle(200, 450, 150) //hoved

//selve armen!!
line(200, 550, 350, 500)


}
