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

// ===================form=============
 const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    function toggleForm() {
      loginForm.classList.toggle('hidden');
      registerForm.classList.toggle('hidden');
    }

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    function validateLogin() {
      let email = document.getElementById("loginEmail").value;
      let password = document.getElementById("loginPassword").value;
      let valid = true;

      document.getElementById("loginEmailError").innerText = "";
      document.getElementById("loginPasswordError").innerText = "";

      if (!validateEmail(email)) {
        document.getElementById("loginEmailError").innerText = "Enter a valid email";
        valid = false;
      }
      if (password.length < 6) {
        document.getElementById("loginPasswordError").innerText = "Password must be at least 6 characters";
        valid = false;
      }

      return valid;
    }

    function validateRegister() {
      let name = document.getElementById("regName").value;
      let email = document.getElementById("regEmail").value;
      let password = document.getElementById("regPassword").value;
      let valid = true;

      document.getElementById("regNameError").innerText = "";
      document.getElementById("regEmailError").innerText = "";
      document.getElementById("regPasswordError").innerText = "";

      if (name.trim() === "") {
        document.getElementById("regNameError").innerText = "Name is required";
        valid = false;
      }
      if (!validateEmail(email)) {
        document.getElementById("regEmailError").innerText = "Enter a valid email";
        valid = false;
      }
      if (password.length < 6) {
        document.getElementById("regPasswordError").innerText = "Password must be at least 6 characters";
        valid = false;
      }

      return valid;
    }


// ==================add cart badge==========
    function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const badge = document.querySelectorAll("#cart-badge");
    badge.forEach(b => b.textContent = cart.length);
}
document.addEventListener("DOMContentLoaded", updateCartBadge);