document.addEventListener('DOMContentLoaded', (event) => {
    const boton = document.getElementById('button');
    const div = document.getElementById('div');

    boton.addEventListener('click', () => {
        alert('Hola!');
    });

    div.addEventListener('click', () => {
        alert('Hola! Soy el div');
    });
});