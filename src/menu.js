function createMenu() {
  const content = document.querySelector("#content");
  function createTitle() {
    const title = document.createElement("h2");
    title.textContent = "Menu";
    return title;
  }
  const container = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = "Our Delicious Menu!";
  container.classList.toggle("menu-template");
  const food1 = document.createElement("div");
  food1.innerHTML = "<p>Pollo Adovada</p><p>3.99</p>";
  const food2 = document.createElement("div");
  food2.innerHTML = "<p>Chiken strips</p><p>4.50</p>";
  const food3 = document.createElement("div");
  food3.innerHTML = "<p>Pasta Bolognese</p><p>6.00</p>";
  const food4 = document.createElement("div");
  food4.innerHTML = "<p>Chiken nuggets</p><p>2.50</p>";
  container.appendChild(food1);
  container.appendChild(food2);
  container.appendChild(food3);
  container.appendChild(food4);
  content.appendChild(title);
  content.appendChild(container);
}
export { createMenu };
