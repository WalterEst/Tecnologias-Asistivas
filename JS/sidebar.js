const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleButton');
const menuItems = sidebar.querySelectorAll('a');
const invertColorsButton = document.getElementById('invertColorsButton');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});


invertColorsButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('invert-colors');
});