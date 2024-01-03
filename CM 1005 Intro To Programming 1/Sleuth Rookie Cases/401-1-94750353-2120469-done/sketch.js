/*

Officer: 2120469
CaseNum: 401-1-94750353-2120469

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- When SnakeVenom dips below 0.54, try decreasing aspirin by 0.01
	- When ricin dips below 0.39, raise aspirin by 0.04
	- When novichok goes above 0.54, reduce insulin by 0.05
	- If ricin goes above 0.41 and hemlock goes above 0.41, increment insulin by 0.05
	- When hemlock dips below 0.25, try decreasing betaBlocker by 0.01
	- When SnakeVenom dips below 0.72 or novichok goes above 0.73, try increasing betaBlocker by 0.04
	- When SnakeVenom dips below 0.39 and ricin dips below 0.31, decrease glucagon by 0.05
	- If novichok dips below 0.65, increment glucagon by 0.03


Your conditional statements should consider the following poisons:

	- ricin
	- hemlock
	- SnakeVenom
	- novichok


Your conditional statements should modify the following antidotes:

	- aspirin
	- insulin
	- betaBlocker
	- glucagon


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var ricin;
var hemlock;
var SnakeVenom;
var novichok;


//Declare the antidote variables
var aspirin;
var insulin;
var betaBlocker;
var glucagon;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	ricin = 0.5;
	hemlock = 0.5;
	SnakeVenom = 0.5;
	novichok = 0.5;
	aspirin = 0.5;
	insulin = 0.5;
	betaBlocker = 0.5;
	glucagon = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

    if (SnakeVenom < 0.54){
        aspirin -= 0.01;
    }
    if (ricin < 0.39){
        aspirin += 0.04;
    }
    if (novichok > 0.54){
        insulin -= 0.05;
    }
    if (ricin > 0.41 && hemlock > 0.41){
        insulin += 0.05;
    }
    if (hemlock < 0.25){
        betaBlocker -= 0.01;
    }
    if (SnakeVenom < 0.72 || novichok > 0.73){
        betaBlocker += 0.04;
    }
    if (SnakeVenom < 0.39 && ricin < 0.31){
        glucagon -= 0.05;
    }
    if (novichok < 0.65){
        glucagon += 0.03;
    }



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	ricin = nextValue(graphs[0],ricin);
	hemlock = nextValue(graphs[1],hemlock);
	SnakeVenom = nextValue(graphs[2],SnakeVenom);
	novichok = nextValue(graphs[3],novichok);


	aspirin = constrain(aspirin, 0, 1);
	insulin = constrain(insulin, 0, 1);
	betaBlocker = constrain(betaBlocker, 0, 1);
	glucagon = constrain(glucagon, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('ricin: ' + nf(ricin,1,2), 20,20);
	fill(colors[1]);
	text('hemlock: ' + nf(hemlock,1,2), 20,40);
	fill(colors[2]);
	text('SnakeVenom: ' + nf(SnakeVenom,1,2), 20,60);
	fill(colors[3]);
	text('novichok: ' + nf(novichok,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(aspirin,50,'aspirin');
	drawBar(insulin,200,'insulin');
	drawBar(betaBlocker,350,'betaBlocker');
	drawBar(glucagon,500,'glucagon');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
