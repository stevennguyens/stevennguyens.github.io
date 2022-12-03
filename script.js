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

let sections = document.querySelectorAll("section");
sections.forEach((section) => observer.observe(section))
// transitions for paintings
// let paintings = document.querySelectorAll("painting");

// window.addEventListener("scr")