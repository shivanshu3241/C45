var start;
var place;
var situation;
var name;

var backgroundImg;

var name_text;

var player;

function preload()
{
  backgroundImg = loadImage("Images/menu.PNG");
}

function setup()
{
  createCanvas(1200,800);

  start = new Start();
}


function draw()
{
  background(backgroundImg);
  start.display();

  if(keyDown(UP_ARROW) && player != undefined)
  {
     player.player.y = player.player.y-8;
  }

  if(keyDown(DOWN_ARROW) && player != undefined)
  {
    player.player.y = player.player.y+8;
  }

  if(keyDown(LEFT_ARROW) && player != undefined)
  {
    player.player.x = player.player.x-8;
  }

  if(keyDown(RIGHT_ARROW) && player != undefined)
  {
    player.player.x = player.player.x+8;
  }
}