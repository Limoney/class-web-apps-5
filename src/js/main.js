let navElements = document.getElementsByClassName('nav-elements')[0];
let hamburger = document.getElementById('hamburger');
let updateNav = () => {
    let navOpen = JSON.parse(localStorage.getItem("openNav"));
    localStorage.setItem('openNav',!navOpen);

    if(!navOpen)
        openNav()
    else
        closeNav();
};
let navState = JSON.parse(localStorage.getItem("openNav")) ?? true;
if(!navState)
    closeNav();

hamburger.addEventListener('click',updateNav);

function closeNav() {navElements.classList.add('is-hidden');}
function openNav() {navElements.classList.remove('is-hidden');}
