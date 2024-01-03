/*

Officer: 2120469
CaseNum: 202-3-58608709-2120469

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Blue filled text with a Red outline in Diggity font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(560,497);
	textSize(29);
}

function draw()
{
	background(255);

	fill(240,230,140);
	stroke(255,215,0);
	textFont(Diggity);
	//text("relationship", 411,252);
	push();
	fill(199,21,133);
	stroke(127,255,0);
	//text("I", 507,183);
	pop();
	fill(0,250,154);
	stroke(153,50,204);
	//text("ed", 102,149);
	fill(152,251,152);
	stroke(255,69,0);
	textFont(Melissa);
	//text("m", 371,183);
	fill(218,165,32);
	stroke(128,0,128);
	textFont(Diggity);
	//text("sort", 143,252);
	fill(127,255,212);
	stroke(0,0,205);
	//text("can", 26,118);
	fill(244,164,96);
	stroke(25,25,112);
	textFont(Ballpointprint);
	//text("x", 69,397);
	push();
	fill(0,139,139);
	stroke(0,255,127);
	//text("cash.", 130,219);
	pop();
	fill(255,0,0);
	stroke(255,0,0);
	//text("break", 24,252);
	fill(173,255,47);
	stroke(107,142,35);
	textFont(RonsFont);
	//text("longer", 326,149);
	fill(255,69,0);
	stroke(0,250,154);
	//text("short", 262,183);
	push();
	fill(30,144,255);
	stroke(0,0,255);
	textFont(Ballpointprint);
	//text("Is", 324,252);
	pop();
	fill(0,139,139);
	textFont(Melissa);
	//text("?", 427,183);
	fill(50,205,50);
	stroke(127,255,0);
	//text("continual", 10,183);
	fill(0,0,255);
	stroke(255,0,0);
	textFont(Diggity);
	text("avoid", 110,87);
	text("go", 412,219);
	fill(240,128,128);
	stroke(0,255,127);
	textFont(Ballpointprint);
	//text("this", 195,252);
	fill(219,112,147);
	stroke(255,140,0);
	//text("?", 234,87);
	fill(100,149,237);
	stroke(0,128,0);
	textFont(Melissa);
	//text("sometimes.", 137,149);
	fill(0,128,128);
	stroke(0,0,205);
	textFont(Diggity);
	//text("The", 148,118);
	fill(238,130,238);
	stroke(148,0,211);
	textFont(Melissa);
	//text("these", 469,149);
	push();
	fill(255,140,0);
	stroke(128,0,128);
	textFont(Ballpointprint);
	//text("My", 16,29);
	pop();
	fill(255,165,0);
	stroke(0,100,0);
	textFont(Diggity);
	//text("Bob,", 129,29);
	fill(218,112,214);
	stroke(124,252,0);
	textFont(Ballpointprint);
	//text("Are", 12,87);
	fill(173,216,230);
	stroke(128,0,0);
	textFont(Melissa);
	//text("a", 8,252);
	fill(240,128,128);
	stroke(107,142,35);
	textFont(RonsFont);
	//text("Are", 165,183);
	fill(65,105,225);
	stroke(255,69,0);
	textFont(Ballpointprint);
	//text("so", 16,149);
	push();
	fill(255,0,0);
	stroke(124,252,0);
	textFont(RonsFont);
	//text("uld", 359,219);
	pop();
	fill(218,165,32);
	textFont(Melissa);
	//text("oney", 385,183);
	push();
	fill(147,112,219);
	stroke(0,128,128);
	textFont(Ballpointprint);
	//text("Perhaps", 191,219);
	pop();
	fill(107,142,35);
	textFont(Ballpointprint);
	//text("me", 189,87);
	fill(222,184,135);
	stroke(0,255,255);
	textFont(Diggity);
	//text("silence.", 344,118);
	fill(0,206,209);
	stroke(255,0,0);
	//text("darling", 62,29);
	fill(0,139,139);
	stroke(0,206,209);
	//text("our", 368,252);
	fill(30,144,255);
	stroke(124,252,0);
	textFont(Ballpointprint);
	//text("of", 331,183);
	fill(173,255,47);
	stroke(218,165,32);
	textFont(RonsFont);
	//text("sho", 326,219);
	fill(199,21,133);
	stroke(0,0,128);
	textFont(Diggity);
	//text("and", 99,252);
	push();
	fill(0,128,0);
	stroke(0,128,128);
	textFont(RonsFont);
	//text("delays.", 82,183);
	pop();
	stroke(0,191,255);
	textFont(RonsFont);
	//text("You", 414,118);
	push();
	fill(139,69,19);
	stroke(128,128,0);
	textFont(Diggity);
	//text("ing", 157,87);
	pop();
	stroke(46,139,87);
	textFont(Diggity);
	//text("all", 246,252);
	fill(0,206,209);
	stroke(154,205,50);
	//text("If", 443,183);
	push();
	fill(0,0,255);
	stroke(255,0,0);
	text("I", 234,149);
	pop();
	fill(240,128,128);
	stroke(255,0,0);
	//text("Daisy", 10,397);
	fill(165,42,42);
	stroke(107,142,35);
	textFont(Ballpointprint);
	//text("Forever", 7,339);
	push();
	fill(205,133,63);
	stroke(50,205,50);
	textFont(Diggity);
	//text("more", 489,87);
	pop();
	fill(152,251,152);
	textFont(RonsFont);
	//text("?", 128,118);
	push();
	fill(205,133,63);
	stroke(139,69,19);
	textFont(Melissa);
	//text("how", 405,87);
	pop();
	fill(0,255,127);
	stroke(0,255,255);
	//text("secrets,", 194,118);
	fill(255,255,0);
	stroke(154,205,50);
	textFont(Diggity);
	//text("away", 442,219);
	push();
	fill(148,0,211);
	stroke(199,21,133);
	textFont(Ballpointprint);
	//text("can", 19,219);
	pop();
	fill(186,85,211);
	stroke(165,42,42);
	textFont(Melissa);
	//text("not", 303,87);
	fill(0,255,255);
	stroke(46,139,87);
	textFont(Diggity);
	//text("I", 12,118);
	fill(124,252,0);
	stroke(255,69,0);
	//text("we", 286,219);
	fill(219,112,147);
	stroke(139,0,0);
	textFont(Melissa);
	//text("much", 443,87);
	fill(173,216,230);
	stroke(124,252,0);
	textFont(RonsFont);
	//text("sure", 336,87);
	push();
	fill(238,232,170);
	stroke(128,0,128);
	//text("so,", 468,183);
	pop();
	fill(222,184,135);
	stroke(178,34,34);
	//text("send", 64,219);
	fill(160,82,45);
	stroke(46,139,87);
	textFont(Diggity);
	//text("ignore", 406,149);
	fill(0,0,128);
	stroke(127,255,0);
	textFont(RonsFont);
	//text("yours,", 105,339);
	fill(0,100,0);
	stroke(220,20,60);
	//text("no", 290,149);
	push();
	fill(160,82,45);
	stroke(128,128,0);
	textFont(Melissa);
	//text("?", 69,281);
	pop();
	fill(0,0,255);
	stroke(255,0,0);
	textFont(Diggity);
	text("the", 300,118);
	text("guard", 50,149);
	text("safe", 15,281);
	text("can", 248,149);
	text("you", 67,87);
	text("for", 503,219);
	fill(0,128,0);
	stroke(255,0,255);
	textFont(RonsFont);
	//text("are", 465,118);
	fill(233,150,122);
	stroke(178,34,34);
	textFont(Diggity);
	//text("you", 219,183);
	fill(219,112,147);
	stroke(199,21,133);
	textFont(Ballpointprint);
	//text("take", 68,118);
	fill(153,50,204);
	stroke(255,0,255);
	textFont(Diggity);
	//text("I'm", 266,87);
	fill(0,0,139);
	stroke(128,128,0);
	textFont(RonsFont);
	//text("out.", 273,252);



}
