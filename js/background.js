const images = ["bg_1.jpeg", "bg_3.jpeg", "bg_4.jpeg", "bg_5.jpeg",];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);