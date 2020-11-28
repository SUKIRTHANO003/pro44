var game,player,form;
var gameState = 0;
var database;
var playerCount;

function setup() {
  createCanvas(displayWidth,displayHeight);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(0,0,0);

  

  drawSprites();
}