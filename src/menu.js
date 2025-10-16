import { build } from "./build.js";

const title = document.createElement("h1");
const disclaimer = document.createElement("span");
const text = document.createElement("p");

title.textContent = "Menu";
disclaimer.textContent = "Menus are subject to change. Please ask our staff for the latest updates.";
text.textContent = "The spirit of conviviality is the core of Cantinna. Our menu is focused on Roman culinary traditions and seasonality. We source local purveyors and sustainable ingredients.";

function Menu(content) {
  build(content, [title, disclaimer, text]);
};

export default Menu;