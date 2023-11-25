document.addEventListener('DOMContentLoaded', function () {
    const contentToRead = document.querySelector('.bloque-enunciado, .contenedor-titulos-index');
    const readAloudButton = document.getElementById('readAloudButton');

    readAloudButton.addEventListener('click', function (event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace

        const textToRead = contentToRead.innerText;

        const speech = new SpeechSynthesisUtterance(textToRead);
        speech.lang = 'es-LA';
        speech.rate = 1.1;

        speechSynthesis.speak(speech);
    });
});
