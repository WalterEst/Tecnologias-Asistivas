<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los valores de los checkboxes marcados
    $checkboxes = $_POST;

    // Crear una cadena con los checkboxes marcados
    $checkedCheckboxes = '';
    foreach ($checkboxes as $key => $value) {
        if ($value === 'on' && is_numeric($key)) {
            $checkedCheckboxes .= $key . "\n"; // Agregar el nombre del checkbox marcado a la cadena
        }
    }

    // Ruta y nombre del archivo de texto
    $file = 'checklist.txt';

    // Guardar en el archivo de texto
    file_put_contents($file, $checkedCheckboxes);

    // Redireccionar a la siguiente página después de guardar los datos
    header('Location: Seccion-1-2.html');
    exit;
}
?>
