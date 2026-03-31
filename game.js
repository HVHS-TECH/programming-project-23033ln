



let cubes;
let gameState = 'playing';
let lives = 1;
var score = 0;
let cubeTouching = 1;
function setup() {
  console.log("setup: fffffgfgggfggfgffggfg ");
  console.log("setup: dasdasfefsef");
  cnv = new Canvas(1390, 900);

  // timers for the up and space//
  var time = 3
  // the cube that the player uses and the floor of the game//
  cube = new Sprite(width - 1300, 600, 40, 40, 'd');
  cube.color = 'blue';
  cube.friction = 0;
  floor = new Sprite(width / 2, 700, 1390, 40, 'k');
  floor.color = 'cyan';

  //BLock that the cube can die on//
  for (i = 0; i < 1; i++) {
    spikesGroup = new Group();

    spikes = new Sprite(900, 665, 10, 30, 'k');
    spikes.color = 'red';
    spikes.vel.x = -3;

    spikes = new Sprite(940, 665, 10, 30, 'k');
    spikes.color = 'red';
    spikes.vel.x = -3;
  
  
  
    spikes = new Sprite(1800, 545, 10, 30, 'k');
    spikes.color = 'red';
    spikes.vel.x = -3;

    spikes = new Sprite(1820, 545, 10, 30, 'k');
    spikes.color = 'red';
    spikes.vel.x = -3;


    spikes.friction = 0;
    spikesGroup.add(spikes);

    spikesGroup.collides(cube, func2Call);
  }



 
  //blocks that the cube can stand on//
  block = new Sprite(1520, 660, 40, 40, 'k');
  block.color = 'pink';
  block.vel.x = -3;

  block = new Sprite(1560, 660, 40, 40, 'k');
  block.color = 'pink';
  block.vel.x = -3;

  block = new Sprite(1600, 640, 40, 80, 'k');
  block.color = 'pink';
  block.vel.x = -3;

  block = new Sprite(1640, 620, 40, 40, 'k');
  block.color = 'pink';
  block.vel.x = -3;

  block = new Sprite(1680, 620, 40, 40, 'k');
  block.color = 'pink';
  block.vel.x = -3;

  block = new Sprite(2000, 540, 40, 40, 'k');
  block.color = 'pink';
  block.vel.x = -3;


  console.log("setup: dghgnngndgfjgngjfn");
  block = new Sprite(2400, 498, 40, 40, 'k');
  block.color = 'pink';
  block.vel.x = -3;

  block = new Sprite(2450, 580, 1500, 40, 'k');
  block.color = 'pink';
  block.vel.x = -3;

  block = new Sprite(3400, 620, 500, 40, 'k');
  block.color = 'pink';
  block.vel.x = -3;

  block.friction = 0;

  //the progress bar and dhdghdjghdfhgdfjhdthe numbers that you see how far you have gone//
  progressbar = new Sprite(width / 2, 30, 800, 50, 'k');
  progressbar.color = 'lightgreen';

  progress = new Sprite(width / 2, 30, 800, 50, 'k');
  progress.color = 'black';

  //gravity//
  world.gravity.y = 10;




}
function draw() {
  background('green');


  if (kb.pressing('up')) {
    if (cube.vel.y = ('0')) {
      cube.vel.y = -8
    }
  } else if (kb.released('up')) {
    if (cube.vel.y = ('0')) {
      cube.vel.y = +1
    }
  }

  if (cube >= block, spikes) {
    if (cube.vel.x = ('0')) {
      progress.vel.x = +0.100
      progress.width = progress.width - 0.200
    }
  }

  if (progress.vel.x > 0) {
    score = score + 0.025;
  }
  text('' + score, 235, 20, 50);
  textSize(30);

  if (score > 100) {
    showendscreen()
  }

  for (i = 0; i < lives; i++) {
    rect(50 * i, 50, 55, 55);

  }
}




function func2Call(cube, spikes) {
  console.log("setup:oww ");
  if (cube.collides, spikes) {
    lives--;
  }
  if (lives = '0') {
    showdeathscreen();
  }
}

function showendscreen() {

  screen = new Sprite(height / 2, width / 2, 120, 100, 'k');
  text('level finished score:', 560, 450, 120, 100)

  freeze();

}

function keyPressed() {
  if (key === 'p' || key === 'P') {
    if (gameState === "playing") {
      gameState = "paused";
    } else {
      gameState = "playing";
    }
  }

}


function showdeathscreen() {
  text('you died  ', 560, 450, 120, 100)
  textSize(100);
  freeze();
}