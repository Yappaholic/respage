import { addHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");
const content = document.querySelector("#content");
function clearDiv(div) {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}
home.addEventListener("click", () => {
  clearDiv(content);
  addHome();
});
menu.addEventListener("click", () => {
  clearDiv(content);
  createMenu();
});
about.addEventListener("click", () => {
  clearDiv(content);
  createAbout();
});
