// Obtener referencias a elementos HTML por su ID
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleButton');
const invertColorsButton = document.getElementById('invertColorsButton');
const increaseFontSizeButton = document.getElementById('increaseFontSizeButton');
const decreaseFontSizeButton = document.getElementById('decreaseFontSizeButton');
const grayscaleButton = document.getElementById('grayscaleButton');
const resetButton = document.getElementById('resetButton');

// Restaurar el estado de la escala de grises al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    restoreStateFromLocalStorage();
});

// Agregar un evento de clic al botón de alternar (toggle) para abrir/cerrar el menú
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    saveStateToLocalStorage('sidebarState', sidebar.classList.contains('open'));
});

// Agregar un evento de clic al botón de inversión de colores
invertColorsButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('invert-colors');
    saveStateToLocalStorage('invertColorsState', document.documentElement.classList.contains('invert-colors'));
});

// Agregar un evento de clic al botón de aumento de tamaño de fuente
increaseFontSizeButton.addEventListener('click', () => {
    changeFontSize('increase');
});

// Agregar un evento de clic al botón de reducción de tamaño de fuente
decreaseFontSizeButton.addEventListener('click', () => {
    changeFontSize('decrease');
});

// Agregar un evento de clic al botón de escala de grises
grayscaleButton.addEventListener('click', () => {
    toggleGrayscale();
});

// Función para cambiar el tamaño de la fuente
function changeFontSize(action) {
    const currentSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
    let newSize = parseFloat(currentSize);
    
    if (action === 'increase') {
        newSize *= 1.2;
    } else if (action === 'decrease') {
        newSize /= 1.2;
    }
    
    document.body.style.fontSize = newSize + 'px';
    saveStateToLocalStorage('fontSizeState', newSize);
}

// Función para alternar la escala de grises y guardar/restaurar su estado
function toggleGrayscale() {
    const isGrayscale = document.documentElement.classList.contains('grayscale');
    if (isGrayscale) {
        document.documentElement.classList.remove('grayscale');
        saveStateToLocalStorage('grayscaleState', false);
    } else {
        document.documentElement.classList.add('grayscale');
        saveStateToLocalStorage('grayscaleState', true);
    }
}


// Función para guardar el estado en localStorage
function saveStateToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Función para restaurar el estado desde localStorage
function restoreStateFromLocalStorage() {
    restoreElementState('sidebarState', sidebar, 'open');
    restoreElementState('invertColorsState', document.documentElement, 'invert-colors');
    restoreFontSizeState();
    restoreGrayscaleState();
}

// Función para restaurar el estado de la fuente desde localStorage
function restoreFontSizeState() {
    const fontSize = JSON.parse(localStorage.getItem('fontSizeState'));
    if (fontSize) {
        document.body.style.fontSize = fontSize + 'px';
    }
}

// Función para restaurar el estado de la escala de grises desde localStorage
function restoreGrayscaleState() {
    const isGrayscale = JSON.parse(localStorage.getItem('grayscaleState'));
    if (isGrayscale) {
        document.documentElement.classList.add('grayscale');
    }
}

// Función para restaurar el estado de los elementos desde localStorage
function restoreElementState(key, element, className) {
    const savedState = JSON.parse(localStorage.getItem(key));
    if (savedState !== null) {
        element.classList.toggle(className, savedState);
    }
}

// Agregar la funcionalidad para el botón de reset
resetButton.addEventListener('click', () => {
    localStorage.clear();
    location.reload(true);
});
