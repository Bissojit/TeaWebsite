// JavaScript for toggling visibility of elements and handling interactions

document.addEventListener("DOMContentLoaded", () => {
    // Toggle search form
    const searchBtn = document.getElementById("search-btn");
    const searchForm = document.querySelector(".search-form");

    searchBtn.addEventListener("click", () => {
        searchForm.classList.toggle("active");
        closeOtherSections("search");
    });

    // Toggle cart items container
    const cartBtn = document.getElementById("cart-btn");
    const cartContainer = document.querySelector(".cart-items-container");

    cartBtn.addEventListener("click", () => {
        cartContainer.classList.toggle("active");
        closeOtherSections("cart");
    });

    // Toggle navbar menu
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.querySelector(".navbar");

    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
        closeOtherSections("menu");
    });

    // Close all other sections when one is toggled
    const closeOtherSections = (current) => {
        if (current !== "search" && searchForm.classList.contains("active")) {
            searchForm.classList.remove("active");
        }
        if (current !== "cart" && cartContainer.classList.contains("active")) {
            cartContainer.classList.remove("active");
        }
        if (current !== "menu" && navbar.classList.contains("active")) {
            navbar.classList.remove("active");
        }
    };

    // Close elements on outside click
    document.addEventListener("click", (event) => {
        if (!searchForm.contains(event.target) && !searchBtn.contains(event.target)) {
            searchForm.classList.remove("active");
        }
        if (!cartContainer.contains(event.target) && !cartBtn.contains(event.target)) {
            cartContainer.classList.remove("active");
        }
        if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
            navbar.classList.remove("active");
        }
    });

    // Remove items from cart
    const removeButtons = document.querySelectorAll(".cart-item .fas.fa-times");
    removeButtons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const cartItem = event.target.closest(".cart-item");
            cartItem.remove();
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
