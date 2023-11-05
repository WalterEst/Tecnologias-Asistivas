
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleButton');
const menuItems = sidebar.querySelectorAll('a');
const invertColorsButton = document.getElementById('invertColorsButton');
const increaseFontSizeButton = document.getElementById('increaseFontSizeButton');
const decreaseFontSizeButton = document.getElementById('decreaseFontSizeButton'); // Agregado

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