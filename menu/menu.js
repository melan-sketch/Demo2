const data = [
    {
        img: "../Image/berriescheescake.png",
        title: "Berries and Cream Cheescake",
        price: 40,
        cart: 0,
    },
    {
        img: "../Image/macarons.png",
        title: "Macaron",
        price: 15,
        cart: 0,
    },
    {
        img: "../Image/croissant.png",
        title: "Croissant",
        price: 35,
        cart: 0,
    },
    {
        img: "../Image/cupcake.png",
        title: "Cupcake",
        price: 20,
        cart: 0,
    },
    {
        img: "../Image/donuts.png",
        title: "Doughnut",
        price: 25,
        cart: 0,
    },
    {
        img: "../Image/blackcoffee.png",
        title: "Coffee",
        price: 30,
        cart: 0,
    },
    {
        img: "../Image/milk-shake.png",
        title: "Milkshake",
        price: 40,
        cart: 0,
    },
    {
        img: "../Image/milktea.png",
        title: "Milktea",
        price: 30,
        cart: 0,
    },
]

let productCart;
let id = 0;

if (JSON.parse(localStorage.getItem("productCart")) !== null) {
    productCart = localStorage.getItem("productCart");
    productCart = JSON.parse(productCart);
} else {
    productCart = [];
}

let productsHTML = "";
let idAllProducts = document.getElementById("allProducts");

for (product of data) {
    productsHTML += `
        
        <div class="product">
            <div class="item-detail">
            <img class="product__img" src=${product.img}>
            </div>
                <div class="product__title">${product.title}</div>
                <div class="product__price">${product.price},000 vnd</div>  
                <i class="fa fa-shopping-cart" id="cart"></i>
        </div>
        
    `;
};

idAllProducts.innerHTML = productsHTML;

