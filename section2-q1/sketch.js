function setup() {
  createCanvas(220, 220);
  noFill();
  for(let i = 0; i < 10; i++){
    let r = i * 10 + 10;
    if(i < 5){
      stroke(0, 0, 255);
    } else {
      stroke(255, 0, 0);
    }
    ellipse(110, 110, r, r);
  }
}
