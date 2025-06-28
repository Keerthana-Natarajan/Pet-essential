
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

// ==========add cart badge=============
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const badge = document.querySelectorAll("#cart-badge");
    badge.forEach(b => b.textContent = cart.length);
}
document.addEventListener("DOMContentLoaded", updateCartBadge);















