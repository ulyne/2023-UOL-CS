/*
The case of the Python Syndicate
Stage 1

Officer: 2120469
CaseNum: 301-0-30910648-2120469

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var cecil_karpinski_img;
var robbie_kray_img;
var bones_karpinski_img;
var rocky_kray_img;
var countess_hamilton_img;
var ada_lovelace_img;



//declare your new variables below
var bones_karpinski_x_loc = 701;
var bones_karpinski_y_loc = 40;
var cecil_karpinski_x_loc = 115;
var cecil_karpinski_y_loc = 40;
var robbie_kray_x_loc = 408;
var robbie_kray_y_loc = 40;
var rocky_kray_x_loc = 115;
var rocky_kray_y_loc = 309;
var countess_hamilton_x_loc = 408;
var countess_hamilton_y_loc = 309;
var ada_lovelace_x_loc = 701;
var ada_lovelace_y_loc = 309;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	countess_hamilton_img = loadImage("countessHamilton.png");
	ada_lovelace_img = loadImage("ada.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(bones_karpinski_img, bones_karpinski_x_loc, bones_karpinski_y_loc);

	image(cecil_karpinski_img, cecil_karpinski_x_loc, cecil_karpinski_y_loc);
	image(robbie_kray_img, robbie_kray_x_loc, robbie_kray_y_loc);
	image(rocky_kray_img, rocky_kray_x_loc, rocky_kray_y_loc);
	image(countess_hamilton_img, countess_hamilton_x_loc, countess_hamilton_y_loc);
	image(ada_lovelace_img, ada_lovelace_x_loc, ada_lovelace_y_loc);

}