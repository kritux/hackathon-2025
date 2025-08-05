document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector("[data-typing-target='text']");

    if (!textElement) return; // Evita errores si el elemento no existe

    const words = ["Future", "Code", "Hackathon"];
    let currentIndex = 0;
    const typeSpeed = 100;  // Velocidad de escritura (ms)
    const deleteSpeed = 50; // Velocidad de borrado (ms)
    const pauseTime = 1200; // Tiempo de espera después de escribir la palabra (ms)

    async function animateTyping() {
        while (true) {
            let word = words[currentIndex];
            await typeWord(word);
            await pause(pauseTime);
            await deleteWord();
            currentIndex = (currentIndex + 1) % words.length;
        }
    }

    async function typeWord(word) {
        for (let i = 0; i < word.length; i++) {
            textElement.textContent += word[i];
            await pause(typeSpeed);
        }
    }

    async function deleteWord() {
        let word = textElement.textContent;
        for (let i = word.length; i > 0; i--) {
            textElement.textContent = word.substring(0, i - 1);
            await pause(deleteSpeed);
        }
    }

    function pause(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    animateTyping(); // Iniciar animación
});
