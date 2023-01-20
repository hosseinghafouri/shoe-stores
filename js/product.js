const $ = document;

import { productArrays } from "./datas.js";

let productsContainer = $.querySelector(".container");
let previousPageBtn = $.querySelector(".previous-page");

let locationSearchParams = new URLSearchParams(location.search);
let productsIdParam = locationSearchParams.get("id");

let mainProduct = productArrays.find((product) => {
  return product.id === Number(productsIdParam);
});

if (mainProduct) {
  productsContainer.insertAdjacentHTML('beforeend', `<div class="details">
      <div class="desc">
        <h1>${mainProduct.name}</h1>
        <p>${mainProduct.desc}</p>
        <br>
        <div class="product-price">${mainProduct.price} $</div>
      </div>
      <div class="image">
        <img src="${mainProduct.photo}" />
      </div>
      </div>`);
} else {
  location.href = "http://127.0.0.1:5500/Source/index.html";
};

function previousPageHandler() {
  history.back();
};
previousPageBtn.addEventListener('click', previousPageHandler);