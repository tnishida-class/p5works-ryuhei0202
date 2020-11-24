// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw(){
  background(120);
  animation();
}

function animation() {
  const stride = 30;

  for (let x = 0; x <= width; x += stride) {
    for (let y = 0; y <= height; y += stride) {
      const d = dist(x, y, mouseX, mouseY);
      const size = d / 8;
      if(mouseX <= width / 2) {
        fill(255);
      } else {
        fill(0);
      }
      ellipse(x, y, size);
    }
  }
}
