document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector("[data-collapse-toggle='navbar-default']");
    const menu = document.getElementById("navbar-default");

    if (toggleButton && menu) {
        toggleButton.addEventListener("click", function () {
            menu.classList.toggle("hidden");
        });
    }
});
