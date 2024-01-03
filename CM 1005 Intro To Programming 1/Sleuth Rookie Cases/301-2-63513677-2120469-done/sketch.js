/*
The case of the Python Syndicate
Stage 3


Officer: 2120469
CaseNum: 301-2-63513677-2120469

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Anna Karpinski has been declared and initialised
- Position each mugshot relative to Anna Karpinski
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Anna Karpinski object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Anna Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var robbie_kray_img;
var ada_lovelace_img;
var anna_karpinski_img;
var cecil_karpinski_img;
var rocky_kray_img;
var bones_karpinski_img;

var anna_karpinski_object;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbie_kray_img = loadImage("krayBrothers2.png");
	ada_lovelace_img = loadImage("ada.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	anna_karpinski_object = {
		x: 701,
		y: 40,
		image: anna_karpinski_img
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_object.image, anna_karpinski_object.x, anna_karpinski_object.y);

	image(robbie_kray_img, anna_karpinski_object.x-586, anna_karpinski_object.y);
	image(ada_lovelace_img, anna_karpinski_object.x-293, anna_karpinski_object.y);
	image(cecil_karpinski_img, anna_karpinski_object.x-586, anna_karpinski_object.y+269);
	image(rocky_kray_img, anna_karpinski_object.x-293, anna_karpinski_object.y+269);
	image(bones_karpinski_img, anna_karpinski_object.x, anna_karpinski_object.y+269);

}