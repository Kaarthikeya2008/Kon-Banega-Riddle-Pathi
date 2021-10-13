

var bg, form, player
function preload(){
  bg=loadImage("downloa.jpg")
}

function setup()
{
  createCanvas(displayWidth-40, displayHeight-180);
  
  form=new Form();
  Game=new Game()
 
}

function draw() 
{
  background(bg);
  
  form.display();
  Form
  Game.display();
}

