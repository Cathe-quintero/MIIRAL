document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-container');
    const mensaje = document.getElementById('mensaje');

    formulario.addEventListener('submit', function(event) {
        const password = document.getElementById('password').value;
        mensaje.textContent = ''; // Limpiar mensajes previos

        if (!validarContrasena(password)) {
            event.preventDefault(); // Previene el envío del formulario
            mensaje.textContent = 'La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula y un número.';
        } else {
            console.log('Formulario enviado'); // Aquí puedes manejar el envío
        }
    });

    function validarContrasena(password) {
        const longitud = password.length >= 8;
        const mayuscula = /[A-Z]/.test(password);
        const minuscula = /[a-z]/.test(password);
        const numero = /\d/.test(password);
        
        return longitud && mayuscula && minuscula && numero;
    }
});