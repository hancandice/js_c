const body = document.querySelector("body");

const IMG_NUMBER = 18;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `k-images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.ceil(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
