let cart = [];
let total = 0;

function addToCart(item) {
    // Dummy function for adding items to the cart
    cart.push(item);
    total += 20; // Assuming a fixed price for each cake
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Clear existing items
    cartItemsElement.innerHTML = '';

    // Populate cart items
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        cartItemsElement.appendChild(listItem);
    });

    // Update total
    cartTotalElement.textContent = total.toFixed(2);
}

function checkout() {
    alert('Thank you for your order!');
    // Additional steps for handling the checkout process can be added here
    cart = [];
    total = 0;
    updateCart();
}
// Add a function to trigger the fade-in animation
function fadeInItems() {
    const cakeItems = document.querySelectorAll('.cake-item');
    cakeItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
        }, index * 200); // Stagger the animations
    });
}

// Call the fade-in function when the page is loaded
window.onload = fadeInItems;