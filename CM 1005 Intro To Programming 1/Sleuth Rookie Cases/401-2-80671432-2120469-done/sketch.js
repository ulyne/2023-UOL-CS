/*

Officer: 2120469
CaseNum: 401-2-80671432-2120469

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If methanol dips below 0.35 or NerveGas dips below 0.45, decrement aspirin by 0.01
	- When novichok dips below 0.38 or polonium dips below 0.48, increase aspirin by 0.05
	- When polonium goes above 0.6 and NerveGas dips below 0.51, try decreasing antitoxin by 0.02
	- When either sarin goes above 0.72, strychnine goes above 0.35, or perhaps methanol dips below 0.38, try increasing antitoxin by 0.04
	- If methanol dips below 0.39 and novichok goes above 0.29, reduce antivenom by 0.02
	- When strychnine goes above 0.4 or NerveGas goes above 0.31, increase antivenom by 0.02
	- When methanol goes above 0.41 or novichok dips below 0.25, whilst at the same time, strychnine dips below 0.32, decrease antibodies by 0.05
	- When polonium dips below 0.44 and NerveGas goes above 0.45, raise antibodies by 0.01


Your conditional statements should consider the following poisons:

	- strychnine
	- sarin
	- polonium
	- methanol
	- novichok
	- NerveGas


Your conditional statements should modify the following antidotes:

	- aspirin
	- antitoxin
	- antivenom
	- antibodies


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var strychnine;
var sarin;
var polonium;
var methanol;
var novichok;
var NerveGas;


//Declare the antidote variables
var aspirin;
var antitoxin;
var antivenom;
var antibodies;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	strychnine = 0.5;
	sarin = 0.5;
	polonium = 0.5;
	methanol = 0.5;
	novichok = 0.5;
	NerveGas = 0.5;
	aspirin = 0.5;
	antitoxin = 0.5;
	antivenom = 0.5;
	antibodies = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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

    if (methanol < 0.35 || NerveGas < 0.45){
        aspirin -= 0.01;
    }
    if (novichok < 0.38 || polonium < 0.48){
        aspirin += 0.05;
    }
    if (polonium > 0.6 && NerveGas < 0.51){
        antitoxin -= 0.02;
    }
    if (sarin > 0.72 || strychnine > 0.35 || methanol < 0.38){
        antitoxin += 0.04;
    }
    if (methanol < 0.39 && novichok > 0.29){
        antivenom -= 0.02;
    }
    if (strychnine > 0.4 || NerveGas > 0.31){
        antivenom += 0.02;
    }
    if (methanol > 0.41 || novichok < 0.25 ){
        if (strychnine < 0.32){
            antibodies -= 0.05;
        }
    }
    if (polonium < 0.44 && NerveGas > 0.45){
        antibodies += 0.01;
    }


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	strychnine = nextValue(graphs[0],strychnine);
	sarin = nextValue(graphs[1],sarin);
	polonium = nextValue(graphs[2],polonium);
	methanol = nextValue(graphs[3],methanol);
	novichok = nextValue(graphs[4],novichok);
	NerveGas = nextValue(graphs[5],NerveGas);


	aspirin = constrain(aspirin, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	antibodies = constrain(antibodies, 0, 1);


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
	text('strychnine: ' + nf(strychnine,1,2), 20,20);
	fill(colors[1]);
	text('sarin: ' + nf(sarin,1,2), 20,40);
	fill(colors[2]);
	text('polonium: ' + nf(polonium,1,2), 20,60);
	fill(colors[3]);
	text('methanol: ' + nf(methanol,1,2), 20,80);
	fill(colors[4]);
	text('novichok: ' + nf(novichok,1,2), 20,100);
	fill(colors[5]);
	text('NerveGas: ' + nf(NerveGas,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(aspirin,50,'aspirin');
	drawBar(antitoxin,200,'antitoxin');
	drawBar(antivenom,350,'antivenom');
	drawBar(antibodies,500,'antibodies');


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
