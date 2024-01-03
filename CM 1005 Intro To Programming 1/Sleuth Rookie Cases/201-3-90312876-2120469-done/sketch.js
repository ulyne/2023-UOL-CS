/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 2120469
CaseNum: 201-3-90312876-2120469

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    
    beginShape();
    vertex(650,530);
    vertex(665,480);
    vertex(690,480);
    vertex(701,449);
    vertex(662,382);
    vertex(525,265);
    vertex(557,225);
    vertex(525,153);
    vertex(519,153);
    vertex(496,165);
    vertex(525,215);
    vertex(400,218);
    vertex(353,274);
    vertex(364,344);
    vertex(294,414);
    vertex(300,442);
    vertex(350,426);
    vertex(384,376);
    vertex(418,334);
    vertex(590,505);
    vertex(650,530);
    endShape();


    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
