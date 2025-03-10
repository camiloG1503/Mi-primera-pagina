// formulario.js

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formularioContacto');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Captura los valores del formulario
        const datosFormulario = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            empresa: document.getElementById('empresa').value,
            mensaje: document.getElementById('mensaje').value
        };

        // Convierte los datos a JSON
        const jsonData = JSON.stringify(datosFormulario, null, 2);

        // Guarda el JSON en localStorage
        localStorage.setItem('formularioContacto', jsonData);

        // Muestra el JSON en la consola
        console.log('Datos del formulario en JSON:', jsonData);

        // Muestra un mensaje al usuario
        alert('Formulario enviado correctamente. Los datos se han guardado en localStorage.');

        //Limpia el formulario después de enviar
        formulario.reset();
    });
});