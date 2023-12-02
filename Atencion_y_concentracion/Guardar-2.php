<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar si se recibieron datos de respuestas para la tabla
    if (isset($_POST['respuestas_tabla']) && !empty($_POST['respuestas_tabla'])) {
        $respuestas_tabla = $_POST['respuestas_tabla']; // Obtener las respuestas enviadas por el formulario

        // Ruta del archivo donde se guardarán las respuestas
        $archivo = "../Respuestas.txt";

        // Abrir el archivo en modo escritura, si no existe, se crea
        $gestor = fopen($archivo, 'a') or die("No se puede abrir el archivo.");

        // Encabezado para el archivo de respuestas
        fwrite($gestor, "\n");
        fwrite($gestor, "Respuestas Tabla Atencion y Concentracion\n");
        fwrite($gestor, "\n");

        // Iterar sobre las respuestas de la tabla y escribirlas en el archivo
        foreach ($respuestas_tabla as $fila) {
            $texto = implode(" - ", $fila) . "\n"; // Convertir la fila en una cadena separada por comas
            fwrite($gestor, $texto);
        }

        // Cerrar el archivo
        fclose($gestor);

        // Redireccionar a la página Seccion-1-F.html
        header("Location: Seccion-1-F.html");
        exit(); // Asegura que se detenga la ejecución del script después de la redirección
    } else {
        echo "No se recibieron datos válidos de respuestas para la tabla.";
    }
} else {
    echo "Acceso denegado.";
}
?>
