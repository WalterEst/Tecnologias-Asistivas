<!DOCTYPE html>
<html lang="es"">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/styles.css">
    <link rel="icon" type="image/png" href="Imagenes/index/Favicon.png"/>
    <title>Pagina principal</title>
</head>
<body>
    <div class = "contenedor-titulos-index">

        <h1>CAPACIDADES GENERALES</h1>
        <h2>BASE DE RAZONAMIENTO Y CONCENTRACIÓN</h2>
        <h3>Grupo objetivo: Segundo medio</h3>

        <div class="formulario">
            <form method="post">
                <p>
                    <label for="nombre">Nombre:</label>
                    <input type="text" name="nombre" required><br>
                </p>
                <p>
                    <label for="apellido_paterno">Apellido Paterno:</label>
                    <input type="text" name="apellido_paterno" required><br>
                </p>
                <p>
                    <label for="apellido_materno">Apellido Materno:</label>
                    <input type="text" name="apellido_materno" required><br>
                </p>
                <p>
                    <label for="edad">Edad:</label>
                    <input type="number" name="edad" required><br>
                </p>
                <div id="botones">
                    <input type="submit" name="register">
                </div>
            </form>
        </div>

        </form>
        <?php 
        include("registrar.php");
        ?>
        
    </div>

    <div>
        <a href="Atencion_y_concentracion/Seccion-1-1.html" class="siguiente">Siguiente</a>
    </div>

</body>
</html>