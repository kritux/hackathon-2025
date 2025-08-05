document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const target = counter.getAttribute("data-target");
        let current = 0;
        let speed = target / 100; // Ajusta la velocidad inicial

        const updateCounter = () => {
            current += speed;
            if (current >= target) {
                counter.textContent = target;
            } else {
                counter.textContent = Math.floor(current);
                speed *= 0.99; // Reduce la velocidad gradualmente
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    });
});
