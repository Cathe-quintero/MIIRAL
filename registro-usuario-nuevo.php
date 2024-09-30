<?php

include 'conexion.php';

// Verificar si los datos del formulario fueron enviados
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturar los datos del formulario
    $nombre_usuario = $_POST['usuario'];
    $contrasena = $_POST['contraseña'];
    $apellido_usuario = $_POST['apellidos'];
    $correo_electronico = $_POST['correo'];
    $telefono = $_POST['contacto'];
    $roles_id_rol = $_POST['roles_id_rol'];

    // Validar los datos
    if (empty($nombre_usuario) || empty($contrasena) || empty($apellido_usuario) || empty($correo_electronico) || empty($telefono) || empty($roles_id_rol)) {
        echo "Todos los campos son obligatorios.";
        exit;
    }

    // Cifrar la contraseña
    $contrasena_cifrada = password_hash($contrasena, PASSWORD_DEFAULT);

    // Preparar la consulta SQL para insertar los datos en la base de datos
    $sql = "INSERT INTO usuario (nombre_usuario, contrasena, apellido_usuario, correo_electronico, telefono, roles_id_rol) VALUES (?, ?, ?, ?, ?, ?)";

    // Usar prepared statements para evitar inyecciones SQL
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssi", $nombre_usuario, $contrasena_cifrada, $apellido_usuario, $correo_electronico, $telefono, $roles_id_rol); 

    // Ejecutar la consulta y verificar si fue exitosa
    if ($stmt->execute()) {
        // Redirigir al usuario al inicio si el registro es exitoso
        header("Location: inicio.html"); // Cambia "inicio.html" por la ruta correcta si es necesario
        exit(); // Asegúrate de salir después de la redirección
    } else {
        echo "Error al registrar el usuario: " . $stmt->error;
    }

    // Cerrar la consulta y la conexión
    $stmt->close();
    $conn->close();
}
?>