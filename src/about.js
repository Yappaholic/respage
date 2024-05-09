function createAbout() {
  const content = document.querySelector("#content");
  function createTitle() {
    const title = document.createElement("h2");
    title.textContent = "About";
    return title;
  }
  const image = new Image();
  image.src =
    "https://upload.wikimedia.org/wikipedia/en/a/ae/Los_Pollos_Hermanos_logo.png";
  const text = document.createElement("p");
  text.classList.toggle("about");
  text.textContent =
    "Los Pollos Hermanos is a fast-growing casual family restaurant founded by Gus Fring and his business partner Max Arciniega. Together, the 'chicken brothers' made a name for themselves and their small-town eatery by using authentic flavors and spices to make the tastiest chicken south of the border.";
  content.appendChild(image);
  content.appendChild(text);
  createTitle();
}
export { createAbout };
