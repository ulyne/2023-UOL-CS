//Note: All the scene objects (e.g. mountain, clouds) are in scene.js.
//Refer to index.html, scene.js is included as part of the project

var gameChar_x;
var gameChar_y;
var gameChar_width;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var collectable;
var canyon;

function setup()
{
    createCanvas(1024, 576);
    floorPos_y = height * 3/4;
    gameChar_x = width/2;
    gameChar_y = floorPos_y;
    gameChar_width = 40;
    setupScene();//call the setupScene in scene.js

    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    
    collectable = {x_pos: 200, y_pos:floorPos_y-20, size: 40, isFound: false};
    canyon = {x_pos: 600, width: 100};
}

function draw()
{

    ///////////DRAWING CODE//////////

    background(100,155,255); //fill the sky blue


    noStroke();
    fill(0,155,0);
    rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

    //draw the canyon
    drawCanyon()
    
    //draw the clouds
    drawClouds();
    animateClouds();

    //draw the mountains
    drawMountains();

    //draw the trees
    drawTrees();
    
    //draw the collectable
    drawCollectable();

    //the game character
    if(isLeft && isFalling)
	{
		// add your jumping-left code
        drawGameCharIsLeftAndIsFalling();
	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        drawGameCharIsRightAndIsFalling();
	}
	else if(isLeft)
	{
		// add your walking left code
        drawGameCharIsLeft();
	}
	else if(isRight)
	{
		// add your walking right code
        drawGameCharIsRight();
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        drawGameCharIsFallingOrIsPlummeting();
	}
	else
	{
		// add your standing front facing code
        drawGameCharStandingFront();
	}

    ///////////INTERACTION CODE//////////
    //Put conditional statements to move the game character below here
    if(isPlummeting){ //same as isPlummeting==true
        gameChar_y += 10;
        return;
    }
    
    if(gameChar_y<floorPos_y){
        gameChar_y += 1;
        isFalling = true;
    }else{
        isFalling = false;
    }
    
    if(isLeft==true){
        gameChar_x-= 5;
    }
    else if(isRight==true){
        gameChar_x += 5;
    }
    
    //check if game character is in the range of the collectable
    checkIfGameCharInCollectableRange();
    
    //check if game character is over the canyon
    checkIfGameCharIsOverCanyon();
}

function checkIfGameCharIsOverCanyon(){
    //check if game char is on the floor    
    var cond1 = gameChar_y == floorPos_y
    //check if game char is from the left of canyon 
    var cond2 = gameChar_x-gameChar_width/2>(canyon.x_pos)
    //check if game char is from the right of canyon 
    var cond3 = gameChar_x+gameChar_width/2<(canyon.x_pos+canyon.width)
    
    //check if game character is over the canyon
    if(cond1 && cond2 && cond3){
        isPlummeting=true;
    }
}

function drawCanyon(){
    fill(0,0,0);
    rect(canyon.x_pos,floorPos_y,canyon.width,height-floorPos_y); 
    fill(255,0,0);
    ellipse(canyon.x_pos,floorPos_y,10,10);
}

function checkIfGameCharInCollectableRange(){
    var d = dist(gameChar_x,gameChar_y,collectable.x_pos,collectable.y_pos)
    if(d<30){
        collectable.isFound=true;
    }
}

function drawCollectable(){
    if(collectable.isFound==false){
        fill(197,179,88);
        rectMode(CENTER);
        rect(collectable.x_pos,collectable.y_pos,collectable.size,collectable.size);
        rectMode(CORNER);
        fill(255,0,0);
        ellipse(collectable.x_pos,collectable.y_pos,10,10)
    }
}

function keyPressed()
{
    // if statements to control the animation of the character when
    // keys are pressed.

    //open up the console to see how these work
    console.log("keyPressed: " + key);
    console.log("keyPressed: " + keyCode);
    
    if(keyCode == 37){
        console.log("left arrow");
        isLeft = true;
    }
    else if(keyCode == 39){
        console.log("right arrow");
        isRight = true;
    }
    else if(keyCode == 38){
        //ensure that the character only jump when it is touching the ground
        if(gameChar_y>=floorPos_y){
            console.log("up arrow");
            gameChar_y -= 100;
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
        console.log("left arrow");
        isLeft = false;
    }else if(keyCode == 39){
        console.log("right arrow");
        isRight = false;
    }
}
