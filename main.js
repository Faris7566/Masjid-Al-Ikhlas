/* ============================================
   HIGHLIGHT MENU ACTIVE
============================================ */
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active-link");
    }
});

/* ============================================
   PAGE TRANSITION
============================================ */
document.body.classList.add("fade-in");

document.querySelectorAll("a").forEach(link => {
    if (link.href && !link.href.includes("#")) {
        link.addEventListener("click", e => {
            e.preventDefault();
            const url = link.href;

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location = url;
            }, 300);
        });
    }
});

/* ============================================
   DARK MODE
============================================ */
function applyTheme() {
    const mode = localStorage.getItem("theme");

    if (mode === "dark") {
        document.body.classList.add("dark-mode");
        const toggle = document.querySelector(".theme-toggle");
        if (toggle) toggle.textContent = "☀️";
    } else {
        document.body.classList.remove("dark-mode");
        const toggle = document.querySelector(".theme-toggle");
        if (toggle) toggle.textContent = "🌙";
    }
}

function toggleTheme() {
    const now = localStorage.getItem("theme");
    localStorage.setItem("theme", now === "dark" ? "light" : "dark");
    applyTheme();
}

applyTheme();

/* ============================================
   GALLERY POPUP
============================================ */
function openImage(src) {
    const pop = document.getElementById("popup");
    document.getElementById("popup-img").src = src;
    pop.style.display = "flex";
}

function closeImage() {
    document.getElementById("popup").style.display = "none";
}

/* ============================================
   MOBILE MENU BUTTON
============================================ */
const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector("nav ul");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
}
