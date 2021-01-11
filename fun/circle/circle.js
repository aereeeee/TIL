let xArr = [];
let yArr = [];
let noiseArr = [];
let step, noiseStep, noiseX, noiseY, diff, sensitivity;

function setup() {
  createCanvas(600, 800);
  background(0);
  strokeWeight(5);
  stroke(0);
  fill(255);
  frameRate(24);

  step = width / 10;
  noiseStep = 0.2;
  noiseX = random(10);
  noiseY = random(10);
  diff = 8;
  sensitivity = 3;
  noiseArr = initNoise(noiseArr);

  draw();
}

function draw() {
  background(0);

  noiseArr = updateNoise(noiseArr);
  xArr = setXY(xArr);
  yArr = setXY(yArr);

  for (let col = 1; col < yArr.length; col++) {
    for (let row = 1; row < xArr.length; row++) {
      drawPoint(xArr[row - 1], yArr[col - 1], xArr[row], yArr[col]);
    }
  }
}

function initNoise(noiseArr) {
  let col = 0;

  for (let y = 0; y < height; y += step) {
    noiseArr[col] = [];
    let row = 0;

    for (let x = 0; x < height; x += step) {
      noiseArr[col][row] = [];
      noiseArr[col][row].push(noiseX, noiseY, 0);
      noiseX += noiseStep;
      row++;
    }

    noiseY += noiseStep;
    col++;
  }

  return noiseArr;
}

function updateNoise(noiseArr) {
  const mX = map(mouseX, 0, width, 0, noiseStep * sensitivity);

  for (let col = 0; col < noiseArr.length; col++) {
    for (let row = 0; row < noiseArr[col].length; row++) {
      noiseArr[col][row][2] = mX;
    }
  }

  return noiseArr;
}

function sumNoise(arr, isRow) {
  let sum = 0;

  for (let i = 0; i < arr[0].length; i++) {
    const n = isRow ? arr[0][i] : arr[i][0];
    sum += pow(noise(...n), diff);
  }

  return sum;
}

function setXY(arr) {
  const isRow = arr === xArr;
  arr = [0];

  let prevSum = 0;
  const sum = sumNoise(noiseArr, isRow);

  for (let i = 0; i < noiseArr.length; i++) {
    const n = isRow ? noiseArr[0][i] : noiseArr[i][0];
    const noiseVal = pow(noise(...n), diff);

    const scale = isRow ? width : height;
    arr.push((scale * (noiseVal + prevSum)) / sum);
    prevSum += noiseVal;
  }

  return arr;
}

function drawPoint(x1, y1, x2, y2) {
  const x = x2 - x1;
  const y = y2 - y1;
  ellipse(x / 2 + x1, y / 2 + y1, x, y);
}