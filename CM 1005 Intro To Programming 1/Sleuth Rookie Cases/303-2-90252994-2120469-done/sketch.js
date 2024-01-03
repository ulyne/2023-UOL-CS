/*

Officer: 2120469
CaseNum: 303-2-90252994-2120469

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is moving: (done)
	- Make hiddenBoxCode_a equal to the value of mouseY
	- Use the 'max' function to prevent hiddenBoxCode_a from falling below 2

	When the mouse button is released: (done)
	- Increment hiddenBoxCode_b by 2
	- Use the 'constrain' function to prevent hiddenBoxCode_b from falling below 2 and going above 9

	Whilst the mouse is being dragged: (done)
	- Make hiddenBoxCode_c equal to the value of mouseY
	- Use the 'constrain' function to prevent hiddenBoxCode_c from falling below 1 and going above 14

	When the mouse button is pressed: (done)
	- Increment hiddenBoxCode_d by 3
	- Use the 'constrain' function to prevent hiddenBoxCode_d from falling below 1 and going above 10

	When the mouse button is released: (done)
	- Make hiddenBoxCode_e equal to the value of mouseX
	- Use the 'max' function to prevent hiddenBoxCode_e from falling below 18



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var hiddenBoxCode_a;
var hiddenBoxCode_b;
var hiddenBoxCode_c;
var hiddenBoxCode_d;
var hiddenBoxCode_e;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	hiddenBoxCode_a = 0;
	hiddenBoxCode_b = 0;
	hiddenBoxCode_c = 0;
	hiddenBoxCode_d = 0;
	hiddenBoxCode_e = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mouseMoved()
{
    console.log("mouseMoved", mouseX, mouseY);
    hiddenBoxCode_a = max(2,mouseY);
}

function mouseReleased()
{
    console.log("mouseReleased")
    hiddenBoxCode_b = constrain(hiddenBoxCode_b += 2,2,9)
    hiddenBoxCode_e = max(mouseX,18);
}

function mouseDragged()
{
    console.log("mouseDragged", mouseX, mouseY);
    hiddenBoxCode_c = constrain(mouseY,1,14);
}

function mousePressed()
{
    console.log("mousePressed");
    hiddenBoxCode_d = constrain(hiddenBoxCode_d+=3,1,10);
}


///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,hiddenBoxCode_a, 21);
	pop();

	push();
	translate(120,380);
	drawDial(140,hiddenBoxCode_b, 13);
	pop();

	push();
	translate(280,170);
	drawDial(140,hiddenBoxCode_c, 17);
	pop();

	push();
	translate(280,380);
	drawDial(140,hiddenBoxCode_d, 15);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(hiddenBoxCode_e);
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
