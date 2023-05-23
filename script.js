// intersection observer
let options = {
    rootMargin: '-10%',
    threshold: 0.0,
}

let observer = new IntersectionObserver(showContent, options);

function showContent(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.classList.add('show');
        } 
    })
}

function handleScroll() {
    let scrollY = window.scrollY;
    let x;
    let y;
    let ratioX;
    let ratioY;
    let newX;
    let newY;
    let top;
    let right;
    
    x = parseInt(painting.style.getPropertyValue("--x"));
    y = parseInt(painting.style.getPropertyValue("--y"));
    ratioX = painting.dataset.ratioX ? painting.dataset.ratioX : 0;
    ratioY = painting.dataset.ratioY ? painting.dataset.ratioY : 0;
    // go from top to bottom else bottom to top
    top = painting.dataset.dirY === "top" ? true : false;
    // go from right to left else left to right
    right = painting.dataset.dirX === "right" ? true : false;
    // calculate new x position
    newX = right ? x - (scrollY * ratioX) : x + (scrollY * ratioX);
    // calculate new y position
    newY = top ? y + (scrollY * ratioY) : y - (scrollY * ratioY);
    painting.style.transform = `translate(${newX}px, ${newY}px)`;

    let greetings = document.querySelector('.greetings');
    let about = document.querySelector('.about');
    // let projectTitle = document.getElementById('project-header');
    greetings.style.transform = `translateY(${scrollY < 600 ? scrollY / 12 : 0}%)`;
    about.style.transform = `translateY(${scrollY < 800 ? -scrollY / 10 : 0}%)`;
    // projectTitle.style.transform = `translateY(${(scrollY < 1400) ? -scrollY / 30 : 0}%)`;
}

let painting = document.querySelector(".contact-painting .painting");
window.addEventListener("scroll", handleScroll)
let sections = document.querySelectorAll("section");
sections.forEach((section) => observer.observe(section));

// let projectTitle = document.getElementById('project-header');
// let newString = '';
// let text = projectTitle.innerHTML.split('');
// text.map(letter => newString += `<span>${letter}</span>`);
// projectTitle.innerHTML = newString;