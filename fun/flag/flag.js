const width= 600;
const height = 800;
let alpha = 0;
let img;

function preload() {
  img = loadImage("./poster.png");
}

function setup() {
  createCanvas(800, 1000);
  noStroke();
}

function draw() {
  background(255);

  const maxX = map(mouseX, 0, width, 0, 30);
  const maxY = map(mouseY, 0, height, 0, 30);

  let x = 1;
  while (x < width) {
    let y = 1;
    while (y < height) {
      const color = img.get(int(x), int(y));
      let ampX = map(sin(radians(x + y + alpha)), -1, 1, 1, maxX);
      let ampY = map(sin(radians(-y + x + alpha)), -1, 1, 1, maxY);

      fill(color);
      rect(100+x + ampX, 100+y + ampY, 15,15);

      y += 10;
    }
    x += 10;
  }
  alpha += 8;
}
