
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

  // =================category=============

  function scrollToCategory(){
    document.getElementById("shop-category").scrollIntoView(
      {
        behavior:"smooth"
      }
    );
  }

// ===================slider===================
  let currentIndex = 0;
  const images = document.querySelectorAll('.slider img');

  function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  // Autoplay every 3 seconds
  setInterval(nextSlide, 3000);




  // =================================Comment==================

  
 const swiper = new Swiper('.mySwiper', {
 
  spaceBetween: 30,
  loop: true,
  

  slidesPerView: 1,

  // Breakpoints for responsive behavior
  breakpoints: {
    // For screens 768px and above (tablet/laptop/desktop)
    768: {
      slidesPerView: 2,
    }
  },
 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// ===============cart page badge==============
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const badge = document.querySelectorAll("#cart-badge");
    badge.forEach(b => b.textContent = cart.length);
}
document.addEventListener("DOMContentLoaded", updateCartBadge);







