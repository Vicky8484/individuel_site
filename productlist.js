const listURL = "https://kea-alt-del.dk/t7/api/products?limit=100";
const listContainer = document.querySelector(".productbox-wrapper");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((products) => showProducts(products)));
}

function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  products.forEach((product) => {
    listContainer.innerHTML += `
     <a class="product-card" href="product.html">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="produkt billede">
                    <h4>${product.productdisplayname}</h4>
                    <p>${product.brandname}</p>
                    <p>DKK ${product.price}</p>
                    <p class="hide">${product.discount}%</p>
                    <p class="hide">${product.soldout}</p>
                </a>
    `;
  });
}

getProducts();
