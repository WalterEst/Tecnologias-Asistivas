<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $respuestas = $_POST; // Obtener todas las respuestas enviadas por el formulario

    // Ruta del archivo donde se guardarán las respuestas
    $archivo = "../Respuestas.txt";

    // Abrir el archivo en modo escritura, si no existe, se crea
    $gestor = fopen($archivo, 'a') or die("No se puede abrir el archivo.");

    // Encabezado para el archivo de respuestas
    $encabezado = "Respuestas Sección Atencion y Concentracion\n";
    fwrite($gestor, $encabezado);
    fwrite($gestor, "\n");

    // Iterar sobre las respuestas y escribirlas en el archivo
    foreach ($respuestas as $pregunta => $respuesta) {
        $texto = "Alternativa $pregunta: $respuesta\n";
        fwrite($gestor, $texto);
    }

    // Cerrar el archivo
    fclose($gestor);

    // Redireccionar a la página Seccion-1-2.html
    header("Location: Seccion-1-2.html");
    exit(); // Asegura que se detenga la ejecución del script después de la redirección
} else {
    echo "Acceso denegado.";
}
?>
