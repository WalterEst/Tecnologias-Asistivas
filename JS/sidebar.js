const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleButton');
const menuItems = sidebar.querySelectorAll('a');
const invertColorsButton = document.getElementById('invertColorsButton');
const increaseFontSizeButton = document.getElementById('increaseFontSizeButton');
const decreaseFontSizeButton = document.getElementById('decreaseFontSizeButton');
const grayscaleButton = document.getElementById('grayscaleButton'); 
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

invertColorsButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('invert-colors');
});

increaseFontSizeButton.addEventListener('click', () => {
    // Obtener el tamaño actual del texto
    const currentSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
    
    // Aumentar el tamaño del texto (puedes ajustar el valor según tus necesidades)
    const newSize = parseFloat(currentSize) * 1.2; // Aumenta el tamaño en un 20%
    
    // Aplicar el nuevo tamaño del texto
    document.body.style.fontSize = newSize + 'px';
});

decreaseFontSizeButton.addEventListener('click', () => {
    // Obtener el tamaño actual del texto
    const currentSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
    
    // Disminuir el tamaño del texto (puedes ajustar el valor según tus necesidades)
    const newSize = parseFloat(currentSize) / 1.2; // Disminuye el tamaño en un 20%
    
    // Aplicar el nuevo tamaño del texto
    document.body.style.fontSize = newSize + 'px';
});

grayscaleButton.addEventListener('click', () => {
    // Verificar si la escala de grises ya está aplicada
    const isGrayscale = document.documentElement.style.filter === 'grayscale(100%)';

    // Si la escala de grises está aplicada, quitarla; de lo contrario, aplicarla
    if (isGrayscale) {
        document.documentElement.style.filter = '';
    } else {
        // Aplicar la escala de grises
        const grayscaleColors = ['#3c3c3c', '#515151', '#666666', '#8c8c8c', '#b5b5b5'];
        document.documentElement.style.filter = `progid:DXImageTransform.Microsoft.gradient(startColorstr=${grayscaleColors[0]}, endColorstr=${grayscaleColors[4]}, GradientType=0)`;
        document.documentElement.style.filter = `grayscale(100%)`;
    }
});