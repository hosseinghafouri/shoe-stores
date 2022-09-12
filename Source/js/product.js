const $ = document;
let productArrays = [
    { id: 1, name: "Formal men's shoes", photo: "images/1.png", price: 49.98, desc:"Product description of formal men's shoes"},
    { id: 2, name: "Children's sports shoes", photo: "images/2.png", price: 39.23, desc:"Product description of Children's sports shoes"},
    { id: 3, name: "Women's casual shoes", photo: "images/3.png", price: 45.45, desc:"Product description of Women's casual shoes"},
    { id: 4, name: "Women's boots", photo: "images/4.png", price: 56.51, desc:"Product description of Women's boots"},
];

let productsContainer = $.querySelector(".container");
let previousPageBtn = $.querySelector(".previous-page");

let locationSearchParams = new URLSearchParams(location.search);
let productsIdParam = locationSearchParams.get("id");

let mainProduct = productArrays.find((product)=>{
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