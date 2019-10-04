var scaleBC =1;
var xBC = 247;
var yBC = 438;

function setup() {
	createCanvas(400, 500);
}

function draw() { 
	background(255);
//2nd backdrop
	fill(118, 177, 242);
	strokeWeight(0);
	rect(25, 115, 350, 400);

//ground_1
	fill(119, 134, 64);
	rect(25, 490, 350, 10);
//sidewalk
	fill(255);
	rect(25, 450, 350, 40);
//ground_2
	fill(119, 134, 64);
	rect(25, 430, 350, 30);

//title
	fill(247,98,139);
	textSize(30);
//find a different font
	textFont("Verdana");
	text("UNA", 100, 50);
// make bolder
	push();
	textStyle(BOLD);
	textSize(45);
	text('FUGA', 125, 100);
	pop();

//trees
	//trunk
		fill(255, 246, 244);
		rect(50, 300, 6, 135);
		stroke(0);
		strokeWeight(2);
		line(50, 360, 53, 360);
		line(56, 380, 52, 380);
		line(50, 370,52, 370);
		strokeWeight(1);
		line(50, 330,  54, 330);
		line(56, 420, 51, 420);
		line(50,  410, 52, 410);
		line(50, 400, 54, 400);
		line(50, 393, 53, 393);
		line(56, 310, 53,  310);
		line(50, 350, 52, 350);
		line(50, 340, 53, 340);
		tree(53, 250);

	//trunk2
		strokeWeight(0);
		fill(255, 246, 244);
		rect(175, 300, 6, 135);
		stroke(0);
		strokeWeight(2);
		line(175, 420, 178, 420);
		line(175, 390, 179, 390);
		line(181, 350, 177, 350);
		strokeWeight(1);
		line(175, 370, 177, 370);
		line(175, 400, 178, 400);
		line(181, 355, 177, 355);
		line(181, 375, 176,  375);
		line(175, 310, 178, 310);
		line(175, 320, 177, 320);
		line(181, 335, 178, 335);
		tree(178, 250);

	//trunk3
		fill(255, 246, 244);
		strokeWeight(0);
		rect(300, 300, 6,  135);
		stroke(0);
		strokeWeight(2);
		line(306, 360, 304, 360);
		line(306, 375, 302, 375);
		line(300, 355, 303, 355);
		line(300, 330, 304, 330);
		strokeWeight(1);
		line(300, 430, 303, 430);
		line(300, 390, 303, 390);
		line(306, 410, 302, 410);
		line(306, 380, 303, 380);
		line(300, 320, 304, 320);
		line(300, 345, 302, 345);
		line(306, 310, 304, 310);
		tree(303, 250);

//extra tree
	tree(390, 250);

	fill(255);
	noStroke();
	rect(0, 215, 25, 80 );
	rect(375, 75, 375, 300);

	biker(xBC, yBC);

}

function tree(x, y){
	push();
	translate(x, y);
	noStroke();
	fill(111, 125, 58);
	triangle(-20, -94, -30, 0, 24, -30);
	ellipse(0,0, 60, 100);
	pop();


}


function drawMouse(){
	textSize(30);
	fill(0);
	text(mouseX + "  , " + mouseY,200,200);

}

function biker(xBC,yBC, scaleBC){
push();
	translate(xBC,yBC);
	noStroke();

	//wheel
	strokeWeight(2);
	stroke(0);
	strokeCap(ROUND);
	noFill();
	ellipse(-4,28,20,20);
	ellipse(35, 28, 20, 20);

	//right leg
	push();
		noStroke();
		rotate(radians(-10));
		fill(94, 40, 116);
		rect(2, -2, 4, 25);
		fill(255, 232, 210);
		rect(2, 20, 4, 13);
	pop();
	
	//right foot
	push();
		fill(83, 83, 84);
		noStroke();
		rect(7, 30, 10, 5, 30);
	pop();

		//frame
		strokeCap(SQUARE);
		stroke(119, 186, 231);
		triangle(-4, 28, 4, 8, 15, 29);
		triangle(5, 7, 28, 7, 16, 28.5);
		line(27, -4, 35, 28);

		//seat
		stroke(255, 253, 251);
		line(5, 6, 3, -1);
		stroke(0,0,0);
		strokeWeight(3);
		line(-1, 0, 3, -2);
		strokeWeight(2);
		line(3, -1, 7, -2);

		//handles
		arc(29, -1, 3, 5, radians(225), radians(90), false);
		arc(27, -2, 3, 5,  radians(225), radians(90), false);

		//pants
		noStroke();
		fill(94, 40, 116);
	push();
		rotate(radians(11));
		rect(1, -12, 7, 10, 7);
	pop();
		
		//thigh
		fill(94, 40, 116);
		rect(5, -3, 15, 5, 20);

		//torso/ arms
	push();
		fill(123, 136, 67);
		rotate(radians(25));
		rect(-2, -24, 8, 15, 7);
		fill(102,36,46);
		rotate(radians(15));
		rect(-1, -22, 20, 3, 5);
	pop();

	//head
		fill(102, 36, 46);
		ellipse(14, -22, 9, 8);

	//hat
	push();
		fill(255, 232, 210);
		rotate(radians(16));
		ellipse(8, -28, 8, 4);
		stroke(255, 253, 251);
		strokeWeight(1);
		line(11, -28, 14, -28);
	pop();

	//left leg
	push();
		noStroke(0);
		rotate(radians(20));
		fill(94, 40, 116);
		rect(15, -8, 5, 14, 10);
		fill(255,232, 210);
		rect(15, 2, 5, 8);
	pop();

	//left shoe
	push();
		rotate(radians(180));
		noStroke();
		fill(83, 83, 84);
		rect(-20, -17, 10, 5, 30);
	pop();

pop();
}



