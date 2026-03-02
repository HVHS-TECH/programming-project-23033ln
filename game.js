function setup() {
	console.log("setup: ");
     cnv = new Canvas(1500, 1000);
	 rect = new Sprite(20, 20, 400, 100,"k");
     rect = color = 'red';
     sqaure = new Sprite(20, 20, 100, 100, 'd');
     sqaure.color = 'fff000';
     world.gravity.y = 10;
}
function draw(){
    background('lightblue'); 
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