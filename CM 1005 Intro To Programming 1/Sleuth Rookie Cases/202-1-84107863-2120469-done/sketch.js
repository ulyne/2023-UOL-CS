/*

Officer: 2120469
CaseNum: 202-1-84107863-2120469

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Lawn Green filled text with a Green outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(623,507);
	textFont(letterFont);
	textSize(33);
}

function draw()
{
	background(255);

	fill(124,252,0);
	stroke(255,215,0);
	//text("fe", 162,253);
	fill(173,255,47);
	stroke(210,105,30);
	//text("banking", 236,288);
	fill(128,0,0);
	stroke(50,205,50);
	//text("miss", 71,99);
	fill(147,112,219);
	stroke(210,105,30);
	//text("Fo", 8,354);
	//text("place.", 327,99);
	fill(240,230,140);
	stroke(0,255,127);
	//text("long", 248,140);
	fill(50,205,50);
	stroke(0,139,139);
	//text("at", 461,216);
	fill(244,164,96);
	stroke(255,255,0);
	//text("you", 185,99);
	fill(75,0,130);
	stroke(218,165,32);
	//text("last", 100,140);
	fill(128,128,0);
	stroke(0,0,128);
	//text("are", 555,140);
	fill(107,142,35);
	stroke(154,205,50);
	//text("on", 308,288);
	fill(240,128,128);
	stroke(50,205,50);
	//text("urn.", 474,288);
	fill(244,164,96);
	stroke(139,0,139);
	//text("this", 70,288);
	fill(135,206,250);
	stroke(165,42,42);
	//text("we", 64,140);
	fill(123,104,238);
	stroke(255,140,0);
	//text("will", 520,179);
	fill(72,209,204);
	stroke(148,0,211);
	//text("you", 423,216);
	fill(240,128,128);
	stroke(0,191,255);
	//text("yours,", 85,354);
	fill(210,105,30);
	stroke(255,255,0);
	//text("we", 558,179);
	fill(255,165,0);
	stroke(218,165,32);
	//text("I'm", 199,288);
	fill(250,128,114);
	stroke(148,0,211);
	//text("to", 291,140);
	fill(255,105,180);
	stroke(139,0,139);
	//text("How", 306,253);
	fill(220,20,60);
	stroke(0,0,205);
	//text("sky,", 155,179);
	fill(238,130,238);
	stroke(75,0,130);
	//text("my", 422,140);
	fill(139,0,0);
	stroke(124,252,0);
	//text("to", 560,253);
	fill(135,206,235);
	stroke(0,191,255);
	//text("?", 148,216);
	fill(255,0,255);
	stroke(160,82,45);
	//text("I", 493,253);
	fill(65,105,225);
	stroke(46,139,87);
	//text("again", 94,216);
	fill(255,99,71);
	stroke(0,0,255);
	//text("ger", 426,253);
	fill(0,206,209);
	stroke(75,0,130);
	//text("side,", 524,216);
	fill(135,206,250);
	stroke(50,205,50);
	//text("?", 212,140);
	fill(138,43,226);
	stroke(255,255,0);
	//text("When", 463,179);
	fill(0,250,154);
	stroke(0,255,255);
	//text("my", 490,216);
	fill(148,0,211);
	stroke(75,0,130);
	//text("without", 344,216);
	fill(255,127,80);
	stroke(32,178,170);
	//text("of", 392,179);
	fill(25,25,112);
	stroke(124,252,0);
	//text("ret", 445,288);
	fill(218,165,32);
	stroke(160,82,45);
	//text("be", 8,216);
	fill(210,105,30);
	stroke(255,165,0);
	//text("the", 236,216);
	fill(0,255,255);
	stroke(218,165,32);
	//text("only", 349,179);
	fill(128,128,0);
	stroke(220,20,60);
	//text("I", 53,99);
	fill(0,0,128);
	stroke(107,142,35);
	//text("and", 203,179);
	fill(0,255,127);
	stroke(128,0,0);
	//text("months", 484,99);
	fill(178,34,34);
	stroke(0,206,209);
	//text("your", 336,288);
	fill(50,205,50);
	stroke(0,0,205);
	//text("I", 241,179);
	fill(123,104,238);
	stroke(0,206,209);
	//text("st", 533,140);
	fill(65,105,225);
	stroke(255,165,0);
	//text("kissed", 145,140);
	fill(0,139,139);
	stroke(0,255,255);
	//text("x", 67,420);
	fill(220,20,60);
	stroke(0,250,154);
	//text("spring,", 274,216);
	fill(50,205,50);
	stroke(128,128,0);
	//text("My", 8,33);
	fill(152,251,152);
	stroke(199,21,133);
	//text("?", 181,288);
	fill(244,164,96);
	stroke(139,69,19);
	//text("since", 11,140);
	fill(220,20,60);
	stroke(0,100,0);
	//text("I", 230,140);
	fill(138,43,226);
	stroke(0,255,127);
	//text("lon", 402,253);
	fill(238,232,170);
	stroke(148,0,211);
	//text("rever", 29,354);
	fill(255,140,0);
	stroke(50,205,50);
	//text("els", 182,253);
	fill(135,206,250);
	stroke(255,0,255);
	//text("have", 511,253);
	fill(176,224,230);
	stroke(0,255,127);
	//text("you", 363,140);
	fill(75,0,130);
	stroke(128,0,0);
	//text("darling", 45,33);
	fill(173,216,230);
	stroke(128,0,128);
	//text("longing", 114,288);
	fill(238,232,170);
	stroke(0,0,139);
	//text("How", 8,99);
	fill(255,69,0);
	stroke(34,139,34);
	//text("How", 385,99);
	fill(0,255,127);
	stroke(255,69,0);
	//text("do", 464,253);
	fill(0,0,128);
	stroke(0,100,0);
	//text("in", 401,140);
	fill(127,255,0);
	stroke(255,215,0);
	//text("swift", 383,288);
	fill(165,42,42);
	stroke(0,0,139);
	//text("Even", 166,216);
	fill(255,140,0);
	stroke(184,134,11);
	//text("rms.", 467,140);
	fill(0,100,0);
	stroke(127,255,0);
	//text("you.", 421,179);
	fill(244,164,96);
	stroke(32,178,170);
	//text("Bob,", 111,33);
	fill(255,165,0);
	stroke(0,100,0);
	//text("many", 430,99);
	fill(30,144,255);
	stroke(255,165,0);
	//text("much", 351,253);
	fill(32,178,170);
	stroke(0,0,205);
	//text("I", 515,140);
	fill(210,105,30);
	stroke(255,140,0);
	//text("the", 289,99);
	fill(160,82,45);
	stroke(139,0,139);
	//text("a", 456,140);
	fill(199,21,133);
	stroke(128,128,0);
	//text("in", 215,216);
	fill(0,0,128);
	stroke(34,139,34);
	//text("desolate.", 216,253);
	fill(138,43,226);
	stroke(255,165,0);
	//text("night", 103,179);
	fill(205,133,63);
	stroke(0,0,255);
	//text("is", 559,99);
	fill(124,252,0);
	stroke(0,128,0);
	text("hold", 320,140);
	text("small", 56,253);
	fill(0,128,0);
	stroke(255,69,0);
	//text("the", 65,179);
	fill(154,205,50);
	stroke(165,42,42);
	//text("around", 223,99);
	fill(72,209,204);
	stroke(32,178,170);
	//text("can", 259,179);
	fill(124,252,0);
	stroke(0,128,0);
	text("up", 9,179);
	text("at", 36,179);
	fill(218,112,214);
	stroke(220,20,60);
	//text("it", 583,99);
	fill(124,252,0);
	stroke(0,128,0);
	text("store", 10,288);
	text("town", 110,253);
	fill(32,178,170);
	stroke(210,105,30);
	//text("this", 12,253);
	fill(0,128,128);
	stroke(255,0,255);
	//text("united", 35,216);
	fill(147,112,219);
	stroke(255,0,0);
	//text("think", 297,179);
	fill(238,130,238);
	stroke(160,82,45);
	//text("having", 122,99);
	fill(210,105,30);
	stroke(139,0,0);
	//text("Daisy", 8,420);



}
