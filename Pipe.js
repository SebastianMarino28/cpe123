var mytext = ""
var xP = 0
var yP = 0
var scaleP = 1
var xS = 2
var yS = 100
var scaleS = 0
var boo = false


//	myFont = loadFont('libraries/Parisienne.ttf');
//}

function setup(){
	createCanvas(800, 600);
}

function draw(){
	background(254, 241, 198);

	//drawMouse(mouseX, mouseY);
	//textFont(myFont);
	textSize(55);
	text("Ceci n'est pas une pipe.", 110, 500);
	//fill()
	//rect(60, 95, 200, 300, 100);
	//rect(60, 320, 340, 75);
push();
	smoke(xS, yS, scaleS)
		if (boo){
			yS  = yS - 1
		}
pop();	

push();
	pipe(xP,yP,scaleP)
pop();


}

function mousePressed(){
	loop();
}
function drawMouse(){
	textSize(20);
	fill(0);
	text(mouseX + "  , " + mouseY,50,50);

}
 
//function mousePressed(){
	//mytext +="vertex("+round(mouseX)+","+round(mouseY+620)+");"

//}

function pipe(xP, yP, scaleP){

push();
	let c1 = color(16,17,10)
//body
	noStroke();
	 beginShape();
	 fill(c1)

	 vertex(79,99)
	 vertex(77,116)
	 vertex(77,116)
	 vertex(70,238)
	 vertex(70,238)
	 vertex(91,342)
	 vertex(91,342)
	 vertex(137,396)
	 vertex(137,396)
	 vertex(193,417)
	 vertex(193,417)
	 vertex(277,415)
	 vertex(277,415)
	 vertex(379,370)
	 vertex(379,370)
	 vertex(464,293)
	 vertex(464,293)
	 vertex(526,224)
	 vertex(526,224)
	 vertex(575,177)
	 vertex(575,177)
	 vertex(641,145)
	 vertex(641,145)
	 vertex(696,132)
	 vertex(696,132)
	 vertex(726,132)
	 vertex(726,132)
	 vertex(741,132)
	 vertex(741,132)
	 vertex(726,99)
	 vertex(726,99)
	 vertex(659,100)
	 vertex(659,100)
	 vertex(601,105)
	 vertex(601,105)
	 vertex(545,121)
	 vertex(545,121)
	 vertex(492,144)
	 vertex(492,144)
	 vertex(451,169)
	 vertex(451,169)
	 vertex(411,199)
	 vertex(411,199)
	 vertex(376,224)
	 vertex(376,224)
	 vertex(348,245)
	 vertex(348,245)
	 vertex(320,263)
	 vertex(320,263)
	 vertex(290,277)
	 vertex(290,277)
	 vertex(273,279)
	 vertex(273,279)
	 vertex(271,251)
	 vertex(271,251)
	 vertex(272,228)
	 vertex(272,228)
	 vertex(272,225)
	 vertex(272,225)
	 vertex(271,188)
	 vertex(271,188)
	 vertex(268,151)
	 vertex(268,151)
	 vertex(263,120)
	 vertex(263,120)
	 vertex(261,100)
	 vertex(261,100)
	 vertex(82,99)
	 vertex(82,99)

	 endShape(CLOSE);

//secondary layer

	 beginShape();
	 fill(86,46,38)

	 vertex(79,99);
	 vertex(77,116);
	 vertex(77,116);
	 vertex(70,238);
	 vertex(70,238);
	 vertex(91,342);
	 vertex(91,342);
	 vertex(137,396);
	 vertex(137,396);
	 vertex(174,369);
	 vertex(174,369);
	 vertex(211,319);
	 vertex(211,319);
	 vertex(211,251);
	 vertex(211,251);
	 vertex(217,171);
	 vertex(217,171);
	 vertex(216,123);
	 vertex(216,123);
	 vertex(210,99);
	 

	 endShape(CLOSE);


	 beginShape();
	 fill('#956a4c')

	 vertex(90,99);
	 vertex(90,186);
	 vertex(87,257);
	 vertex(112,320);
	 vertex(145,284);
	 vertex(140,228);
	 vertex(139,170);
	 vertex(140,99);

	 endShape(CLOSE);

	 beginShape();
	 fill('#dab9af')

	 vertex(110,99);
	 vertex(105,186);
	 vertex(96,257);
	 vertex(115,311);
	 vertex(135,284);
	 vertex(131,228);
	 vertex(130,167);
	 vertex(129,99);

	 endShape(CLOSE);

	  endShape(CLOSE);

	 beginShape();
	 fill(86,46,38)

	 vertex(282,281);
	 vertex(271,303);
	 vertex(266,322);
	 vertex(279,340);
	 vertex(330,343);
	 vertex(503,219);
	 vertex(457,167);
	 vertex(427,189);
	 vertex(388,219);
	 vertex(355,247);
	 vertex(326,268);
	 vertex(293,280);
	 vertex(274,286);
	 vertex(416,248);

	 endShape(CLOSE);

	 beginShape();
	 fill('#dab9af')

	 vertex(734,122);
	 vertex(651,117);
	 vertex(582,124);
	 vertex(515,149);
	 vertex(438,195);
	 vertex(364,255);
	 vertex(280,292);
	 vertex(270,317);
	 vertex(286,333);
	 vertex(327,331);
	 vertex(367,305);
	 vertex(414,276);
	 vertex(457,237);
	 vertex(496,197);
	 vertex(535,160);
	 vertex(591,131);
	 vertex(634,125);
	 vertex(677,123);
	 vertex(706,125);
	 vertex(739,127);
	 
	 endShape(CLOSE);

	 beginShape();
	 fill('#c99980');

	 vertex(502,246);
	 vertex(515,235);
	 vertex(463,167);
	 vertex(453,177);
	 vertex(453,177);

	 endShape(CLOSE);

	 push();

	 fill(c1);

	 ellipse(744, 113, 40, 55)

	 pop();

	 push();

	 fill('#c5b092');

	 ellipse(170, 98, 185, 50)

	 pop();

	 push();

	 fill('#331e18');

	 ellipse(170, 98, 125, 15)

	 pop();


pop();

}

function smoke(xS, yS, scaleS){

	noStroke();
	fill(100)
	translate(xS,yS)

	ellipse(170,82,45,15)

	ellipse(170,57,90,30)

	ellipse(170,25,130,30)
}
function mousePressed(){
	if(mouseX < 800 && mouseY < 600){
		boo = true			
	}
}


