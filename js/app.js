const $ = document;

import { productArrays } from "./datas.js";

let productsContainer = $.querySelector(".container");

productArrays.forEach((product) => {
  productsContainer.insertAdjacentHTML('beforeend', `<div class="product-card">
    <h1>${product.name}</h1>
    <p>${product.desc}</p>
    <div class="product-pic" style="background-image: url(${product.photo});"></div>
    <div class="product-info">
      <div class="product-price">${product.price} $</div>
      <a href="product.html?id=`+ product.id + ` " class="product-button">See More</a>
    </div>
    </div>`);
});