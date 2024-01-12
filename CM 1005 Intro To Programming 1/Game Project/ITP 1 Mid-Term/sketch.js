/*

The Game Project

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
var mountains;
var clouds;

var trees_x;
var treesPos_y;

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
    mountains = [{x_pos: 50, y_pos: floorPos_y-175, height: 350, width: 100},
                 {x_pos: 150,y_pos:floorPos_y-75, height: 150, width: 50},
                 {x_pos: 300,y_pos:floorPos_y-125, height: 250, width: 200}];
    clouds = [{x_pos: 100, y_pos: 100},
              {x_pos:250, y_pos: 150},
              {x_pos:500, y_pos: 80}];
    
    trees_x = [100,500,900,1150];
    treesPos_y = floorPos_y;
    
}

function draw()
{

	///////////DRAWING CODE//////////
	background(100,155,255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
    fill(0,0,0);
    rect(canyon.x_pos, floorPos_y, canyon.width, height-floorPos_y);
    fill(255,0,0);
    ellipse(canyon.x_pos,floorPos_y,10,10);
    
    //draw the collectable
    if (collectable.isFound == false){
        //enter the drawing code for collectable
        fill(255,0,0);
        ellipse(collectable.x_pos,collectable.y_pos,10,10);
    }
    //draw the trees
    for (var i = 0; i < trees_x.length; i++){
        fill(100,50,0);
        rect(trees_x[i] - 25,-150 + treesPos_y,50,150);
        fill(0,100,0);
        triangle(
            trees_x[i]-75, treesPos_y-150,
            trees_x[i],treesPos_y-300,
            trees_x[i]+75, treesPos_y-150
        );
    }
    //draw the clouds
    for (var i = 0; i < clouds.length; i++){
        fill(255);
        ellipse(clouds[i].x_pos, clouds[i].y_pos, 84, 84);
        ellipse(clouds[i].x_pos-40, clouds[i].y_pos, 50, 50);
        ellipse(clouds[i].x_pos+40, clouds[i].y_pos, 50, 50);
        fill(255,0,0);
        ellipse(clouds[i].x_pos,clouds[i].y_pos,10,10)
    }
    //draw the mountains
    for (var i=0; i < mountains.length; i++){
        var x1 = mountains[i].x_pos - mountains[i].width/2;
        var y1 = mountains[i].y_pos + mountains[i].height/2;
        var x2 = mountains[i].x_pos;
        var y2 = mountains[i].y_pos - mountains[i].height/2;
        var x3 = mountains[i].x_pos + mountains[i].width/2;
        var y3 = mountains[i].y_pos + mountains[i].height/2;
        fill(130,108,52);
        triangle(x1,y1,x2,y2,x3,y3);
        fill(255,0,0);
        ellipse(mountains[i].x_pos, mountains[i].y_pos, 10,10);
    }
    

    /*
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
    */

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    if((gameChar_y == floorPos_y) && (gameChar_x-gameChar_width/2>(canyon.x_pos)) && gameChar_x + gameChar_width/2<(canyon.x_pos + canyon.width)){
        isPlummeting = true;
    }
    
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
