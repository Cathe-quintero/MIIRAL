document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario hasta validar
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;
    let contacto = document.getElementById('contacto').value;
    
    // Validaciones básicas
    if (usuario === '' || contraseña === '' || nombres === '' || apellidos === '' || correo === '' || contacto === '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    if (contraseña.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    if (!validarCorreo(correo)) {
        alert('Por favor ingresa un correo válido.');
        return;
    }

    // Simulamos el envío de los datos
    alert(`Datos enviados correctamente:\nUsuario: ${usuario}\nNombre: ${nombres} ${apellidos}\nCorreo: ${correo}\nTeléfono: ${contacto}`);
    
    // Aquí podrías hacer un envío real de los datos a un servidor con Fetch API o AJAX
    // Ejemplo de uso de fetch (descomentarlo si tienes un backend configurado):
    // fetch('tu_url_backend', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         usuario: usuario,
    //         contraseña: contraseña,
    //         nombres: nombres,
    //         apellidos: apellidos,
    //         correo: correo,
    //         contacto: contacto
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));
});

// Función para validar el correo electrónico
function validarCorreo(correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}
