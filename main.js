// Highlight menu active based on current page
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = "#ffd369";
    link.style.fontWeight = "bold";
  }
});

// Gallery popup
function openImage(src) {
  const pop = document.getElementById("popup");
  document.getElementById("popup-img").src = src;
  pop.style.display = "flex";
}

function closeImage() {
  document.getElementById("popup").style.display = "none";
}

// MOBILE MENU BUTTON
const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector("nav ul");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
}
