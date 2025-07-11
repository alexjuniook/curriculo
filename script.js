document.addEventListener('DOMContentLoaded', function() {

    // Atualiza o ano no rodapé
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Efeito de aparição suave para as seções (Intersection Observer)
    const sections = document.querySelectorAll('.glass-section');
    const observerOptions = {
        root: null, // Observa em relação ao viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% da seção visível para disparar
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Opcional: Desconectar o observer após a animação para economizar recursos
                // observer.unobserve(entry.target); 
            }
        });
    };

    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        // Inicialmente, deixa as seções "invisíveis" para o efeito
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        sectionObserver.observe(section);
    });

    // Placeholder para futuras interatividades
    console.log("Currículo interativo iniciado. Efeitos e interações serão adicionados aqui.");

    // Adicionar interatividade aos links de contato (exemplo: animação no hover)
    const contactLinks = document.querySelectorAll('#contato a, #contato .icon');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // Adicionar alguma classe ou estilo para animação
            // Exemplo: link.classList.add('contact-link-hover');
        });
        link.addEventListener('mouseleave', () => {
            // Remover a classe ou estilo
            // Exemplo: link.classList.remove('contact-link-hover');
        });
    });

});
