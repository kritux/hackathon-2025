document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("[data-navbarc-target='content']");

    function checkScroll() {
        if (window.scrollY <= 100) {
            navbar.classList.add("bg-transparent");
            navbar.classList.remove("bg-green-950");
        } else {
            navbar.classList.remove("bg-transparent");
            navbar.classList.add("bg-green-950");
        }
        console.log("window.scrollY", window.scrollY);
    }

    window.addEventListener("scroll", checkScroll);

    checkScroll();
});
