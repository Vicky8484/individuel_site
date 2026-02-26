const id = 1528;
const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#productContainer");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `
<div>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="produkt billede">
            </div>
            <div>
                <br>
                <h4>${data.productdisplayname}</h4>
                <br>
                <p>${data.brandname}</p>
                <p>${data.price}</p>
                <p>${data.basecolour}</p>
                <p class="hide">Discount: ${data.discount}</p>
                <p class="hide">${data.soldout}</p>
                <br>

                <br>
                <a href="" class="button">🛒</a>
                <a href="" class="button">❤️</a>
                <a href="productlist.html" class="button">🔙</a>

                <br>
                <details>
                    <summary>Read more</summary>
                    <br>
                    <p>Full-zip front, stand-up collar, long sleeves, and ribbed (elasticated) waistband and cuffs to
                        trap heat. Lightweight, durable with breathable materials. Designed with a
                        comfortable, slightly relaxed fit to allow for ease of
                        movement.</p>
                </details>
            </div>
  `;
}

getData();
