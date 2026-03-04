const listURL = "https://kea-alt-del.dk/t7/api/categories";
const listContainer = document.querySelector(".category-box");

function getCategories() {
  fetch(listURL).then((res) => res.json().then((categories) => showCategories(categories)));
}

function showCategories(categories) {
  console.log("showCategories");

  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  categories.forEach((category) => {
    console.log("foreach");

    listContainer.innerHTML += `<a class="category-card" href="productlist.html?category=${category.category}">${category.category}</a>
    `;
  });
}

getCategories();
