function setup() {
  console.log("setup: ");
  console.log("setup: dasdasfefsef");
  cnv = new Canvas(1390, 900);
  // the cube that the player uses and the floor of the game//
  cube = new Sprite(width - 1300, 600, 40, 40, 'd');
  cube.color = 'blue';
  cube.friction = 0;
  floor = new Sprite(width / 2, 700, 1390, 40, 'k');
  floor.color = 'yellow';
  //BLock that the cube can die on
  spike = new Sprite(1000, 660, 10, 40, 'k');
  spike.color = 'red';
  spike.vel.x = -2;
  spike = new Sprite(1400, 660, 10, 40, 'k');
  spike.color = 'red';
  spike.vel.x = -2;
  spike.friction = 0;
  //blocks that the cube can stand on
  block = new Sprite(1600, 640, 40, 80, 'k');
    block.color = 'pink';
  block.vel.x = -2;
  block = new Sprite(1640, 620, 40, 40, 'k');
  block.color = 'pink';
  block.vel.x = -2;
    block = new Sprite(1680, 620, 40, 40, 'k');
  block.color = 'pink';
  block.vel.x = -2;
  //the progress bar and the numbers that you see how far you have gone
   progress = new Sprite(width/2, 30, 800, 50, 'k');
   progress.color = 'orange';
   progress = new Sprite(260, 30, 50, 50, 'k');
   progress.color = 'purple';

  block.friction = 0;
  //gravity
  world.gravity.y = 10;
  //
}
function draw() {
  background('green');
  if (kb.pressing('up')) {
    if (cube.vel.y = ('0')) {
     cube.vel.y = -8
    }
  }else if (kb.released('up')) {
         if (cube.vel.y = ('0')) {
     cube.vel.y = +1
    }
   }
}
