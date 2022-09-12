const $ = document;
let productArrays = [
    { id: 1, name: "Formal men's shoes", photo: "images/1.png", price: 49.98, desc:"Product description of formal men's shoes"},
    { id: 2, name: "Children's sports shoes", photo: "images/2.png", price: 39.23, desc:"Product description of Children's sports shoes"},
    { id: 3, name: "Women's casual shoes", photo: "images/3.png", price: 45.45, desc:"Product description of Women's casual shoes"},
    { id: 4, name: "Women's boots", photo: "images/4.png", price: 56.51, desc:"Product description of Women's boots"},
];

let productsContainer = $.querySelector(".container");

productArrays.forEach((product) => {
    productsContainer.insertAdjacentHTML('beforeend', `<div class="product-card">
    <h1>${product.name}</h1>
    <p>${product.desc}</p>
    <div class="product-pic" style="background-image: url(${product.photo});"></div>
    <div class="product-info">
      <div class="product-price">${product.price} $</div>
      <a href="product.html?id=`+ product.id +` "  class="product-button">See More</a>
    </div>
    </div>`);
});