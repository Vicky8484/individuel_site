console.log("js hentet");
const myArticle = params.get("articletype");

const listURL = `https://kea-alt-del.dk/t7/api/products?articletype=${encodeURIComponent(myArticle)}&limit=10`;
console.log(listURL);
const listContainer = document.querySelector("#morelike");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((products) => showProducts(products)));
}

function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  products.forEach((product) => {
    listContainer.innerHTML += `
    <article class="red"></article>
 <article class="morelike-card">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
                    <div class="card-info">
                    <h4>${product.productdisplayname}</h4>
                    <br>
                    <p>${product.brandname}</p>
                    <br>
                    <p>DKK ${product.price}</p>
                    </div>
                </article>
    `;
  });
}

getProducts();
