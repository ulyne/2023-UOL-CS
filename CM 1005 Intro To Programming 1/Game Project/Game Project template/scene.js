var mountains;
var trees;
var clouds;

function setupScene()
{
    var tree1 = {pos_x:width/6,pos_y:floorPos_y-50};
    trees=[tree1,
           {pos_x:width/4,pos_y:floorPos_y-50},
           {pos_x:width/8,pos_y:floorPos_y-50}];
    
    clouds=[{pos_x:random(10,width),pos_y:random(20,100),size:random(50,80)}, //index 0
            {pos_x:random(10,width),pos_y:random(100,200),size:random(50,80)}, //index 1
            {pos_x:random(10,width),pos_y:random(200,250),size:random(50,80)}];//index 2
    
    
    mountains = [{pos_x:300,pos_y:floorPos_y-125,height:250,width:100},
                 {pos_x:150,pos_y:floorPos_y-75,height:150,width:50},
                 {pos_x:50,pos_y:floorPos_y-175,height:350,width:200}
                ];
}

function animateClouds(){
    clouds[0].pos_x = clouds[0].pos_x + 1; 
    clouds[1].pos_x = clouds[1].pos_x + 1;
    clouds[2].pos_x = clouds[2].pos_x + 1;
}

function drawClouds(){
    drawCloud(clouds[0]);
    drawCloud(clouds[1]);
    drawCloud(clouds[2]);
}

function drawCloud(t_cloud){
    fill(255);
    //anchor point
    ellipse(t_cloud.pos_x,t_cloud.pos_y,t_cloud.size*1.2,t_cloud.size*1.2);
    ellipse(t_cloud.pos_x-40,t_cloud.pos_y,t_cloud.size,t_cloud.size);
    ellipse(t_cloud.pos_x+40,t_cloud.pos_y,t_cloud.size,t_cloud.size);
    //anchor point
    fill(255,0,0);
    ellipse(t_cloud.pos_x,t_cloud.pos_y,10,10);
}

function drawTrees(){

    drawTree(trees[0]);
    drawTree(trees[1]);
    drawTree(trees[2]);
}

function drawTree(t_tree){
    noStroke();
    //tree trunk
    fill(120,100,40);
    rectMode(CENTER);
    //leave at least one tree point without
    //adding of substracting values from.
    rect(t_tree.pos_x, t_tree.pos_y,40,100);
    rectMode(CORNER);//setback to default mode
    //tree leaves
    fill(0,155,0);
    var x1 = t_tree.pos_x-80;
    var y1 = t_tree.pos_y-50;
    var x2 = t_tree.pos_x;
    var y2 = t_tree.pos_y-150;
    var x3 = t_tree.pos_x+80;
    var y3 = t_tree.pos_y-50;
    triangle(x1,y1,x2,y2,x3,y3);
    //anchor point
    fill(255,0,0);
    ellipse(t_tree.pos_x, t_tree.pos_y,10,10);
}

function drawMountains(){
  
    //we will learn how to use a for loop later
    //to make it more efficient
    drawMountain(mountains[0]);
    drawMountain(mountains[1]);
    drawMountain(mountains[2]);
}

function drawMountain(t_mountain){
    var x1 = t_mountain.pos_x - t_mountain.width/2;
    var y1 = t_mountain.pos_y + t_mountain.height/2;
    var x2 = t_mountain.pos_x;
    var y2 = t_mountain.pos_y - t_mountain.height/2;
    var x3 = t_mountain.pos_x + t_mountain.width/2;
    var y3 = t_mountain.pos_y + t_mountain.height/2;
    fill(130,108,52);
    triangle(x1, y1, x2, y2, x3, y3);
    fill(255,0,0);
    ellipse(t_mountain.pos_x, t_mountain.pos_y ,10,10);
}

function drawGround(){
    noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
}
