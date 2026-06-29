// Universal Shared Marketplace Data Engine Layout
function getDatabase() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function refreshHeaderBadge() {
    let activeItems = getDatabase();
    let badge = document.getElementById('count');
    if (badge) {
        badge.innerText = activeItems.length;
    }
}

function pushToStorage(itemName, itemPrice) {
    let activeItems = getDatabase();
    activeItems.push({ name: itemName, price: parseInt(itemPrice) });
    localStorage.setItem('cart', JSON.stringify(activeItems));
    refreshHeaderBadge();
    alert(itemName + " added to your cart matrix!");
}

function buyNowLink(itemName, itemPrice) {
    let activeItems = getDatabase();
    activeItems.push({ name: itemName, price: parseInt(itemPrice) });
    localStorage.setItem('cart', JSON.stringify(activeItems));
    window.location.href = 'cart.html';
}

// Runs badge update instantly on screen initialization
window.addEventListener('DOMContentLoaded', () => {
    refreshHeaderBadge();
});
