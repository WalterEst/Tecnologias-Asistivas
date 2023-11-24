const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleButton');
const invertColorsButton = document.getElementById('invertColorsButton');
const increaseFontSizeButton = document.getElementById('increaseFontSizeButton');
const decreaseFontSizeButton = document.getElementById('decreaseFontSizeButton');
const grayscaleButton = document.getElementById('grayscaleButton');
const resetButton = document.getElementById('resetButton');

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
