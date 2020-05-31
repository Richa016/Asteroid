var ship;
var asteroides_img;
var asteroids = [];
var lasers = [];
var score_box;
var score, health = 100, mission;
function preload()
{
  var asteroides_img = loadImage("1.png");
}
function setup()
{
  createCanvas(windowWidth,windowHeight);
  ship = new Ship();
  for(var i = 0; i < 5; i++)
  {
    asteroids.push(new Asteroid());
  }
}
function draw()
{
  background(0);
  fill(255,255,255);
  rect(10,10,270,90);
  textSize(20);
  fill(0,0,0);
  text("Score:-", 20,30);
  textSize(20);
  fill(0,0,0);
  text("Health:-"+health, 20,60);
  textSize(20);
  fill(0,0,0);
  text("Mission:- "+mission, 20,90);
  ship.render();
  ship.turn();
  ship.update();
  for (var i = 0; i < asteroids.length; i++) {
   
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }

  for(var i = 0; i < lasers.length; i++)
  {
    lasers[i].render();
    lasers[i].update();
  }
  if(keyCode === 32)
  {
    lasers.push(new Laser(ship.pos));
  }
  drawSprites();
}
function keyReleased()
{
  ship.setRotation(0);
  ship.boosting(false);
  ship.edges();
}
function keyPressed()
{
  if(keyCode == RIGHT_ARROW)
  {
    ship.setRotation(3);
  }
  if(keyCode == LEFT_ARROW)
  {
    ship.setRotation(-3);
  }
  if(keyCode == UP_ARROW)
  {
    ship.boosting(true);
  }
  if(keyCode === 77)
  {
    var rand = Math.round(random(10,20));
  mission = "Destroy "+rand+" asteroids";
  }
}
