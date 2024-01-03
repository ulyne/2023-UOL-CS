/*

Officer: 2120469
CaseNum: 303-3-69597442-2120469

Case 303 - The Case of the Crooked Attorney
Stage 4 - The Courthouse

Torvalds has his final safe in his courthouse chambers. Luckily there is a court case proceeding.
You can sneak into his chambers whilst he makes his closing statement.

Crack the safe by doing the following:

	When any key is pressed:
	- Use the 'random' function to produce random values ranging from 2 to 14.
	- Assign the output to Restricted_Box_CombA

	When the mouse button is pressed:
	- Use the 'map' function to scale mouseY to values ranging from 1 to 10.
	- Assign the output to Restricted_Box_CombB

	When any key is pressed:
	- Make Restricted_Box_CombC equal to the value of 'key'

	When the mouse button is released:
	- Use the 'map' function to scale mouseY to values ranging from 18 to 79.
	- Assign the output to Restricted_Box_CombD

	Whilst the mouse is moving:
	- Use the 'map' function to scale mouseX to values ranging from 15 to 80.
	- Assign the output to Restricted_Box_CombE

	When the mouse button is released:
	- Use the 'map' function to scale mouseX to values ranging from 20 to 74.
	- Assign the output to Restricted_Box_CombF



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- key, keyCode
	- random
	- map

*/

//declare the variables

var Restricted_Box_CombA;
var Restricted_Box_CombB;
var Restricted_Box_CombC;
var Restricted_Box_CombD;
var Restricted_Box_CombE;
var Restricted_Box_CombF;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Restricted_Box_CombA = 0;
	Restricted_Box_CombB = "";
	Restricted_Box_CombC = "";
	Restricted_Box_CombD = 0;
	Restricted_Box_CombE = 0;
	Restricted_Box_CombF = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function keyPressed()
{
    console.log("keyPressed");
    Restricted_Box_CombA = random(2,14);
    Restricted_Box_CombC = key;
}

function mousePressed()
{
    console.log("mousePressed");
    Restricted_Box_CombB = map(mouseY,0,512,1,10);
}

function mouseReleased()
{
    console.log("mouseReleased");
    Restricted_Box_CombD = map(mouseY,0,512,18,79);
    Restricted_Box_CombF = map(mouseX,0,512,20,74);
}

function mouseMoved()
{
    console.log("mouseMoved",mouseX,mouseY);
    Restricted_Box_CombE = map(mouseX,0,512,15,80);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dial
	push();
	translate(256,180);
	drawDial(170,Restricted_Box_CombA,20);
	pop();

	//Draw the spinners
	push();
	translate(206,280);
	drawSpinner(3, Restricted_Box_CombB);
	pop();

	push();
	translate(306,280);
	drawSpinner(3, Restricted_Box_CombC);
	pop();

	//Draw the levers
	push();
	translate(125,356);
	drawLever(Restricted_Box_CombD);
	pop();

	push();
	translate(250,356);
	drawLever(Restricted_Box_CombE);
	pop();

	push();
	translate(375,356);
	drawLever(Restricted_Box_CombF);
	pop();

}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}

function drawSpinner(numSpinners, val)
{
	var sw = 20;
	var ow = (sw + 5) * numSpinners + 5;
	stroke(0);
	fill(100);
	rect(-ow/2,0,ow,35);
	if(typeof(val) == "number")
	{
		val = floor(val).toString(); //convert to string
	}
	var d = numSpinners - val.length;

	for(var d = numSpinners - val.length; d > 0; d--)
	{
		val = "-" + val;
	}

	for(var i = 0; i < numSpinners; i++)
	{
		stroke(0);
		fill(255,255,200);
		rect(-ow/2 + i * (sw + 5) + 5,5,20,25);
		fill(0);
		noStroke();
		text(val[i],-ow/2 + sw/2 + i * (sw +5),25);
	}

}
