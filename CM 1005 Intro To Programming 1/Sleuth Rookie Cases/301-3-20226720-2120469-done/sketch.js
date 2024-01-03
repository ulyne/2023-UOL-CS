/*
The case of the Python Syndicate
Stage 4

Officer: 2120469
CaseNum: 301-3-20226720-2120469

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var pawel_karpinski_image;
var robbie_kray_image;
var rocky_kray_image;
var ada_lovelace_image;
var countess_hamilton_image;
var bones_karpinski_image;

var rocky_kray_obj;


//declare your new objects below
var pawel_karpinski_obj;
var robbie_kray_obj;
var ada_lovelace_obj; 
var countess_hamilton_obj;
var bones_karpinski_obj; 


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	ada_lovelace_image = loadImage("ada.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	rocky_kray_obj = {
		x: 701,
		y: 40,
		image: rocky_kray_image
	};



	//define your new objects below
    pawel_karpinski_obj = {
        x: 115,
        y: 40,
        image: pawel_karpinski_image
    }

    robbie_kray_obj = {
        x: 408,
        y: 40,
        image: robbie_kray_image
    }

    ada_lovelace_obj = {
        x: 115,
        y: 309,
        image: ada_lovelace_image
    }

    countess_hamilton_obj = {
        x: 408,
        y: 309,
        image: countess_hamilton_image
    }

    bones_karpinski_obj = {
        x: 701,
        y: 309,
        image: bones_karpinski_image
    }
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawel_karpinski_obj.image, pawel_karpinski_obj.x, pawel_karpinski_obj.y);
	image(robbie_kray_obj.image, robbie_kray_obj.x, robbie_kray_obj.y);
	image(rocky_kray_obj.image, rocky_kray_obj.x, rocky_kray_obj.y);
	image(ada_lovelace_obj.image, ada_lovelace_obj.x, ada_lovelace_obj.y);
	image(countess_hamilton_obj.image, countess_hamilton_obj.x, countess_hamilton_obj.y);
	image(bones_karpinski_obj.image, bones_karpinski_obj.x, bones_karpinski_obj.y);


}