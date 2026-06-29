// Dedicated Action File for Editing & Graphics Section

// Helper to grab the active cart array
function getDatabase() {
    return JSON.parse(localStorage.getItem('martcart')) || [];
}

// Helper to update the cart number badge on the screen header
function refreshHeaderBadge() {
    let activeItems = getDatabase();
    let badge = document.getElementById('count');
    if (badge) {
        badge.innerText = activeItems.length;
    }
}

// Action 1: Add to Cart Option
function pushToStorage(itemName, itemPrice) {
    let activeItems = getDatabase();
    activeItems.push({ name: itemName, price: parseInt(itemPrice) });
    localStorage.setItem('martcart', JSON.stringify(activeItems));
    refreshHeaderBadge();
    alert(itemName + " successfully added to your cart!");
}

// Action 2: Buy Now Option (Adds item and routes directly to checkout)
function buyNowLink(itemName, itemPrice) {
    let activeItems = getDatabase();
    activeItems.push({ name: itemName, price: parseInt(itemPrice) });
    localStorage.setItem('martcart', JSON.stringify(activeItems));
    window.location.href = 'cart.html';
}

// Auto-run badge check when the page finishes loading
window.addEventListener('DOMContentLoaded', () => {
    refreshHeaderBadge();
});
