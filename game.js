function setup() {
	console.log("setup: ");
     cnv = new Canvas(1200, 1100);
	 rect = new Sprite(20, 20, 400, 100);
     rect = color = 'red';
     cube = new Sprite(20, 20, 100, 100, 'd');
     cube.color = 'blue';
     world.gravity.y = 10;
}
function draw(){
    background('lightgreen'); 
     if(kb.pressing(Space)){
       vel = +3;
     } else {
       vel = -1;
     }
     if (mouse.presses(leftclick)) {
       vel = +3;
     } else {
       vel = -1;
     }
     if(kb.presses(w)) {
       vel = +3;
     } else {
       vel = -1;
     }
     if (kb.presses(up)) {
       vel = +3;
     } else {
       vel = -1;
     }
}