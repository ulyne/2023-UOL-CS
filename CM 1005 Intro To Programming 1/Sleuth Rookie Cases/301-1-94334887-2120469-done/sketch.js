/*
The case of the Python Syndicate
Stage 2


Officer: 2120469
CaseNum: 301-1-94334887-2120469

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Anna Karpinski

- The variables for Anna Karpinski have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Anna Karpinski
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Anna Karpinski variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Anna Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var bonesKarpinskiImage;
var countessHamiltonImage;
var pawelKarpinskiImage;
var cecilKarpinskiImage;
var annaKarpinskiImage;
var adaLovelaceImage;


var annaKarpinskiXCoord = 408;
var annaKarpinskiYCoord = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	adaLovelaceImage = loadImage("ada.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(annaKarpinskiImage, annaKarpinskiXCoord, annaKarpinskiYCoord);

	image(bonesKarpinskiImage, annaKarpinskiXCoord-293, annaKarpinskiYCoord-269);
	image(countessHamiltonImage, annaKarpinskiXCoord, annaKarpinskiYCoord-269);
	image(pawelKarpinskiImage, annaKarpinskiXCoord+293, annaKarpinskiYCoord-269);
	image(cecilKarpinskiImage, annaKarpinskiXCoord-293, annaKarpinskiYCoord);
	image(adaLovelaceImage, annaKarpinskiXCoord+293, annaKarpinskiYCoord);

}