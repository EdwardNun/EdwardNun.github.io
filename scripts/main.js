document.addEventListener('DOMContentLoaded', () => {
    // Añade interactividad al botón "Ver más"
    const buttons = document.querySelectorAll('.btn-ver-mas');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            alert(`Más información sobre: ${product}`);
        });
    });

    // Validación simple del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
});
