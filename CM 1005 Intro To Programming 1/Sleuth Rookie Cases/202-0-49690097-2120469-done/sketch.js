/*

Officer: 2120469
CaseNum: 202-0-49690097-2120469

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Yellow Green text (see https://www.w3.org/TR/css3-iccprof#numerical). 
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(551,545);
	textFont(letterFont);
	textSize(28);
}

function draw()
{
	background(255);

	fill(255,105,180);
	//text("day", 216,84);
	fill(255,127,80);
	//text("your", 88,315);
	//text("lone", 201,216);
	fill(138,43,226);
	//text("et", 364,216);
	fill(147,112,219);
	//text("I", 490,315);
	//text("seco", 18,183);
	fill(106,90,205);
	//text("May", 357,84);
	fill(0,255,255);
	//text("am", 152,216);
	//text("harp.", 20,284);
	fill(139,0,139);
	//text("hear", 16,250);
	fill(128,0,0);
	//text("From", 164,114);
	fill(233,150,122);
	//text("I", 251,149);
	fill(184,134,11);
	//text("the", 486,250);
	//text("kisses,", 125,399);
	fill(34,139,34);
	//text("Bob", 15,455);
	fill(176,224,230);
	//text("darling,", 261,343);
	//text("I", 15,315);
	fill(0,206,209);
	//text("mus", 386,250);
	fill(255,140,0);
	//text("lovely", 57,28);
	fill(153,50,204);
	//text("the", 242,250);
	//text("of", 449,250);
	//text("your", 210,343);
	fill(100,149,237);
	//text("one", 308,183);
	//text("in", 267,84);
	fill(127,255,0);
	//text("p", 345,284);
	fill(152,251,152);
	//text("I", 452,216);
	//text("when", 53,216);
	fill(178,34,34);
	//text("voice", 126,250);
	//text("e", 354,284);
	//text("be", 166,284);
	fill(199,21,133);
	//text("moment", 331,114);
	fill(205,133,63);
	//text("I", 118,216);
	fill(219,112,147);
	//text("eyes.", 420,343);
	fill(244,164,96);
	//text("Oh", 15,28);
	fill(148,0,211);
	//text("x", 69,455);
	fill(123,104,238);
	//text("green", 345,343);
	fill(205,133,63);
	//text("blessed", 291,250);
	//text("must", 112,284);
	fill(154,205,50);
	text("first", 272,114);
	fill(255,99,71);
	//text("ic", 418,250);
	fill(25,25,112);
	//text("the", 223,114);
	//text("the", 285,216);
	//text("since", 280,315);
	fill(240,230,140);
	//text("you", 158,183);
	fill(218,112,214);
	//text("ose", 426,149);
	//text("your", 65,149);
	fill(173,255,47);
	//text("my", 110,84);
	fill(135,206,235);
	//text("face,", 184,149);
	//text("saw", 18,149);
	fill(244,164,96);
	//text("and", 76,399);
	//text("I", 411,84);
	fill(0,0,139);
	//text("true", 356,183);
	fill(255,215,0);
	//text("can", 18,343);
	fill(123,104,238);
	//text("of", 173,343);
	fill(50,205,50);
	//text("It", 466,183);
	fill(0,0,255);
	//text("knew", 285,149);
	fill(220,20,60);
	//text("few", 473,149);
	fill(255,0,0);
	//text("a", 191,216);
	//text("from", 349,149);
	//text("lovely", 116,149);
	fill(0,0,139);
	//text("sunny", 151,84);
	fill(32,178,170);
	//text("only", 62,343);
	//text("that", 479,284);
	//text("?", 133,114);
	fill(139,0,0);
	//text("the", 210,284);
	fill(107,142,35);
	//text("makea", 445,84);
	fill(165,42,42);
	//text("rson", 369,284);
	fill(255,0,0);
	//text("that", 401,216);
	fill(0,0,255);
	//text("alive", 418,284);
	fill(139,69,19);
	//text("that", 414,114);
	fill(173,216,230);
	//text("th", 407,149);
	fill(255,255,0);
	//text("I", 78,284);
	fill(50,205,50);
	//text("last", 384,315);
	fill(30,144,255);
	//text("luckiest", 259,284);
	fill(210,105,30);
	//text("your", 75,250);
	fill(0,250,154);
	//text("love.", 409,183);
	//text("Daisy,", 125,28);
	fill(210,105,30);
	//text("I", 465,114);
	fill(0,128,0);
	//text("think", 111,343);
	//text("qui", 334,216);
	//text("in", 253,216);
	fill(0,128,128);
	//text("nds", 59,183);
	fill(25,25,112);
	//text("that", 107,183);
	fill(255,255,0);
	//text("my", 267,183);
	fill(255,165,0);
	//text("Love", 15,399);
	//text("our", 345,315);
	fill(154,205,50);
	text("is", 22,216);
	fill(184,134,11);
	//text("confession", 19,114);
	//text("Ever", 217,315);
	//text("were", 202,183);
	fill(0,128,0);
	//text("You", 15,84);
	fill(154,205,50);
	text("chosen", 139,315);
	text("date", 429,315);
	text("April", 299,84);
	fill(220,20,60);
	//text("are", 63,84);
	//text("like", 190,250);
	//text("am", 49,315);



}
