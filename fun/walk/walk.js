let vid;
const words = [
  "😀",
  "😅",
  "😇",
  "😍",
  "😚",
  "😔",
  "😣",
  "😢",
  "😱",
  "🤗",
  "😶",
  "😯",
  "😴",
  "🤒",
  "😃",
  "😂",
  "🙂",
  "😋",
  "😟",
  "😖",
  "😭",
  "😨",
  "🤔",
  "😐",
  "😦",
  "🤤",
  "🤢",
  "🤕",
  "🤑",
  "😪",
  "😧",
  "😰",
  "😳",
  "😤",
  "😫",
  "😕",
  "😏",
  "😛",
  "😘",
  "🤣",
  "😁",
  "😝",
  "🤓",
  "😩",
  "😠",
  "😥",
  "😬",
  "😵",
  "🤧",
  "🤠",
  "😷",
  "🤐",
  "🙄",
  "🤥",
  "😓",
  "😡",
  "😎",
  "😜",
  "😊",
  "😆",
];

function setup() {
  createCanvas(600, 800);
  frameRate(15);

  vid = createVideo(["walk.mp4"], onLoad);
  vid.hide();
}

function onLoad() {
  vid.volume(0);
  vid.size(600, 800);
  vid.autoplay(true);
  vid.loop();
}

function draw() {
  background(240);
  vid.loadPixels();
  for (let y = 0; y < height; y += 23) {
    for (let x = 0; x < width; x += 23) {
      const pixel = vid.pixels[(y * vid.width + x) * 4];
      const index = (x * y) % words.length;
      noFill();
      stroke(0);
      if(pixel > 40){
        textSize(pixel / 10);
        text(words[index], x, y);
      }
    }
  }
}
