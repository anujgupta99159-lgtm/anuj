const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");


// Mobile menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});