/* deslizamiento menu */
const btnSection1 = document.querySelector('#btn-section1');
const btnSection2 = document.querySelector('#btn-section2');
const btnSection3 = document.querySelector('#btn-section3');
const btnSection4 = document.querySelector('#btn-section4');

const section1 = document.querySelector('#section1')
const section2 = document.querySelector('#section2')
const section3 = document.querySelector('#section3')
const section4 = document.querySelector('#section4')

btnSection1.addEventListener('click', ()=>{
    section1.scrollIntoView({
        behavior:'smooth'
    })
});

btnSection2.addEventListener('click', ()=>{
    section2.scrollIntoView({
        behavior:'smooth'
    })
});

btnSection3.addEventListener('click', ()=>{
    section3.scrollIntoView({
        behavior:'smooth'
    })
});



 /* validacion formulario */

 
 document.addEventListener('DOMContentLoaded', () => {
    let datos = {
        nombre: '',
        celular: '',
        correo: '',
        mensaje: ''
    };

    const nombre = document.querySelector('#nombre');
    const celular = document.querySelector('#celular');
    const correo = document.querySelector('#correo');
    const mensaje = document.querySelector('#mensaje');

    nombre.addEventListener('input', leerTexto);
    celular.addEventListener('input', leerTexto);
    correo.addEventListener('input', leerTexto);
    mensaje.addEventListener('input', leerTexto);

    function leerTexto(evento) {
        datos[evento.target.id] = evento.target.value;
    }

    const formulario = document.querySelector('.formulario');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        const { nombre, celular, correo, mensaje } = datos;

        if (nombre === '' || celular === '' || correo === '' || mensaje === '') {
            mostrarError('Todos los campos son obligatorios');
            return; // Para que no muestre el mensaje de éxito si hay un error
        }

        mostrarMensaje('Enviando datos correctamente');
    });

    function mostrarError(mensaje) {
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('error');
        formulario.appendChild(error);
        setTimeout(() => {
            error.remove();
        }, 5000);
    }

    function mostrarMensaje(mensaje) {
        const exito = document.createElement('p');
        exito.textContent = mensaje;
        exito.classList.add('exito');
        formulario.appendChild(exito);
        setTimeout(() => {
            exito.remove();
        }, 5000);
    }
});