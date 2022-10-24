let btn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");
let ham = document.getElementById("ham");
let cross = document.getElementById("cross");

btn.addEventListener("click", function() {
    menu.classList.toggle("hidden");
    menu.classList.toggle("visible");
    menu.classList.toggle("flex");
    ham.classList.toggle("hidden");
    ham.classList.toggle("visible");
    cross.classList.toggle("hidden");
    cross.classList.toggle("visible");
});