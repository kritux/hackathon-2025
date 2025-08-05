document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector("[data-marquee-target='logos']");
    
    if (!container) return; // Evita errores si el elemento no existe

    let speed = 1; // Velocidad de movimiento
    let resetTime = 17500; // Tiempo para reiniciar la animación
    let position = 0;

    function startMarquee() {
        function animate() {
            position -= speed;
            container.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animate);
        }

        animate();

        // Reiniciar la posición cada X tiempo
        setInterval(() => {
            position = 0;
            container.style.transform = "translateX(0)";
        }, resetTime);
    }

    startMarquee();
});
