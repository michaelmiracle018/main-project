/**
 * /* === click Nav Bar ===
 *
 * @format
 */

const button = document.querySelector(".button");
const links = document.querySelector(".links");
/* const closeBtn = document.querySelector(".close"); */

button.addEventListener("click", showNav);
/* closeBtn.addEventListener("click", hideNav); */

function showNav() {
    links.classList.toggle("show-links");
}

/* function hideNav() {
    links.classList.toggle("show-links");
} */
/* === End click Nav Bar*/