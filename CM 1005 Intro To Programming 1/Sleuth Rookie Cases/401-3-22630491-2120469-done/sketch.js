/*

Officer: 2120469
CaseNum: 401-3-22630491-2120469

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If spider_venom dips below 0.36 or amanita_mushrooms goes above 0.49, or on the other hand, SnakeVenom goes above 0.64 and lead goes above 0.38, decrement antivenom by 0.02
	- If Deadly_Nightshade dips below 0.56, mercury goes above 0.74, and also chlorine dips below 0.46, try increasing antivenom by 0.02
	- If hemlock dips below 0.59 or chlorine dips below 0.53, whilst at the same time, mercury goes above 0.66, reduce antitoxin by 0.03
	- If spider_venom dips below 0.42, whilst at the same time, Deadly_Nightshade dips below 0.46 or amanita_mushrooms dips below 0.34, increase antitoxin by 0.02
	- If lead dips below 0.67, amanita_mushrooms dips below 0.51, chlorine dips below 0.33, and also SnakeVenom dips below 0.59, reduce CalciumGluconate by 0.01
	- When Deadly_Nightshade dips below 0.46 and spider_venom goes above 0.3, or on the other hand, hemlock goes above 0.62, increase CalciumGluconate by 0.04
	- When spider_venom dips below 0.69 and Deadly_Nightshade dips below 0.46, or on the other hand, hemlock goes above 0.26 and amanita_mushrooms dips below 0.61, decrease paracetamol by 0.02
	- When SnakeVenom goes above 0.26, mercury goes above 0.44, and also chlorine dips below 0.65, increase paracetamol by 0.05
	- If either SnakeVenom goes above 0.54, mercury dips below 0.73, or perhaps lead dips below 0.73, decrement insulin by 0.04
	- When Deadly_Nightshade dips below 0.45, spider_venom goes above 0.73, and also hemlock goes above 0.64, increase insulin by 0.02


Your conditional statements should consider the following poisons:

	- Deadly_Nightshade
	- hemlock
	- spider_venom
	- mercury
	- amanita_mushrooms
	- chlorine
	- SnakeVenom
	- lead


Your conditional statements should modify the following antidotes:

	- antivenom
	- antitoxin
	- CalciumGluconate
	- paracetamol
	- insulin


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
var Deadly_Nightshade;
var hemlock;
var spider_venom;
var mercury;
var amanita_mushrooms;
var chlorine;
var SnakeVenom;
var lead;


//Declare the antidote variables
var antivenom;
var antitoxin;
var CalciumGluconate;
var paracetamol;
var insulin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	Deadly_Nightshade = 0.5;
	hemlock = 0.5;
	spider_venom = 0.5;
	mercury = 0.5;
	amanita_mushrooms = 0.5;
	chlorine = 0.5;
	SnakeVenom = 0.5;
	lead = 0.5;
	antivenom = 0.5;
	antitoxin = 0.5;
	CalciumGluconate = 0.5;
	paracetamol = 0.5;
	insulin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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
    
    if ((spider_venom < 0.36 || amanita_mushrooms > 0.49) || (SnakeVenom > 0.64 && lead > 0.38)){
        antivenom -= 0.02;
    }
    if (Deadly_Nightshade < 0.56 && mercury > 0.74 && chlorine < 0.46){
        antivenom += 0.02;
    }
    if ((hemlock < 0.59 || chlorine < 0.53) && mercury > 0.66){
        antitoxin -= 0.03;
    }
    if (spider_venom < 0.42 && (Deadly_Nightshade < 0.46 || amanita_mushrooms < 0.34)){
        antitoxin += 0.02;
    }
    if (lead < 0.67 && amanita_mushrooms < 0.51 && chlorine < 0.33 && SnakeVenom < 0.59){
        CalciumGluconate -= 0.01;
    }
    if ((Deadly_Nightshade < 0.46 && spider_venom > 0.3) || hemlock > 0.62){
        CalciumGluconate += 0.04;
    }
    if ((spider_venom < 0.69 && Deadly_Nightshade < 0.46) || (hemlock > 0.26 && amanita_mushrooms < 0.61)){
        paracetamol -= 0.02;
    }
    if (SnakeVenom > 0.26 && mercury > 0.44 && chlorine < 0.65){
        paracetamol += 0.05;
    }
    if (SnakeVenom > 0.54 || mercury < 0.73 || lead < 0.73){
        insulin -= 0.04;
    }
    if (Deadly_Nightshade < 0.45 && spider_venom > 0.73 && hemlock >0.64){
        insulin += 0.02;
    }
    
	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	Deadly_Nightshade = nextValue(graphs[0],Deadly_Nightshade);
	hemlock = nextValue(graphs[1],hemlock);
	spider_venom = nextValue(graphs[2],spider_venom);
	mercury = nextValue(graphs[3],mercury);
	amanita_mushrooms = nextValue(graphs[4],amanita_mushrooms);
	chlorine = nextValue(graphs[5],chlorine);
	SnakeVenom = nextValue(graphs[6],SnakeVenom);
	lead = nextValue(graphs[7],lead);


	antivenom = constrain(antivenom, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);
	CalciumGluconate = constrain(CalciumGluconate, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
	insulin = constrain(insulin, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('Deadly_Nightshade: ' + nf(Deadly_Nightshade,1,2), 20,20);
	fill(colors[1]);
	text('hemlock: ' + nf(hemlock,1,2), 20,40);
	fill(colors[2]);
	text('spider_venom: ' + nf(spider_venom,1,2), 20,60);
	fill(colors[3]);
	text('mercury: ' + nf(mercury,1,2), 20,80);
	fill(colors[4]);
	text('amanita_mushrooms: ' + nf(amanita_mushrooms,1,2), 20,100);
	fill(colors[5]);
	text('chlorine: ' + nf(chlorine,1,2), 20,120);
	fill(colors[6]);
	text('SnakeVenom: ' + nf(SnakeVenom,1,2), 20,140);
	fill(colors[7]);
	text('lead: ' + nf(lead,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(antivenom,50,'antivenom');
	drawBar(antitoxin,200,'antitoxin');
	drawBar(CalciumGluconate,350,'CalciumGluconate');
	drawBar(paracetamol,500,'paracetamol');
	drawBar(insulin,650,'insulin');


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
