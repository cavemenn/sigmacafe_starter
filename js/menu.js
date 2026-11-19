// js/menu.js: Menu page (uses MENU_ITEMS from data/menu.js)

const list = document.getElementById("menu-list");
const chips = document.querySelectorAll(".chip");

function render(items) {
  if (items.length === 0) {
    list.innerHTML = '<p class="empty">No items found.</p>';
    return;
  }
  list.innerHTML = items
    .map(
      (item) => `
    <article class="item">
      <div class="icon" aria-hidden="true">${item.icon}</div>
      <h3>${item.name}</h3>
      <p class="desc">${item.description}</p>
      <span class="price">RM ${item.price.toFixed(2)}</span>
    </article>
  `,
    )
    .join("");
}

function filterBy(category) {
  console.log(category);
  const wanted = category.toLowerCase();
  console.log(category);
  if (wanted === "all") {
    render(MENU_ITEMS);
    return;
  }
  const filtered = MENU_ITEMS.filter((item) => item.category === wanted);
  console.log(filtered);
  render(filtered);
  console.log("Filtered items:", filtered);
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => filterBy(chip.textContent));
});

render(MENU_ITEMS);
