const params = new URLSearchParams(window.location.search);
const myCategory = params.get("category");

const listURL = myCategory ? `https://kea-alt-del.dk/t7/api/products?category=${encodeURIComponent(myCategory)}&limit=28` : "https://kea-alt-del.dk/t7/api/products?limit=100";
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
 <article class="product-card">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="produkt billede">
                    <div class="card-info">
                    <h4>${product.productdisplayname}</h4>
                    <br>
                    <p>${product.brandname}</p>
                    <br>
                    <p>DKK ${product.price}</p>
                    <br>
                    <p class="hide">${product.discount}%</p>
                    <br>
                    <p class="hide">${product.soldout}</p>
                    <br>
                    <a class="button" href="product.html?id=${product.id}">Køb nu</a>
                    </div>
                </article>
    `;
  });
}

getProducts();
