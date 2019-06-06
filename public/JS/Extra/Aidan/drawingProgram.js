// Drawing by Aidan Metcalfe

// Click to draw

var bg = 255

var color;

var s = 5;

// Canvas

function setup() {

  canvas = createCanvas(1000, 500)

  canvas.parent("canvas")

  background(bg);

  strokeWeight(5);

  fill(0, 0, 0, 0);

  stroke("black");

  rect(0, 0, width, height);

}





// Pen

function draw() {

  strokeWeight(s);

}



// Drawing

function mouseDragged() {

  line(mouseX, mouseY, pmouseX, pmouseY);

}





function mousePressed() {

  line(mouseX, mouseY, pmouseX, pmouseY);

}



function bluepen() {

  stroke("blue");

}





function redpen() {

  stroke("red");

}





function greenpen() {

  stroke("green");

}





function whitepen() {

  stroke("white");

}





function blackpen() {

  stroke("black");

}





function yellowpen() {

  stroke("yellow");

}





function orangepen() {

  stroke("orange");

}





function erase() {

  stroke(bg);

}



function clearscreen() {

  background(bg);

  strokeWeight(5);

  fill(0, 0, 0, 0);

  stroke("black")

  rect(0, 0, width, height);

}



function pickcolor() {

	color = prompt("type color or its value here")

  stroke(color)

}





function pickbg() {

	bg = prompt("type color or its value here")

  background(bg)

}





function up() {

	if(s >= 100)

  	s = 100

  else

  	s += 5

}





function down() {

	if(s <= 5)

  	s = 5

  else

  	s -= 5

}
