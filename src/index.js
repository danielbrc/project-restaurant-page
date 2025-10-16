import "./styles.css";
import Home from "./home.js";
import Menu from "./menu.js";
import About from "./about.js";

const content = document.querySelector("#content");
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonVal = event.target.value;
    let parentElement = event.target.parentElement;

    if(parentElement.id != buttonVal) {
      content.textContent = '';

      switch (buttonVal) {
        case "home":
          Home(content);
          break;

        case "menu":
          Menu(content);
          break;

        case "about":
          About(content);
          break;

        default:
          break;
      }

      parentElement.id = buttonVal;
    }
  });
});

Home(content);

