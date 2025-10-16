import { build } from "./build.js";
import lasagna from "./img/lasagna.jpg";

const title = document.createElement("h1");
const image = document.createElement("img");
const text = document.createElement("p");

image.src = lasagna;
title.textContent = "Welcome to Cantinna!";
text.textContent = "Let us take you on a culinary journey to Rome to enjoy a taste of this ancient tradition alongside other dishes and Roman delights. We make pinsa dough with a blend of rice, soy, and wheat flour imported directly from Rome.";

function Home(content) {
  build(content, [title, image, text]);
};

export default Home;
