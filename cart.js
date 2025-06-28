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


    // ============add cart=============
    function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const container = document.getElementById('cart-items');
    container.innerHTML = "";

if (cart.length === 0) {
    container.innerHTML = `
        <div class="text-center">
            <img src="./img/cart.gif" alt="Empty Cart" class="img-fluid mb-3" style="max-width: 300px;">
            <h4 class="mb-3">Your cart is empty.</h4>
            <p class="text-muted mb-4">Looks like you haven’t added anything to your cart yet.</p>
            <a href="index.html" class="btn btn-danger mb-5">Shop Now</a>
        </div>
    `;
    return;
}

    let totalAmount = 0;
    cart.forEach((item, index) => {
        totalAmount += item.total;
        container.innerHTML += `
            <div class="card w-50  p-3 mb-3">
                <h5>${item.name}</h5>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p><strong>Total: ₹${item.total}</strong></p>
                <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    container.innerHTML += `<h4 class="text-start">Grand Total: ₹${totalAmount}</h4>`;
}


// ============remove cart=========
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cart));
    renderCart();
}

document.addEventListener('DOMContentLoaded', renderCart);



// ===============cart page badge==============

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const badge = document.querySelectorAll("#cart-badge");
    badge.forEach(b => b.textContent = cart.length);
}
document.addEventListener("DOMContentLoaded", updateCartBadge);

    