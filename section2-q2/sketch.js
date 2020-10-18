// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}

/* 予習での解答
function setup() {
  createCanvas(400, 400);
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      fill((i % 2 == 1 && j % 2 == 0) || (i % 2 == 0 && j % 2 == 1) ? 150 : 255);
      rect(i * 50, j * 50, 50, 50);
    }
  }
  for(let k = 0; k < 4; k++){
    fill(255, 0, 0);
    ellipse(k * 100 + 75, 25, 40); ellipse(k * 100 + 75, 125, 40);
    fill(0);
    ellipse(k * 100 + 75, 325, 40);
  }
  for(let l = 0; l < 4; l++){
    fill(255, 0, 0);
    ellipse(l * 100 + 25, 75, 40);
    fill(0);
    ellipse(l * 100 + 25, 275, 40); ellipse(l * 100 + 25, 375, 40);
  }
} */
