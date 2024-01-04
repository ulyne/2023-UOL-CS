/*

The Game Project

Week 3

Game interaction

*/

//character initialisation 
var gameChar_x;
var gameChar_y;
var floorPos_y;
var gameChar_width;

//initalised as according to the instructions in Game Project 3a
var isLeft;
var isRight;
var isFalling;
var isPlummeting;

//interactable object initialisation 
var collectable;
var dist_from_collectable;
var canyon;

var trees_x;

function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    gameChar_width = 40;
    
    //instructions from Game Project 3a
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    
    //need to update positions for collectables and canyon and delete this comment
    collectable = {x_pos: 200, y_pos: floorPos_y-10, size: 40, isFound: false};
    canyon = {x_pos: 600, width: 100};
    trees_x = [];
    
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
    
    //draw the collectable
    if (collectable.isFound == false){
        //enter the drawing code for collectable
    }
    
    //draw the trees
    
    //draw the clouds
    
    //draw the mountains
    

	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code

	}
	else if(isLeft)
	{
		// add your walking left code

	}
	else if(isRight)
	{
		// add your walking right code

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code

	}
	else
	{
		// add your standing front facing code

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    if(isPlummeting){
        gameChar_y += 20;
    }
    
    if(gameChar_y < floorPos_y){
        gameChar_y += 1;
        isFalling = true;
    }else{
        isFalling = false;
    }
    
    if(isLeft ==  true){
        gameChar_x -= 5;
    }else if(isRight == true){
        gameChar_x == 5;
    }    

    dist_from_collectable = dist(gameChar_x,gameChar_y,collectable.x_pos,collectable.y_pos);
    if (dist_from_collectable < 30){
        collectable.isFound = true;
    }
    
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
    
    //if else statements to determine direction that game character is moving towards
    if(keyCode == 37){
        console.log("left arrow key");
        isLeft = true;
    }else if(keyCode == 39){
        console.log("right arrow key");
        isRight = true;
    }else if(keyCode == 38){
        if(gameChar_y >= floorPos_y){ //checking if game character is on the ground
            console.log("up arrow key");
            gameChar_y -= 50;
        }
    }
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
    
    if(keyCode == 37){
        console.log("left arrow key");
        isLeft = false;
    }else if(keyCode == 39){
        console.log("right arrow key");
        isRight = false;
    }
    
}
