document.location.hash = ""
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

// let paintingRatio = 40;
// let val = 800;
// while scrolling, some elements will have a motion effect
function handleScroll() {
    // const scrollY = window.scrollY
    //painting.style.transform = `translateY(${scrollY > 800 ? scrollY / paintingRatio : 0}%)`;

    let greetings = document.querySelector('.greetings');
    let about = document.querySelector('.about');
    greetings.style.transform = `translateY(${scrollY < 600 ? scrollY / 12 : 0}%)`;
    about.style.transform = `translateY(${scrollY < 800 ? -scrollY / 10 : 0}%)`;
}

// let painting = document.querySelector(".contact-painting .painting");
window.addEventListener("scroll", handleScroll)
let sections = document.querySelectorAll("section");
sections.forEach((section) => observer.observe(section));

// media query
var media = window.matchMedia("(max-width: 1024px)");
var menu = document.getElementById("menu");
var sidebar = document.querySelector(".sidebar");
var sidebarUl = sidebar.querySelectorAll("ul");

const menuListener = () => toggleMenu(menu)
// listener for when media matches
const mediaMatchesListener = () => {
    if (media.matches) {
        console.log("matches")
        menu.addEventListener("click", menuListener)
        menu.classList.remove("no-display");
        // paintingRatio = 30;
        // painting.querySelector("img").width = "400";
        if (menu.innerHTML.trim() !== "menu") {
            console.log("menu toggled")
            toggleMenu(menu)
        }
        sidebarUl.forEach((ul) => {
            ul.classList.add("no-display");
            ul.querySelectorAll("li").forEach(li => {
                li.addEventListener("click", menuListener)
            })
        });
    } else {
        console.log("not matches");
        menu.removeEventListener("click", menuListener)
        menu.classList.add("no-display");
        sidebarUl.forEach((ul) => {
            ul.classList.remove("no-display");
            ul.querySelectorAll("li").forEach(li => {
                li.removeEventListener("click", menuListener)
            })
        });
    }
}
// initially check if media screen matches
mediaMatchesListener()
// add event listener
media.addEventListener("change", mediaMatchesListener)

// toggle menu based on the innerhtml of the element
function toggleMenu(menu) {
    console.log("toggle menu")
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