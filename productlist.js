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
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
                    <div class="card-info">
                    <h4 class="product-name card-padding">${product.productdisplayname}</h4>
                    <p class="card-padding">${product.brandname}</p>
              
                    <p class="pris card-padding">DKK ${product.price}</p>
                    
                  <h3 class="card-padding card ${product.discount > 0 ? "onSale" : ""}">${product.discount > 0 ? `<p class="badge">Tilbud ${product.discount}%</p>` : ""}</h3>
<h3 class="card-padding">${product.soldout === 1 ? `<p class="badge2">Udsolgt</p>` : `<p class="badge3">På lager</p>`}</h3>

                    <a class="button card-padding" href="product.html?id=${product.id}">${product.soldout > 0 ? "Tilføj til liste" : "Køb nu"}</a>
                    </div>
                </article>
    `;
  });
}

getProducts();
