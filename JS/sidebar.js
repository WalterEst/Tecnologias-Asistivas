const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleButton');
const invertColorsButton = document.getElementById('invertColorsButton');
const increaseFontSizeButton = document.getElementById('increaseFontSizeButton');
const decreaseFontSizeButton = document.getElementById('decreaseFontSizeButton');
const grayscaleButton = document.getElementById('grayscaleButton');
const resetButton = document.getElementById('resetButton');
const lightBackgroundButton = document.getElementById('lightBackgroundButton');
const readableFontButton = document.getElementById('readableFontButton');
const highContrastButton = document.getElementById('highContrastButton');

document.addEventListener('DOMContentLoaded', () => {
    restoreStateFromLocalStorage();
});

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    saveStateToLocalStorage('sidebarState', sidebar.classList.contains('open'));
});

invertColorsButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('invert-colors');
    saveStateToLocalStorage('invertColorsState', document.documentElement.classList.contains('invert-colors'));
});

increaseFontSizeButton.addEventListener('click', () => {
    changeFontSize('increase');
});

decreaseFontSizeButton.addEventListener('click', () => {
    changeFontSize('decrease');
});

grayscaleButton.addEventListener('click', () => {
    toggleGrayscale();
});

lightBackgroundButton.addEventListener('click', () => {
    const isLightBackground = document.body.style.backgroundColor === 'white' && document.body.style.color === 'black';

    if (isLightBackground) {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        saveStateToLocalStorage('lightBackgroundState', false);
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        saveStateToLocalStorage('lightBackgroundState', true);
    }
});

readableFontButton.addEventListener('click', () => {
    const isReadableFont = document.body.style.fontFamily === 'Verdana, Arial, sans-serif' &&
        document.body.style.fontSize === '18px' &&
        document.body.style.lineHeight === '1.6' &&
        document.body.style.marginLeft === '20px';

    if (isReadableFont) {
        document.body.style.fontFamily = '';
        document.body.style.fontSize = '';
        document.body.style.lineHeight = '';
        document.body.style.marginLeft = '';
        saveStateToLocalStorage('readableFontState', false);
    } else {
        document.body.style.fontFamily = 'Verdana, Arial, sans-serif';
        document.body.style.fontSize = '18px';
        document.body.style.lineHeight = '1.6';
        document.body.style.marginLeft = '20px';
        saveStateToLocalStorage('readableFontState', true);
    }
});

highContrastButton.addEventListener('click', () => {
    const isHighContrast = highContrastButton.classList.contains('clickeada');

    if (isHighContrast) {
        // Restaurar los estilos originales
        document.body.style.backgroundImage = ''; // Restaurar la imagen de fondo original
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(title => {
            title.style.color = ''; // Restaurar el color original de los títulos
        });
        saveStateToLocalStorage('highContrastState', false);
    } else {
        // Aplicar estilos de alto contraste
        document.body.style.backgroundImage = 'url("Imagenes/index/Fondocontraste.png")'; // Cambiar la imagen de fondo
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white'; // Establecer el color blanco para el texto del cuerpo
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(title => {
            title.style.color = 'white'; // Establecer el color blanco para los títulos
        });
        saveStateToLocalStorage('highContrastState', true);
    }

    highContrastButton.classList.toggle('clickeada');
});

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

function saveStateToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function restoreStateFromLocalStorage() {
    restoreElementState('sidebarState', sidebar, 'open');
    restoreElementState('invertColorsState', document.documentElement, 'invert-colors');
    restoreFontSizeState();
    restoreGrayscaleState();
    restoreLightBackgroundState();
    restoreReadableFontState();
    restoreHighContrastState();
}

function restoreFontSizeState() {
    const fontSize = JSON.parse(localStorage.getItem('fontSizeState'));
    if (fontSize) {
        document.body.style.fontSize = fontSize + 'px';
    }
}

function restoreGrayscaleState() {
    const isGrayscale = JSON.parse(localStorage.getItem('grayscaleState'));
    if (isGrayscale) {
        document.documentElement.classList.add('grayscale');
    }
}

function restoreLightBackgroundState() {
    const hasLightBackground = JSON.parse(localStorage.getItem('lightBackgroundState'));
    if (hasLightBackground) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}

function restoreReadableFontState() {
    const hasReadableFont = JSON.parse(localStorage.getItem('readableFontState'));
    if (hasReadableFont) {
        document.body.style.fontFamily = 'Verdana, Arial, sans-serif';
        document.body.style.fontSize = '18px';
        document.body.style.lineHeight = '1.6';
        document.body.style.marginLeft = '20px';
    }
}
function restoreHighContrastState() {
    const isHighContrast = JSON.parse(localStorage.getItem('highContrastState'));
    if (isHighContrast) {
        document.body.style.backgroundImage = 'url("Imagenes/index/Fondocontraste.png")';
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';

        // Cambiar el filtro de las imágenes
        document.querySelectorAll('img').forEach(img => {
            img.style.filter = 'invert(100%)'; // Puedes ajustar el filtro según tus preferencias
        });

        // Cambiar el color de los títulos
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(title => {
            title.style.color = 'white';
        });

        // Invertir solo los números del reloj
        document.getElementById('hr').style.filter = 'invert(100%)';
        document.getElementById('min').style.filter = 'invert(100%)';
        document.getElementById('dot').style.filter = 'invert(100%)';

        highContrastButton.classList.add('clickeada');
    }
}

function restoreElementState(key, element, className) {
    const savedState = JSON.parse(localStorage.getItem(key));
    if (savedState !== null) {
        element.classList.toggle(className, savedState);
    }
}

resetButton.addEventListener('click', () => {
    localStorage.clear();
    location.reload(true);
});
