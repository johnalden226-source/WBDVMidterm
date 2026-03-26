function addToCart(product) {
    let cart = document.getElementById("cartList");
    let li = document.createElement("li");
    li.textContent = product;
    cart.appendChild(li);
}
