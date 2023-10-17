// script.js
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout");
    const cart = [];

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const product = button.getAttribute("data-product");
            const price = parseFloat(button.getAttribute("data-price"));

            cart.push({ product, price });
            updateCart();
        });
    });

    checkoutButton.addEventListener("click", () => {
        alert("Thank you for your purchase!");
        cart.length = 0; // Clear the cart
        updateCart();
    });

    function updateCart() {
        cartItemsList.innerHTML = "";
        let total = 0;

        cart.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.product} - €${item.price}`;
            cartItemsList.appendChild(listItem);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }
});
