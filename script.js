
/* MOBILE NAVIGATION */

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );
});


/* CLOSE MENU AFTER CLICKING A LINK */

const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
    });
});


/* ACTIVE NAVIGATION ON SCROLL */

const sections = document.querySelectorAll("main section[id]");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            links.forEach((link) => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${entry.target.id}`
                );
            });
        }
    });
}, {
    rootMargin: "-35% 0px -55% 0px"
});

sections.forEach((section) => {
    observer.observe(section);
});

/* AUTOMATIC COPYRIGHT YEAR */

document.getElementById("year").textContent =
    new Date().getFullYear();
