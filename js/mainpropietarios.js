// Sidebar 
const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

// cambio de Pestañas 
const targets = document.querySelectorAll('[data-target]');
const contents = document.querySelectorAll('[data-content]');

targets.forEach(target => {
    target.addEventListener('click', () => {
    
        contents.forEach(content => {
            content.classList.remove('active');
        });

   
        const t = document.getElementById(target.dataset.target);
        t.classList.add('active');
    });
});



// API Key y URL
const apiKey = 'live_3cPqr6bU7z5lJWfOs0IplE43IxwEprmPyYa3WiqoLtmFZah6wgM8niTTR7Ta3hPX'; // Reemplaza con tu API Key
const apiUrl = 'https://api.thecatapi.com/v1/images/search';

// Obtener el botón y el contenedor
const btnCat = document.querySelector('#btn-cat');
const catImgContainer = document.querySelector('#cat-img-container');

// Escuchar cuando se da clic
btnCat.addEventListener('click', () => {
    // Llamar a la API
    fetch(apiUrl, {
        headers: {
            'x-api-key': apiKey
        }
    })
    // Convertir la respuesta a JSON
    .then(response => response.json())
    .then(data => {
        const catImgUrl = data[0].url;

        // Agregar la imagen como background al container
        catImgContainer.style.backgroundImage = `url('${catImgUrl}')`;
    })
    .catch(error => console.error('Error:', error));
});
