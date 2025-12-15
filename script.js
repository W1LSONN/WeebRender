document.addEventListener('DOMContentLoaded', () => {
    // Add a simple entrance animation for cards
    const cards = document.querySelectorAll('.glass-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.2}s`;
        observer.observe(card);
    });

    // Glitch effect text Scramble on hover
    const glitchText = document.querySelector('.glitch');
    const originalText = glitchText.getAttribute('data-text');
    
    glitchText.addEventListener('mouseover', () => {
        let iterations = 0;
        const interval = setInterval(() => {
            glitchText.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
                })
                .join("");
            
            if (iterations >= originalText.length) {
                clearInterval(interval);
            }
            
            iterations += 1 / 3;
        }, 30);
    });
});
