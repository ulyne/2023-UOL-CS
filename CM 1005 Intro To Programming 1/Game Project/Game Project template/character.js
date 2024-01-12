function drawGameCharIsLeftAndIsFalling()
{
    fill(0,255 ,0);
    ellipse(gameChar_x,gameChar_y-60,20,20);
    fill(128,0,0);
    rect(gameChar_x-20 ,gameChar_y-50,30,40);
    drawGamCharAnchorPoint();
}

function drawGameCharIsRightAndIsFalling()
{   
    fill(0,255 ,0);
    ellipse(gameChar_x,gameChar_y-60,20,20);
    fill(128,0,0);
    rect(gameChar_x-10,gameChar_y-50,30,40);
    drawGamCharAnchorPoint();
}
	
function drawGameCharIsLeft()
{
    fill(0,255 ,0);
    ellipse(gameChar_x-10,gameChar_y-60,20,20);
    fill(128,0,0);
    rect(gameChar_x-25 ,gameChar_y-50,30,50);
    drawGamCharAnchorPoint();
}
	
function drawGameCharIsRight()
{
    fill(0,255 ,0);
    ellipse(gameChar_x+10,gameChar_y-60,20,20);
    fill(128,0,0);
    rect(gameChar_x-5,gameChar_y-50,30,50);
    drawGamCharAnchorPoint();
}

function drawGameCharIsFallingOrIsPlummeting()
{
    fill(0,255 ,0);
    ellipse(gameChar_x,gameChar_y-60,20,20);
    fill(128,0,0);
    rect(gameChar_x-20 ,gameChar_y-50,40,40);
    drawGamCharAnchorPoint();
}

function drawGameCharStandingFront()
{
    fill(0,255 ,0);
    ellipse(gameChar_x,gameChar_y-60,20,20);
    fill(128,0,0);
    rect(gameChar_x-20 ,gameChar_y-50,40,50);
    drawGamCharAnchorPoint();
}

function drawGamCharAnchorPoint(){
    fill(255,0,0);
    ellipse(gameChar_x,gameChar_y,10,10);
}