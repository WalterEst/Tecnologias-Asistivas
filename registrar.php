<?php 
// Se incluye el archivo de conexión a la base de datos
include("db_co.php");

// Verifica si se ha enviado el formulario
if (isset($_POST['Enviar'])) {
    // Comprueba si los campos 'name' y 'email' tienen al menos 1 caracter
    if (strlen($_POST['name']) >= 1 && strlen($_POST['email']) >= 1) {
        // Se eliminan espacios en blanco al principio y al final de los datos
        $nombre = trim($_POST['nombre']);
        $edad = trim($_POST['edadl']);
        $apellido_paterno = trim($_POST['apellido_paterno']);
        $apellido_materno = trim($_POST['apellido_materno']);
        // Se obtiene la fecha actual
        $fechareg = date("d/m/y");
        // Se crea la consulta SQL para insertar los datos en la base de datos
        $consulta = "INSERT INTO datos_usuario($nombre, apellido_paterno, apellido_materno, edad, fecha) VALUES ('$nombre','$edad','$apellido_paterno','$apellido_materno','$fechareg')";
        // Se ejecuta la consulta en la base de datos
        $resultado = mysqli_query($conex, $consulta);
        // Verifica si la consulta se ejecutó correctamente
        if ($resultado) {
            ?> 
            <!-- Muestra un mensaje de éxito si la inserción fue exitosa -->
            <h3 class="ok">¡Te has inscripto correctamente!</h3>
            <?php
        } else {
            ?> 
            <!-- Muestra un mensaje de error si la inserción falló -->
            <h3 class="bad">¡Ups ha ocurrido un error!</h3>
            <?php
        }
    } else {
        ?> 
        <!-- Muestra un mensaje si los campos no están completos -->
        <h3 class="bad">¡Por favor complete los campos!</h3>
        <?php
    }
}
?>
