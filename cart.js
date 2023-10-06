// Tableau pour stocker les éléments du panier
let cartItems = [
    { name: "Produit 1", price: 20.00, quantity: 2 },
    { name: "Produit 2", price: 15.00, quantity: 1 }
];

// Fonction pour afficher le panier
function displayCart() {
    const cartContainer = document.querySelector(".cart");

    // Réinitialise le contenu du panier
    cartContainer.innerHTML = "";

    // Parcourt les éléments du panier et les affiche
    cartItems.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        // Crée la structure HTML pour chaque élément du panier
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

        // Ajoute l'élément du panier au conteneur du panier
        cartContainer.appendChild(cartItem);
    });

    // Met à jour le total
    updateTotal();
}

// Fonction pour supprimer un élément du panier
function removeItem(button) {
    const index = Array.from(button.parentElement.parentElement.children).indexOf(button.parentElement);
    cartItems.splice(index, 1);
    displayCart();
}

// Fonction pour incrémenter la quantité d'un élément du panier
function incrementQuantity(button) {
    const index = Array.from(button.parentElement.parentElement.children).indexOf(button.parentElement);
    cartItems[index].quantity++;
    displayCart();
}

// Fonction pour décrémenter la quantité d'un élément du panier
function decrementQuantity(button) {
    const index = Array.from(button.parentElement.parentElement.children).indexOf(button.parentElement);
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
        displayCart();
    }
}

// Fonction pour calculer et afficher le total
function updateTotal() {
    const totalElement = document.querySelector(".cart-total p");
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    totalElement.textContent = `Total : $${total.toFixed(2)}`;
}

// Appel initial pour afficher le panier
displayCart();
