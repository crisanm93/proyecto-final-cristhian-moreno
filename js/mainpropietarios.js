// Sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

// Pestañas
const targets = document.querySelectorAll('[data-target]');
const contents = document.querySelectorAll('[data-content]');

targets.forEach(target => {
    target.addEventListener('click', () => {
        // Remover la clase 'active' de todas las pestañas
        contents.forEach(content => {
            content.classList.remove('active');
        });

        // Añadir la clase 'active' a la pestaña seleccionada
        const t = document.getElementById(target.dataset.target);
        t.classList.add('active');
    });
});
