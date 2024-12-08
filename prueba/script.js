// Elementos principales
const aumentarBtn = document.getElementById('aumentar');
const disminuirBtn = document.getElementById('disminuir');
const mayor = document.getElementById('mayor');
const body = document.body;

const root = document.documentElement;

// Configuración de tamaños
const tamanioInicial = parseFloat(getComputedStyle(root).getPropertyValue('--font-size-base')); // Tamaño inicial en rem
const escala = parseFloat(getComputedStyle(root).getPropertyValue('--font-size-step')); // Incremento/decremento en rem (2px)

// Variable para controlar el tamaño actual
let tamanioActual = tamanioInicial;

// Función para actualizar el tamaño de letra
function actualizarTamanio(nuevoTamanio) {
tamanioActual = nuevoTamanio;
let tamanioActual2 = nuevoTamanio+1;
body.style.fontSize = `${tamanioActual}rem`;
mayor.style.fontSize=  `${tamanioActual2}rem`;
}

// Eventos para los botones
aumentarBtn.addEventListener('click', () => {
actualizarTamanio(tamanioActual + escala);
});

disminuirBtn.addEventListener('click', () => {
actualizarTamanio(tamanioActual - escala);
});

