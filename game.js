function setup() {
  console.log("setup: ");
  console.log("setup: dasdasfefsef");
  cnv = new Canvas(1390, 900);
  cube = new Sprite(width - 1300, 600, 40, 40, 'd');
  cube.color = 'blue';
  floor = new Sprite(width / 2, 700, 1390, 40, 'k');
  floor.color = 'yellow';
}
function draw() {
  background('green');
if (kb.pressing('up')) {
  if (cube.vel.y=('up')) {
    vel = +3
  }
} else if (kb.pressing('w')){
  
}
}