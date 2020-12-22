const height = 100;
const width = 1000;
let zOff = 0;

const setup = (draw = () => {
  createCanvas(600, 800);
  stroke(width);
  let yOff = 0;
  const scale = 15;

  for (let y = -height; y < width + height; y += scale) {
    let xOff = 0;
    beginShape();

    for (let x = -height; x < width; x += scale) {
      let noised = noise(xOff / 60, yOff / 20, zOff * 0.004);
      fill(scale, noised * height, width);
      vertex(x, y + (noised - 0.5) * 2 * height);
      xOff++;
    }

    endShape();
    yOff++;
  }
  zOff++;
});
