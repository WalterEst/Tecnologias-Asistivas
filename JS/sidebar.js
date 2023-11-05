const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleButton');
const menuItems = sidebar.querySelectorAll('a');
const invertColorsButton = document.getElementById('invertColorsButton');
const increaseFontSizeButton = document.getElementById('increaseFontSizeButton');
const decreaseFontSizeButton = document.getElementById('decreaseFontSizeButton');
const grayscaleButton = document.getElementById('grayscaleButton');
const resetButton = document.getElementById('resetButton');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

invertColorsButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('invert-colors');
});

increaseFontSizeButton.addEventListener('click', () => {
    const currentSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
    const newSize = parseFloat(currentSize) * 1.2;
    document.body.style.fontSize = newSize + 'px';
});

decreaseFontSizeButton.addEventListener('click', () => {
    const currentSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
    const newSize = parseFloat(currentSize) / 1.2;
    document.body.style.fontSize = newSize + 'px';
});

grayscaleButton.addEventListener('click', () => {
    const isGrayscale = document.documentElement.style.filter === 'grayscale(100%)';

    if (isGrayscale) {
        document.documentElement.style.filter = '';
    } else {
        const grayscaleColors = ['#3c3c3c', '#515151', '#666666', '#8c8c8c', '#b5b5b5'];
        document.documentElement.style.filter = `progid:DXImageTransform.Microsoft.gradient(startColorstr=${grayscaleColors[0]}, endColorstr=${grayscaleColors[4]}, GradientType=0)`;
        document.documentElement.style.filter = `grayscale(100%)`;
    }
});

// Agrega el evento para resetear la página
resetButton.addEventListener('click', () => {
    location.reload(true); // Recarga la página forzando la recarga desde el servidor
});