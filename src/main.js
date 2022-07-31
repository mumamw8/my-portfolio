const navbar = document.querySelector('.nav-scrolled-show');
const heading = document.querySelector('.nav-scrolled-hide');

let scrollPos = 0;
let ticking = false;

document.addEventListener('scroll', e => {

    scrollPos = window.scrollY;

    if(!ticking) {
        if(scrollPos > 500) {
            window.requestAnimationFrame(() => {
                navbar.classList.remove('opacity-0');
                heading.classList.add('opacity-0');
            });
        } else {
            window.requestAnimationFrame(() => {
                navbar.classList.add('opacity-0');
                heading.classList.remove('opacity-0');
            });
        }
        
    }
});