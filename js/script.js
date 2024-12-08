let dia = document.getElementById("theme");

// Función para cambiar entre modos
function modo() {
    if (dia.getAttribute("class") == "fa-solid fa-moon") {
        // Cambiar al modo nocturno
        dia.setAttribute("class", "fa-solid fa-sun");
        document.body.setAttribute("class", "nocturno");
        
        // Guardar en localStorage el estado
        localStorage.setItem("modo", "nocturno");
    } else if (dia.getAttribute("class") == "fa-solid fa-sun") {
        // Cambiar al modo diurno
        dia.setAttribute("class", "fa-solid fa-moon");
        document.body.setAttribute("class", "diurno");
        
        // Guardar en localStorage el estado
        localStorage.setItem("modo", "diurno");
    }
}

// Al cargar la página, verifica el estado guardado en localStorage
window.onload = function() {
    let modoGuardado = localStorage.getItem("modo");

    if (modoGuardado === "nocturno") {
        // Si está en modo nocturno, aplica ese estado
        dia.setAttribute("class", "fa-solid fa-sun");
        document.body.setAttribute("class", "nocturno");
    } else if (modoGuardado === "diurno") {
        // Si está en modo diurno, aplica ese estado
        dia.setAttribute("class", "fa-solid fa-moon");
        document.body.setAttribute("class", "diurno");
    }
};

// Elementos principales
const aumentarBtn = document.getElementById('aumentar');
const disminuirBtn = document.getElementById('disminuir');
// Se puede coger el elemento de otra forma?
//const header = document.querySelector("header");
const body = document.body;
const root = document.documentElement;
const headerTitle = document.querySelector("header span");
const nav = document.querySelector("nav");
const aside = document.querySelector("aside");
const main = document.querySelector("main");
//Esto no funciona
//const tituloSection=document.querySelectorAll("main section > span"); 


// Configuración de tamaños
const tamanioInicial = parseFloat(getComputedStyle(root).getPropertyValue('--font-size-base')); // Tamaño inicial en rem
const escala = parseFloat(getComputedStyle(root).getPropertyValue('--font-size-step')); // Incremento/decremento en rem (2px)

// Variable para controlar el tamaño actual
let tamanioActual = tamanioInicial;
let tamanioActual2 = tamanioInicial;
// Función para actualizar el tamaño de letra
function actualizarTamanio(nuevoTamanio) {
tamanioActual=nuevoTamanio;
body.style.fontSize=`${tamanioActual}rem`;
//header.style.fontSize=  `${tamanioActual-1.5}rem`;
headerTitle.style.fontSize=`${tamanioActual+1}rem`;
nav.style.fontSize=`${tamanioActual+0.5}rem`;
nav.style.fontSize=`${tamanioActual+0.35}rem`;
main.style.fontSize=`${tamanioActual-0.5}rem`;
//tituloSection.style.fontSize=`${tamanioActual+5}rem`;
}

// Eventos para los botones
aumentarBtn.addEventListener('click', () => {
actualizarTamanio(tamanioActual + escala);
});

disminuirBtn.addEventListener('click', () => {
actualizarTamanio(tamanioActual - escala);
});



