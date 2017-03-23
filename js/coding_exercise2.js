function setup() {
  createCanvas(5000, 5000);
}
function draw() {
  colorMode(HSB, 100);
  for (i = 0; i < 100; i++) {
    for (j = 0; j < 100; j++) {
      stroke(i, j, 100);
      point(i, j);
  }
 }
}

function draw() {
  background(200);
  fill(0);

  var x1 = 10;
  var y1 = 90;
  var x2 = mouseX;
  var y2 = mouseY;

  line(x1, y1, x2, y2);
  ellipse(x1, y1, 7, 7);
  ellipse(x2, y2, 7, 7);

  // d is the length of the line
  // the distance from point 1 to point 2.
  var d = int(dist(x1, y1, x2, y2));

  // Let's write d along the line we are drawing!
  push();
  translate( (x1+x2)/2, (y1+y2)/2 );
  rotate( atan2(y2-y1,x2-x1) );
  text(nfc(d,1,1), 0, -5);
  pop();
  // Fancy!
}