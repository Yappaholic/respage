function addHome() {
  function createTitle(header) {
    const title = document.createElement("h2");
    title.textContent = header;
    return title;
  }
  const container = document.createElement("div");
  const text = document.createElement("p");
  const image = new Image();
  image.src = "https://okdiario.com/look/img/2017/04/17/pollos-hermanos.jpg";
  image.classList.toggle("image");
  text.textContent =
    "Welcome to the Los Pollos Hermanos! We strive to make the best chicken known to the New Mexico. Why won't you come to our restaurant and try it?";
  const content = document.querySelector("#content");
  content.appendChild(createTitle("Home"));
  content.appendChild(image);
  content.appendChild(text);
}
export { addHome };
