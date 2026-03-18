function setup() {
  console.log("setup: fffffgfgggfggfgffggfg ");
  console.log("setup: dasdasfefsef");
  cnv = new Canvas(1390, 900);

  // timers for the up and space//
  var timeUP = 3
  // the cube that the player uses and the floor of the game//
  cube = new Sprite(width - 1300, 600, 40, 40, 'd');
  cube.color = 'blue';
  cube.friction = 0;
  floor = new Sprite(width / 2, 700, 1390, 40, 'k');
  floor.color = 'cyan';

  //BLock that the cube can die on//
  spike = new Sprite(900, 665, 10, 30, 'k');
  spike.color = 'red';
  spike.vel.x = -3;

  spike = new Sprite(940, 665, 10, 30, 'k');
  spike.color = 'red';
  spike.vel.x = -3;

  spike = new Sprite(1800, 545, 10, 30, 'k');
  spike.color = 'red';
  spike.vel.x = -3;

  spike.friction = 0;

  console.log("setup: dghgnngndgfjgngjfn");
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

  block = new Sprite(2450, 580, 1500, 40, 'k');
  block.color = 'pink';
  block.vel.x = -3;

  block.friction = 0;

  //the progress bar and the numbers that you see how far you have gone//
  progressbar = new Sprite(width / 2, 30, 800, 50, 'k');
  progressbar.color = 'lightgreen';

  progress = new Sprite(width / 2, 30, 800, 50, 'k');
  progress.color = 'black';

  //gravity//
  world.gravity.y = 10;
  //score//
  var score = 0;
  
}
function draw() {
  background('green');
  if (kb.pressing('up')) {
    if (cube.vel.y = ('0')) {
      cube.vel.y = -8
    }
    timeUP = timeUP = - 1
  } else if (kb.released('up')) {
    if (cube.vel.y = ('0')) {
      cube.vel.y = +1
    }
    timeUP = 3
  }
  if (cube >= block, spike) {
    if (cube.vel.x = ('0')) {
      progress.vel.x = +0.100
      progress.width = progress.width - 0.200
    }
  }
   if (score = progress.vel.x ) {
    score = score + 0.01;
   } 
   text('' + score ,  230, 20, 50);
   textSize(30);
  }
