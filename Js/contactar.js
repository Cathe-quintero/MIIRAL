document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe inmediatamente

    // Obtiene los valores de los campos del formulario
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('phone').value;
    let mensaje = document.getElementById('message').value;

    // Verifica si todos los campos están llenos
    if (!nombre || !email || !telefono || !mensaje) {  // Si algún campo está vacío
        alert('Por favor, complete todos los campos.');
    } else {
        // Si todo está bien, muestra un mensaje de éxito
        alert('Hemos recibido tu mensaje con éxito.');

    }
});