// resenas.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reviewForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Previene el envío del formulario

        // Recoge los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const comentario = document.getElementById('comentario').value;
        const calificacion = document.getElementById('calificacion').value;

        // Crea un objeto con los datos
        const resena = {
            nombre,
            comentario,
            calificacion
        };

        // Guarda la reseña en localStorage
        localStorage.setItem('ultimaResena', JSON.stringify(resena));

        // Opcional: Mensaje de confirmación
        alert('Tu reseña ha sido guardada correctamente.');

        // Limpia el formulario
        form.reset();
    });
});
