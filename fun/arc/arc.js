const scale = 40;
const gap = 3;
const fontSize = 350;
const pos = [];
let font;
let t = 0;

function preload() {
  font = loadFont("./JosefinSans-Bold.ttf");
}

function setup() {
  createCanvas(600, 800);
  background(0);
  textSize(fontSize);
  pos.push(font.textToPoints("C", width - 120, height - 50));
  pos.push(font.textToPoints("H", width + 150, height + 110));
  pos.push(font.textToPoints("O", width - 50, height + 410));
}

function draw() {
  background(0);
  stroke(255);
  randomSeed(555);

  const offset = scale + gap;

  for (let y = -offset; y < height + scale * 4; y = y + offset) {
    for (let x = -offset; x < width + scale * 4; x = x + offset) {
      const halfPi = 1.5;
      arc(x, y, scale, scale, 0, random(halfPi) + t);
    }
  }

  pos.forEach((item) => {
    item.forEach((p) => {
      const twoPi = 6 * 0.9;
      const xx = floor(p.x / offset) - 10;
      const yy = floor(p.y / offset) - 10;
      stroke(255);
      push();
      translate(xx * offset, yy * offset);
      // rotate(t);
      // rotate(PI);
      arc(0, 0, scale, scale, 0, twoPi + t);
      pop();
    });
  });

  t += 0.03;
}
