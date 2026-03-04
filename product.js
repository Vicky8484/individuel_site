const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("id:", id);

// const id = 1528;
const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#productContainer");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `
<div>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="${data.productdisplayname}">
            </div>
            <div class="product-info">
                <br>
                <h4 class="product-title">${data.productdisplayname}</h4>
                <p> ${data.brandname}</p>
                <br>
                <p class="pris">DKK ${data.price}</p>
                <p>Color: ${data.basecolour}</p>
                <p class="hide">Discount: ${data.discount}</p>
                <p class="hide">Stock: ${data.soldout}</p>
                <br>

                <a href="" class="button">🛒</a>
                <a href="" class="button">❤️</a>
          
                <details>
                    <summary>Read more</summary>
                    <br>
                    <p>Gender: ${data.gender}</p>
                    <br>
                         <p>Article type: ${data.articletype}</p>
                           <br>
                            <p>Usage type: ${data.usagetype}</p>
                              <br>
                              <p>Production year: ${data.productionyear}</p>
                </details>
            </div>
  `;
}

getData();
