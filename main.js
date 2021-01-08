$(document).ready(function() {
    const title = document.querySelector(".title");
    const pointer = document.querySelector(".pointer");

    title.addEventListener("mouseover", function() {
        this.classList.toggle("newRotate");
    });

    window.addEventListener("scroll", function() {
        pointer.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    })

});