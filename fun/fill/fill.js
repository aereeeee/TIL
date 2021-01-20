const imgData = [];
let img;
let yPos;
let yDir = -1;

function preload() {
  img = loadImage("tree.jpg");
}

function setup() {
  createCanvas(600, 800);

  image(img, 0, 0, width, height);
  loadPixels();

  yPos = height - 1;

  for (let x = 0; x < width; x++) {
    imgData.push([]);
    for (let y = 0; y < height; y++) {
      imgData[x].push(get(x, y));
    }
  }
}

function draw() {
  if (yPos === 0) yPos = 1;
  if (yPos === height) yPos = height - 1;

  if (yPos > mouseY > 0) {
    yDir = -1;
  } else if (yPos < mouseY < height) {
    yDir = 1;
  } else {
    return;
  }

  for (let x = 0; x < width; x++) {
    const [r, g, b] = imgData[x][yPos];
    stroke(r, g, b);
    line(x, 0, x, yPos);
  }
  yPos += yDir;
}
