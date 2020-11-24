// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  noStroke();
  balloon("プログラミング基礎演習1", 19, 211, 214);
}

function balloon(t, r, g, b){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 20;
  fill(r, g, b);
  ellipse(200, 200, w + p * 2, h + p * 4);
  fill(r, g, b);
  triangle(220, 220, 250, 210, 270, 270);
  fill(255);
  textSize(14);
  text(t, 120, 205);
}
