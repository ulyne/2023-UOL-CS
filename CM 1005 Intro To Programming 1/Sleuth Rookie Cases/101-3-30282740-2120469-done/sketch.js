/*

Officer: 2120469
CaseNum: 101-3-30282740-2120469

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Crimson filled rectangle with a Fire Brick outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Dodger Blue filled
rectangle with a Medium Aquamarine outline around him.

Identify the man reading the newspaper by drawing a Goldenrod filled rectangle
with a Dark Magenta outline around him.

Identify the woman with the dog by drawing a Fire Brick filled rectangle with a
Red outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    //anna
    stroke(178,34,34);
    fill(220,20,60,100);
    rect(1215,30,185,380);
    
    //monocle
    fill(30,144,255,100);
    stroke(102,205,170);
    rect(690,150,140,175);
    
    
    //newspaper
    stroke(139,0,139);
    fill(218,165,32,100);
    rect(940,125,225,440);
    
    
    //dog-woman
    stroke(255,0,0);
    fill(178,34,34,100);
    rect(505,30,135,290);


	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
