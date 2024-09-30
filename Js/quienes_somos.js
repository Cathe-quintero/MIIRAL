document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todas las imágenes dentro de la sección .about-us
    const images = document.querySelectorAll('.about-us img');

    // Añadir eventos 'mouseover' y 'mouseout' para cada imagen
    images.forEach(function (image) {
        // Evento cuando el mouse pasa sobre la imagen
        image.addEventListener('mouseover', function () {
            // Aplicar estilo de transformación para el zoom
            image.style.transform = 'scale(1.2)';
            image.style.transition = 'transform 0.3s ease'; // Añadir una transición suave
        });

        // Evento cuando el mouse deja de estar sobre la imagen
        image.addEventListener('mouseout', function () {
            // Restaurar el tamaño original de la imagen
            image.style.transform = 'scale(1)';
        });
    });
});