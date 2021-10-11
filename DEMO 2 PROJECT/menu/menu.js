const data = [
    {
        img: "../Image/berriescheescake.png",
        title: "Berries and Cream Cheescake",
        price: 40,
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
        price: 20,
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
    }
]
const promo1 = [
    {
        promoname: 'kafe2k22',
        code: 50,
    },
    {
        promoname: 'Firsttimer',
        code: 10,
    }
]

const place = [
    {
        name: "Quảng An, Tây Hồ, Hà Nội"
    },
    {
        name: "135 Đinh Tiên Hoàng, Hoàn Kiếm, Hà Nội"
    },
    {
        name: "314 Bà Triệu, Hai Bà Trưng, Hà Nội"
    }
]

//coupon 
function promo(sel) {
    console.log(sel.value);
    let total = JSON.parse(localStorage.getItem("totalCost"));
    for (promocode of promo1) {
        if (promocode.promoname === sel.value) {
            total = total - promocode.code;
            document.getElementById("totalPrice").innerHTML = total + ',000 vnd';
            localStorage.setItem('newTotal', total);

        }
    }

}
//phone
function phone(sel) {
    console.log(sel.value)
    phone = sel.value  ;
    localStorage.setItem('phone',phone); 
}
//location
function locate(sel) {
    console.log(sel.value);
    for (locate of place) {
        if (locate.name === sel.value) {
            document.getElementsByClassName("location").innerHTML = locate.name;
            console.log(locate.name)
            let shop = locate.name;
            localStorage.setItem('shop', shop )
        }
    }
}



//Create products in Menu
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

// Cart button: When onlick, code would display the item to the cart page, while also calculating total cost and  updating the cart numbers

let carts = document.querySelectorAll('#cart');

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(data[i]);
        totalCost(data[i])
        displayCart();
        alert('new cart item')
    })
}
// Cart numbers: Add new items to the list. (applicable in the navigation bar, and also in the cart page)
function cartNumbers(data) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span').textContent = 1;
    }

    setItem(data);
}
//Updating and setting item
function setItem(data) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[data.title] == undefined) {
            cartItems = {
                ...cartItems,
                [data.title]: data
            }
        }
        cartItems[data.title].cart += 1;
    } else {
        data.cart = 1;
        cartItems = {
            [data.title]: data
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
//Onload: add and update the cart item lists
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

//Calculating the total cost and price.
function totalCost(data) {
    //  console.log("The product price is", data.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + data.price);
    } else {
        localStorage.setItem("totalCost", data.price);
    }
}

//Display car through mapping out the local storage objects onto the Cart display.
function displayCart() {
    let cartItem = localStorage.getItem('productsInCart');
    cartItem = JSON.parse(cartItem);
    let showCart = document.querySelector('#showCart');

    if (cartItem && showCart && totalPrice) {
        showCart.innerHTML = '';
        let cartcost = localStorage.getItem('totalCost');

        Object.values(cartItem).map(item => {
            showCart.innerHTML += `
                <tr id="showCart">
                <div class = "allcart">
                <td>
                <div class="cart-info">
                    <img src="${item.img}">
                    <div>
                        <p>${item.title}</p>
                        <small>Price: ${item.price},000 vnd</small>
                </div>
            </td>
            <td>  <label >Quantity: </label>${item.cart}</td>
            <td><label >Price: </label>${item.cart * item.price},000 vnd</td>
            </div>
            </tr>
            <hr>
                `;


        })

        totalPrice.innerHTML += `
            <td id="sub-totalPrice">${cartcost},000 vnd</td>
        `

    }


    console.log(cartItem);

}


//clear both local storage and updating the onload.
function clearAll() { 
    localStorage.clear();
    location.reload();
}



//Ordering: print out a list of item + destination @ account
function BuyItem() {
    let cartItem = localStorage.getItem('productsInCart');
    cartItem = JSON.parse(cartItem);
    let print = document.querySelector('#printCart');


    if (cartItem && total) {
        print.innerHTML +='';
        let cartcost = localStorage.getItem('totalCost');
        let total1 = localStorage.getItem('newTotal');
        let shop = localStorage.getItem('shop');
        let phone = localStorage.getItem('phone');
        Object.values(cartItem).map(item => {
            print.innerHTML += `
                <div id = "printCart">
                    <p>${item.title}</p>
                    <p>Sub-price: ${item.price},000vnd</p>
                    <p>Total Item prices: ${item.price * item.cart},000 vnd</p>
                    <p> Quantity: ${item.cart}</p>
                </div>
                <hr>
            `;
        })
            total.innerHTML += `
            <p>Location: ${shop}</p>
            <p> Contact: ${phone}</p>
            <p id="sub-total"> Subtotal: ${cartcost},000 vnd </p>
            <p>Total: ${total1},000 vnd</p>
        `;
        alert('See printed receipt in Account Page')

    }


}


onLoadCartNumbers();
displayCart();
BuyItem();


