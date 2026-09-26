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