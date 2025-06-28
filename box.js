
// ===================navbar======================

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });



  // ==============contact============

    function toggleTopContact() {
    const box = document.getElementById("topContactBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
  }

  function toggleSidebarContact() {
    const box = document.getElementById("sidebarContactBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
  }

// =================product-page===========
const basePrices = {
  "250g": 300,
  "500g": 550,
  "1kg": 1000
};

const priceElement = document.getElementById("price");
const sizeSelect = document.getElementById("size");
const quantitySelect = document.getElementById("quantity");

function updatePrice() {
  const selectedSize = sizeSelect.value;
  const quantity = parseInt(quantitySelect.value);
  const basePrice = basePrices[selectedSize];
  const total = basePrice * quantity;

  priceElement.textContent = `₹${total}`;
}

sizeSelect.addEventListener("change", updatePrice);
quantitySelect.addEventListener("change", updatePrice);
window.addEventListener("DOMContentLoaded", updatePrice);



// ==================add to cart button==============
function addToCart() {
    const name = document.querySelector('.name').textContent.trim();
    const size = sizeSelect.value;
    const quantity = parseInt(quantitySelect.value);
    const price = basePrices[size];

    const product = {
        name: name,
        size: size,
        price: price,
        quantity: quantity,
        total: price * quantity
    };

    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    cart.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cart));

    updateCartBadge();
    // alert("Added to cart!");
}

// ============ Cart Badge Update =============
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const badge = document.querySelectorAll("#cart-badge");
    badge.forEach(b => b.textContent = cart.length);
}
document.addEventListener("DOMContentLoaded", updateCartBadge);