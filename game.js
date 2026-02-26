function setup() {
	console.log("setup: ");
     cnv = new Canvas(1000, 1000);
	  rect = new Sprite(20, 20, 100, 400);
      rect = color = 'red';
        rect = new Sprite(20, 20, 100, 400);
      rect = color = 'pink';
      world.gravity.y = 10;
}
function draw(){
    background('lightgreen'); 
     if(kb.pressing(Space,up)){
        vel = +3
     } else {
        vel = -1
     }
     if (mouse.presses(leftclick)) {
         vel = +3
    } else {
        vel = -1
    }
}