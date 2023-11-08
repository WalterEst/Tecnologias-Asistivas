// Obtener referencias a elementos HTML por su ID
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleButton');
const menuItems = sidebar.querySelectorAll('a');
const invertColorsButton = document.getElementById('invertColorsButton');
const increaseFontSizeButton = document.getElementById('increaseFontSizeButton');
const decreaseFontSizeButton = document.getElementById('decreaseFontSizeButton');
const grayscaleButton = document.getElementById('grayscaleButton');
const resetButton = document.getElementById('resetButton');

// Agregar un evento de clic al botón de alternar (toggle) para abrir/cerrar el menú
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // Alternar la clase 'open' en la barra lateral
}); 

// Agregar un evento de clic al botón de inversión de colores
invertColorsButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('invert-colors'); // Alternar la clase 'invert-colors' en el elemento raíz (HTML)
});

// Agregar un evento de clic al botón de aumento de tamaño de fuente
increaseFontSizeButton.addEventListener('click', () => {
    // Obtener el tamaño de fuente actual, aumentarlo y aplicarlo al cuerpo del documento
    const currentSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
    const newSize = parseFloat(currentSize) * 1.2;
    document.body.style.fontSize = newSize + 'px';
});

// Agregar un evento de clic al botón de reducción de tamaño de fuente
decreaseFontSizeButton.addEventListener('click', () => {
    // Obtener el tamaño de fuente actual, reducirlo y aplicarlo al cuerpo del documento
    const currentSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
    const newSize = parseFloat(currentSize) / 1.2;
    document.body.style.fontSize = newSize + 'px';
});

// Agregar un evento de clic al botón de escala de grises
grayscaleButton.addEventListener('click', () => {
    // Verificar si el filtro de escala de grises ya está aplicado al documento
    const isGrayscale = document.documentElement.style.filter === 'grayscale(100%)';

    if (isGrayscale) {
        // Si ya está en escala de grises, eliminar el filtro
        document.documentElement.style.filter = '';
    } else {
        // Si no está en escala de grises, aplicar un filtro de escala de grises
        const grayscaleColors = ['#3c3c3c', '#515151', '#666666', '#8c8c8c', '#b5b5b5'];
        document.documentElement.style.filter = `progid:DXImageTransform.Microsoft.gradient(startColorstr=${grayscaleColors[0]}, endColorstr=${grayscaleColors[4]}, GradientType=0)`;
        document.documentElement.style.filter = `grayscale(100%)`;
    }
});

// Agregar un evento de clic al botón de reinicio
resetButton.addEventListener('click', () => {
    location.reload(true); // Recargar la página forzando la recarga desde el servidor
});
