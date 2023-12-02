<?php
session_start(); // Iniciar la sesión si no está iniciada

if (isset($_POST['register'])) {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $apellido_paterno = $_POST['apellido_paterno'];
    $apellido_materno = $_POST['apellido_materno'];
    $edad = $_POST['edad'];

    // Guardar los datos en variables de sesión
    $_SESSION['nombre'] = $nombre;
    $_SESSION['apellido_paterno'] = $apellido_paterno;
    $_SESSION['apellido_materno'] = $apellido_materno;
    $_SESSION['edad'] = $edad;

    // Redirigir a la página deseada después de guardar los datos
    header("Location: Atencion_y_concentracion/Seccion-1-1.html");
    exit(); // Asegura que el script se detenga después de la redirección
}
?>
