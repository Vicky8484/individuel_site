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

// Pris Sortering
const sortByPriceBtn = document.querySelector("#sortByPriceBtn");
const sortByPriceBtn2 = document.querySelector("#sortByPriceBtn2");

let allProducts = [];

function getProducts() {
  fetch(listURL)
    .then((res) => res.json())
    .then((products) => {
      allProducts = products; // gem originaldata
      showProducts(allProducts);
    });
}

function sortPrice() {
  console.log("sort by price");
  const sorted = [...allProducts].sort((a, b) => a.price - b.price); // sortér efter pris
  showProducts(sorted); // vis sorteret liste
}

sortByPriceBtn.addEventListener("click", sortPrice);

// Køn Sortering
const filterWomenBtn = document.querySelector("#sortByWomen");
const showAllBtn = document.querySelector("#sortByAll");

function filterByGender(targetGender) {
  const filtered = allProducts.filter((product) => (product.gender || "").toLowerCase() === targetGender.toLowerCase());

  showProducts(filtered);
}

filterWomenBtn.addEventListener("click", () => filterByGender("Women"));
showAllBtn.addEventListener("click", () => showProducts(allProducts));

// Article type Sortering (som vi ikke bruger alligevel, fordi det kun er relevant for Accessories product list)
// Filter Bags
/*const filterBagsBtn = document.querySelector("#sortByBags");

function filterByBags(targetBags) {
  const filtered = allProducts.filter((product) => (product.articletype || "").toLowerCase() === targetBags.toLowerCase());

  showProducts(filtered);
}

filterBagsBtn.addEventListener("click", () => filterByBags("Backpacks"));
showAllBtn.addEventListener("click", () => showProducts(allProducts));

// Filter Hats
const filterHatsBtn = document.querySelector("#sortByHats");

function filterByHats(targetHats) {
  const filtered = allProducts.filter((product) => (product.articletype || "").toLowerCase() === targetHats.toLowerCase());

  showProducts(filtered);
}

filterHatsBtn.addEventListener("click", () => filterByHats("Water Bottle"));
showAllBtn.addEventListener("click", () => showProducts(allProducts));*/

// Discount Sortering
const filterDiscountBtn = document.querySelector("#sortByDiscount");

function filterByDiscount() {
  const filtered = allProducts.filter((product) => product.discount > 0);

  showProducts(filtered);
}

filterDiscountBtn.addEventListener("click", filterByDiscount);
showAllBtn.addEventListener("click", () => showProducts(allProducts));

//På lager Sortering
const filterStockBtn = document.querySelector("#sortByStock");

function filterByStock() {
  const filtered = allProducts.filter((product) => product.soldout === 0);

  showProducts(filtered);
}

filterStockBtn.addEventListener("click", filterByStock);
showAllBtn.addEventListener("click", () => showProducts(allProducts));

getProducts();
