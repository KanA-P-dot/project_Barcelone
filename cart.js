// Table for storing basket items
let cartItems = [
    { name: "Produit 1", price: 20.00, quantity: 2 },
    { name: "Produit 2", price: 15.00, quantity: 1 }
];

// Function for displaying the basket
function displayCart() {
    const cartContainer = document.querySelector(".cart");

    // Resets the contents of the basket
    cartContainer.innerHTML = "";

    // Scrolls through the items in the basket and displays them
    cartItems.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        // Creates the HTML structure for each item in the basket
        cartItem.innerHTML = `
            <img src="product-image.jpg" alt="${item.name}">
            <div class="item-details">
                <h2>${item.name}</h2>
                <p>Prix : $${item.price.toFixed(2)}</p>
                <p>Quantité : ${item.quantity}</p>
            </div>
            <button class="remove-button" onclick="removeItem(this)">Supprimer</button>
            <button class="quantity-button" onclick="decrementQuantity(this)">-</button>
            <span class="item-quantity">${item.quantity}</span>
            <button class="quantity-button" onclick="incrementQuantity(this)">+</button>
        `;

        // Adds the basket item to the basket container
        cartContainer.appendChild(cartItem);
    });

    // Updates the total
    updateTotal();
}

// Function for removing an item from the basket
function removeItem(button) {
    const index = Array.from(button.parentElement.parentElement.children).indexOf(button.parentElement);
    cartItems.splice(index, 1);
    displayCart();
}

// Function for incrementing the quantity of an item in the basket
function incrementQuantity(button) {
    const index = Array.from(button.parentElement.parentElement.children).indexOf(button.parentElement);
    cartItems[index].quantity++;
    displayCart();
}

// Function for decreasing the quantity of an item in the basket
function decrementQuantity(button) {
    const index = Array.from(button.parentElement.parentElement.children).indexOf(button.parentElement);
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
        displayCart();
    }
}

// Function for calculating and displaying the total
function updateTotal() {
    const totalElement = document.querySelector(".cart-total p");
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    totalElement.textContent = `Total : $${total.toFixed(2)}`;
}

// Initial call to display the basket
displayCart();
