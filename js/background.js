const images = ["01.jpg", "02.jpg", "03.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImages}`;
bgImage.classList.add("bg");
document.body.appendChild(bgImage); // appendChild, prependChild
