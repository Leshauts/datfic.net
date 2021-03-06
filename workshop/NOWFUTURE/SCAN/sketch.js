// Blinking dots background density
var step = 50;

// StrokeWeight
var w = 3;

// Dots base alpha
var apha = 16;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0, 64);

  // Blinking dot background
  for (var x = step / 2; x < width; x = x + step) {
    for (var y = step / 2; y < height; y = y + step) {
      push();
      translate(x, y);
      drawDot();
      pop();
    }
  }

  // Blinking dot function
  function drawDot() {
    if (random(1) > 0.99) {
      apha = 100;
      weight = w * 1.5;
    } else {
      apha = 16;
      weight = w;
    }

    strokeWeight(weight);
    stroke(255, apha);
    point(0, 0);
  }
}