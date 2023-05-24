// intersection observer
let options = {
    rootMargin: '-10%',
    threshold: 0.0,
}

let observer = new IntersectionObserver(showContent, options);

function showContent(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    })
}

let paintingRatio = 40
function handleScroll() {
    painting.style.transform = `translateY(${scrollY > 1200 ? scrollY / paintingRatio : 0}%)`;

    let greetings = document.querySelector('.greetings');
    let about = document.querySelector('.about');
    greetings.style.transform = `translateY(${scrollY < 600 ? scrollY / 12 : 0}%)`;
    about.style.transform = `translateY(${scrollY < 800 ? -scrollY / 10 : 0}%)`;
}

let painting = document.querySelector(".contact-painting .painting");
window.addEventListener("scroll", handleScroll)
let sections = document.querySelectorAll("section");
sections.forEach((section) => observer.observe(section));

// media query
var media = window.matchMedia("(max-width: 1024px)");
var menu = document.getElementById("menu");
var sidebar = document.querySelector(".sidebar");
var sidebarUl = sidebar.querySelectorAll("ul");
menu.addEventListener("click", (e) => {
    toggleMenu(menu)
})

// make menu visible when media is phone or tablet (768px or less)
if (media.matches) {
    menu.classList.remove("no-display");
    paintingRatio = 30;
    painting.querySelector("img").width = "400";
    sidebarUl.forEach((ul) => {
        ul.classList.add("no-display");
        ul.querySelectorAll("li").forEach(li => {
            li.addEventListener("click", () => {
                toggleMenu(menu)
            })
        })
    });
}

// toggle menu 
function toggleMenu(menu) {
    if (menu.innerHTML.trim() === "menu") {
        menu.innerHTML = "close";
        sidebarUl.forEach((ul) => ul.classList.remove("no-display"));
        sidebar.classList.add("active");
    } else {
        menu.innerHTML = "menu";
        sidebarUl.forEach((ul) => ul.classList.add("no-display"));
        sidebar.classList.remove("active");
    }
}