<?php 
// Se incluye el archivo de conexión a la base de datos
include("db_co.php");

// Verifica si se ha enviado el formulario
if (isset($_POST['register'])) {
    // Comprueba si los campos 'nombre' y 'edad' tienen al menos 1 caracter
    if (strlen($_POST['nombre']) >= 1 && strlen($_POST['edad']) >= 1) {
        // Se eliminan espacios en blanco al principio y al final de los datos
        $nombre = trim($_POST['nombre']);
        $edad = trim($_POST['edad']);
        $apellido_paterno = trim($_POST['apellido_paterno']);
        $apellido_materno = trim($_POST['apellido_materno']);
        // Se obtiene la fecha actual
        $fechareg = date("d/m/y");
        // Se crea la consulta SQL para insertar los datos en la base de datos
        $consulta = "INSERT INTO datos_usuario(nombre, apellido_paterno, apellido_materno, edad, fecha) VALUES ('$nombre','$apellido_paterno','$apellido_materno','$edad','$fechareg')";
        // Se ejecuta la consulta en la base de datos
        $resultado = mysqli_query($conex, $consulta);
        // Verifica si la consulta se ejecutó correctamente
        if ($resultado) {
            
            header("Location: Atencion_y_concentracion/seccion-1-1.html");
            exit(); // Es importante salir después de la redirección
        } else {
            ?> 
            <!-- Muestra un mensaje de error si la inserción falló -->
            <h3 class="bad">Error al ingresar</h3>
            <?php
        }
    } else {
        ?> 
        <!-- Muestra un mensaje si los campos no están completos -->
        <h3 class="bad">¡Por favor complete todos los campos!</h3>
        <?php
    }
}
?>
