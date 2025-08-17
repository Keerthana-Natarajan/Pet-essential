// ===================navbar======================

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

   // ==============contact============

    function toggleTopContact() {
    const box = document.getElementById("topContactBox");
    box.style.display = box.style.display === "block" ? "none": "block";
  }

  function toggleSidebarContact() {
    const box = document.getElementById("sidebarContactBox");
    box.style.display = box.style.display === "block" ? "none": "block";
  }

// ===================form=============
 // =================== Toggle Form =====================
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

function toggleForm() {
  loginForm.classList.toggle('hidden');
  registerForm.classList.toggle('hidden');
}

// =================== Email Validation =====================
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// =================== Register Validation =====================
function validateRegister() {
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  let valid = true;

  document.getElementById("regNameError").innerText = "";
  document.getElementById("regEmailError").innerText = "";
  document.getElementById("regPasswordError").innerText = "";

  if (name === "") {
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

  if (valid) {
    // Save user to localStorage
    const userData = {
      name: name,
      email: email,
      password: password
    };

    localStorage.setItem("registeredUser", JSON.stringify(userData));
    alert("Registration successful! Please login.");
    toggleForm(); // Switch to login form
  }

  return false; // Prevent form submission
}

// =================== Login Validation =====================
function validateLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

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

  if (valid) {
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert("Login successful! Welcome " + storedUser.name);
      // You can redirect the user here
     window.location.href = "./index.html";
    } else {
      alert("Invalid email or password");
    }
  }

  return false; // Prevent form submission
}


// ==================add cart badge==========
    function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const badge = document.querySelectorAll("#cart-badge");
    badge.forEach(b => b.textContent = cart.length);
}
document.addEventListener("DOMContentLoaded", updateCartBadge);
