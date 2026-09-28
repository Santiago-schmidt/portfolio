const btnToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

btnToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        btnToggle.textContent = '☀️';
    } else {
        btnToggle.textContent = '🌙';
    }
});

const formulario = document.querySelector('.contacto-form');
const mensajeFormulario = document.querySelector('#mensaje-formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const asunto = document.querySelector('#asunto').value;
    const mensaje = document.querySelector('#mensaje').value;
    
    if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
        mensajeFormulario.textContent = '⚠️ Por favor, completá todos los campos del formulario.';
        return;
    }
    
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        mensajeFormulario.textContent = '⚠️ Por favor, ingresá un correo electrónico válido.';
        return;
    }

    mensajeFormulario.textContent = '✅ ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.';
});

