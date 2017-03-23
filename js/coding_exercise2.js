function setup() {
  createCanvas(500, 500);
}


function  calcColor (dist, maxDist){
  var ans=int((dist*1.0)/maxDist*245);
  ans+=5;
  return ans;
}

function calcRadius (dist, maxDist, maxRadius, minRadius){
  var ans=int((dist*1.0)/maxDist*((maxRadius-minRadius)));
  ans+=minRadius;
  return ans;
}

function draw(){
  clear();
  for (i=0; i<20; i++){
    for(j=0; j<20;j++){
      var d=dist(mouseX, mouseY, i*20+10, j*20+10);
      var col=calcColor(d,500);
      var rad=calcRadius(d, 500, 20, 2);
      var c= color(col, col, col);
      fill(c);
      ellipse(i*20+10, j*20+10, rad, rad);
    }
  }
}
