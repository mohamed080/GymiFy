'use strict';



// ---------- Add Event On Element

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback)
        }
    } else {
        elem.addEventListener(type, callback)
    }
}



// ---------- Navbar Toggle
const navber = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]")

const toggleNavbar = function () {
    navber.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    navber.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);

// ---------- Header and Back Top Btn Active

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", function(){
    if(this.window.scrollY >= 100){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    }else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
})