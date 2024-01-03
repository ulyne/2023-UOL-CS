/*

Officer: 2120469
CaseNum: 101-2-68327691-2120469

Case 101 - The Case of Anna Lovelace
Stage 3 - The Docks

You’ve followed Anna down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Anna by drawing a Medium Blue filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Brown filled
rectangle around him.

Identify the man in the striped top by drawing a Crimson filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noStroke();
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    //Anna
    fill(0,0,205,100);
    rect(1353,57,190,375);
    
    //heavy-set man
    fill(165,42,42,100);
    rect(1225,460,620,660)
    
    //striped top
    fill(220,20,60,100);
    rect(205,240,205,560);


	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();

}
