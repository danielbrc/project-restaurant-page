import { build } from "./build.js";
import taco from "./img/taco.jpg";

const title = document.createElement("h1");
const image = document.createElement("img");
const text = document.createElement("p");

image.src = taco;
title.textContent = "About our Cantinna!";
text.textContent = "Deeply rooted in Roman culture, our restaurant opens in the heart of this neighborhood.";

function About(content) {
  build(content, [title, image, text]);
};

export default About;