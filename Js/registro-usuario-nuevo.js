document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registroForm');
    const contraseñaInput = document.getElementById('contraseña');

    form.addEventListener('submit', function (event) {
        const contraseña = contraseñaInput.value;

        // Verifica si la contraseña tiene menos de 6 caracteres
        if (contraseña.length < 6) {
            alert('La contraseña debe tener más de 6 caracteres.');
            event.preventDefault(); // Evita que se envíe el formulario
        }
    });
});