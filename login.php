<?php
// Incluir la conexión a la base de datos
include 'conexion.php';

// Obtener los datos del formulario
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $correo_electronico = $_POST['correo_electronico'];
    $contrasena = $_POST['contrasena'];

    // Prevenir inyecciones SQL
    $correo_electronico = $conn->real_escape_string($correo_electronico);
    $contrasena = $conn->real_escape_string($contrasena);

    // Consultar el usuario en la base de datos usando el correo electrónico
    $sql = "SELECT * FROM usuario WHERE correo_electronico = '$correo_electronico'";
    $resultado = $conn->query($sql);

    // Verificar si se encontró el usuario
    if ($resultado->num_rows > 0) {
        // Obtener los datos del usuario
        $row = $resultado->fetch_assoc();
        $contrasenaAlmacenada = $row['contrasena']; // Suponiendo que la contrasena está almacenada sin hashing

        // Verificar si la contrasena ingresada coincide con la almacenada
        if ($contrasena === $contrasenaAlmacenada) {
            // Iniciar sesión correctamente
            session_start();
            $_SESSION['usuario'] = $correo_electronico; // Guardar el correo electrónico en la sesión
            header("Location: inicio.html"); // Redirigir a la página de inicio
            exit();
        } else {
            echo "contrasena incorrecta.";
        }
    } else {
        echo "Correo electrónico no encontrado.";
    }
}
$conn->close();
?>