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
